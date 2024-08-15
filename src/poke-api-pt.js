import { LitElement, html, css } from 'lit';
import style from './styles/PokeApiPtStyle';

class PokeApiPt extends LitElement {
  static get properties() {
    return {
      pokemons: { type: Array },
      selectedPokemon: { type: Object }
    };
  }

  static get styles() {
    return css`
      .pokemon, .evolution {
        cursor: pointer;
        margin: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        text-align: center;
      }
      .pokemon img, .evolution img {
        max-width: 100px;
        height: auto;
      }
      .evolutions {
        margin-top: 10px;
      }
      button {
        margin-bottom: 20px;
      }
    `;
  }

  constructor() {
    super();
    this.pokemons = [];
    this.selectedPokemon = null;
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
  }

  showPokemons() {
    this.selectedPokemon = null;
  }

  render() {
    if (this.selectedPokemon) {
      return html`
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
      `;
    }

    return html`
      <h1>Pokémon List</h1>
      ${this.pokemons.map(pokemon => html`
        <div class="pokemon" @click="${() => this.showEvolutions(pokemon)}">
          <h2>${pokemon.name}</h2>
          <p>Type: ${pokemon.type}</p>
          <img src="${this.getImageUrl(pokemon.image)}" alt="${pokemon.name}">
        </div>
      `)}
    `;
  }
}

customElements.define('poke-api-pt', PokeApiPt);
