import { LitElement, html, css } from 'lit';
import style from './styles/PokeApiPtStyle';
import './PokeApiPtEditor.js';

class PokeApiPt extends LitElement {
  static get properties() {
    return {
      pokemons: { type: Array },
      selectedPokemon: { type: Object },
      isEditing: { type: Boolean }
    };
  }

  static styles = [style];

  constructor() {
    super();
    this.pokemons = [];
    this.selectedPokemon = null;
    this.isEditing = false;
    this.loadPokemons();
  }

  async loadPokemons() {
    try {
      const response = await fetch('http://localhost:3000/pokemon');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.pokemons = data;
    } catch (error) {
      console.error('Error loading pokemons:', error);
    }
  }

  getImageUrl(imageName) {
    return `assets/pokemon/${imageName}`;
  }

  showEvolutions(pokemon) {
    this.selectedPokemon = pokemon;
    this.isEditing = false; // Ensure we are not in edit mode
  }

  startEditing() {
    this.isEditing = true;
  }

  showPokemons() {
    this.selectedPokemon = null;
    this.isEditing = false;
  }

  handleEditCancelled() {
    this.showPokemons();
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
          <button @click="${this.startEditing}">Edit Evolutions</button>
          <button @click="${this.showPokemons}">Back to Pokémon List</button>
          <h1>${this.selectedPokemon.name}</h1>
          <p>Type: ${this.selectedPokemon.type}</p>
          <img src="${this.getImageUrl(this.selectedPokemon.image)}" alt="${this.selectedPokemon.name}">
          <div class="evolutions">
            <h2>Evolutions</h2>
            ${this.selectedPokemon.evolutions.map(evolution => html`
              <div class="evolution">
                <h3>${evolution.name}</h3>
                <p>Type: ${evolution.type}</p>
                <img src="${this.getImageUrl(evolution.image)}" alt="${evolution.name}">
              </div>
            `)}
          </div>
        `}
      ` : html`
        <h1>Pokémon List</h1>
        ${this.pokemons.map(pokemon => html`
          <div class='card'>
            <div class="pokemon" @click="${() => this.showEvolutions(pokemon)}">
              <h2>${pokemon.name}</h2>
              <p>Type: ${pokemon.type}</p>
              <img src="${this.getImageUrl(pokemon.image)}" alt="${pokemon.name}">
            </div>
          </div>
        `)}
      `}
    `;
  }
}

customElements.define('poke-api-pt', PokeApiPt);
