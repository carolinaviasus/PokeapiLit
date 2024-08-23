import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import style from './styles/PokeApiPtStyle';
import './PokeApiPtEditor.js';

class PokeApiPt extends LitElement {
  static get properties() {
    return {
      pokemons: { type: Array },
      selectedPokemon: { type: Object },
      isEditing: { type: Boolean },
      location: { type: Object } // Añadido para manejar la ubicación actual
    };
  }

  static styles = [style];

  constructor() {
    super();
    this.pokemons = [];
    this.selectedPokemon = null;
    this.isEditing = false;
    this.location = { params: {} };
    this.loadPokemons();
    // Actualizar el estado cuando cambie la ubicación
    this.addEventListener('location-changed', this.updateSelectedPokemon.bind(this));
  }

  async loadPokemons() {
    try {
      const response = await fetch('http://localhost:3000/pokemon');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.pokemons = data;
      // Actualizar el Pokémon seleccionado si hay un parámetro en la URL
      this.updateSelectedPokemon();
    } catch (error) {
      console.error('Error loading pokemons:', error);
    }
  }

  updateSelectedPokemon() {
    const pokemonName = this.location.params.pokemonName;
    if (pokemonName) {
      this.selectedPokemon = this.pokemons.find(pokemon => pokemon.name === pokemonName) || null;
      if (this.selectedPokemon) {
        this.isEditing = false;
      }
    } else {
      this.selectedPokemon = null;
    }
  }

  getImageUrl(imageName) {
    return `assets/pokemon/${imageName}`;
  }

  showEvolutions(pokemon) {
    Router.go(`/home/${pokemon.name}`);
  }

  startEditing() {
    sessionStorage.setItem('selectedPokemon', JSON.stringify(this.selectedPokemon));
    Router.go('/edit');
  }
  

  showPokemons() {
    this.selectedPokemon = null;
    this.isEditing = false;
    Router.go('/home');
  }

  handleEditCancelled() {
    this.showPokemons();
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('location')) {
      this.updateSelectedPokemon();
    }
  }

  render() {
    return html`
      ${this.selectedPokemon ? html`
        ${this.isEditing ? html`
          <poke-api-pt-editor
            .selectedPokemon="${this.selectedPokemon}"
            @edit-cancelled="${this.handleEditCancelled}">
          </poke-api-pt-editor>
        ` : html`
          <div class="evolutions">
            <h1>${this.selectedPokemon.name}</h1>
            <p>Type: ${this.selectedPokemon.type}</p>
            <div class='imagenpokee'>
              <img src="${this.getImageUrl(this.selectedPokemon.image)}" alt="${this.selectedPokemon.name}">
            </div>
            <h2>Evolutions</h2>
            ${this.selectedPokemon.evolutions.map(evolution => html`
              <div class="evolution">
                <h3>${evolution.name}</h3>
                <p>Type: ${evolution.type}</p>
                <img src="${this.getImageUrl(evolution.image)}" alt="${evolution.name}">
              </div>
            `)}
            <button class='back' @click="${this.showPokemons}">Back to Pokémon List</button>
            <button @click="${this.startEditing}">Edit Evolutions</button>
          </div>
        `}
      ` : html`
        <div class="header-container">
          <h1 class="headerpoke">Pokémon</h1>
          <img src="assets/pokemon/images-removebg-preview.png" alt="Pokémon Logo" class="header-image">
          
        </div>
        <div class="card-container">
         ${this.pokemons.map(pokemon => html`
          <div class="card" @click="${() => this.showEvolutions(pokemon)}">
            <div class="card-content"> 
              <div class='imagenpoke'>
                <img src="${this.getImageUrl(pokemon.image)}" alt="${pokemon.name}">
              </div>
              <div class="textpoke">
                <h2>${pokemon.name}</h2>
                <p>Type: ${pokemon.type}</p>
              </div>
            </div>
          </div>
        `)}
        </div>
      `}
    `;
  }
}

customElements.define('poke-api-pt', PokeApiPt);
