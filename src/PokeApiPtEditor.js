import { LitElement, html, css } from 'lit';
import style from './styles/PokeApiEditorStyle';

class PokeApiPtEditor extends LitElement {
  static get properties() {
    return {
      selectedPokemon: { type: Object },
      isRepeated: { type: Boolean }
    };
  }

  static styles = [style];

  constructor() {
    super();
    this.selectedPokemon = null;
    this.isRepeated = false;
  }

  showModal() {
    const modal = this.shadowRoot.querySelector('#info-modal');
    modal.classList.add('show');
  }

  closeModal() {
    const modal = this.shadowRoot.querySelector('#info-modal');
    modal.classList.remove('show');
  }

  handleInputChange(evolutionIndex, field, event) {
    this.selectedPokemon.evolutions[evolutionIndex][field] = event.target.value;
    this.requestUpdate();
  }

  handleCheckboxChange(event) {
    this.isRepeated = event.target.checked;
    if (this.isRepeated) {
      this.showModal();
    }
  }

  render() {
    if (this.selectedPokemon) {
      return html`
        <button @click="${() => this.dispatchEvent(new CustomEvent('edit-cancelled'))}">
          Cancel Edit
        </button>

        <form @submit="${this.handleFormSubmit}">
          <h2>Edit Evolution</h2>
          ${this.selectedPokemon.evolutions.map((evolution, index) => html`
            <div>
              <label>Name:</label>
              <input type="text" .value="${evolution.name}" @input="${e => this.handleInputChange(index, 'name', e)}">
            </div>
            <div>
              <label>Type:</label>
              <input type="text" .value="${evolution.type}" @input="${e => this.handleInputChange(index, 'type', e)}">
            </div>
            <div>
              <label>Image:</label>
              <input class='imagen' type="text" .value="${evolution.image}" @input="${e => this.handleInputChange(index, 'image', e)}">
            </div>
          `)}
          <div>
            <label>Repeated Pokémon:</label>
            <input type="checkbox" .checked="${this.isRepeated}" @change="${this.handleCheckboxChange}">
          </div>
          <button type="submit">Save Changes</button>
        </form>

        <div id="info-modal" class="modal">
          <div class="modal-content">
            <span @click="${this.closeModal}" class="close">&times;</span>
            <p>This Pokémon is repeated. Please change it at the nearest point.</p>
          </div>
        </div>
      `;
    }

    return html``;
  }
}

customElements.define('poke-api-pt-editor', PokeApiPtEditor);
