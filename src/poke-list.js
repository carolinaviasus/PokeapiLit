import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class PokeList extends LitElement {

  static get styles() {
    return css`
      .pokemon {
        cursor: pointer;
        margin: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        text-align: center;
      }
      .pokemon img {
        max-width: 100px;
        height: auto;
      }
    `;
  }

  render() {
    return html`
      <h1>Pokémon List</h1>
      ${this.pokemons.map(pokemon => html`
        <div class="pokemon" @click="${() => this.onSelectPokemon(pokemon)}">
          <h2>${pokemon.name}</h2>
          <p>Type: ${pokemon.type}</p>
          <img src="${this.getImageUrl(pokemon.image)}" alt="${pokemon.name}">
        </div>
      `)}
    `;
  }

  getImageUrl(imageName) {
    return `assets/pokemon/${imageName}`;
  }
}

customElements.define('poke-list', PokeList);
