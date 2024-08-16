import { LitElement, html, css } from 'lit';

class PokeApiPtEditor extends LitElement {
  static get properties() {
    return {
      selectedPokemon: { type: Object },
      isRepeated: { type: Boolean }
    };
  }

  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-width: 600px;
      margin: 0 auto;
    }

    form div {
      display: flex;
      flex-direction: column;
    }

    label {
      font-weight: bold;
    }

    input {
      padding: 8px;
      font-size: 16px;
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #0056b3;
    }

    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .modal.show {
      display: flex;
    }

    .modal-content {
      background: white;
      padding: 20px;
      border-radius: 8px;
      width: 80%;
      max-width: 500px;
      position: relative;
    }

    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 24px;
      cursor: pointer;
    }

    .close:hover {
      color: red;
    }
  `;

  constructor() {
    super();
    this.selectedPokemon = null;
    this.isRepeated = false;
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.isRepeated) {
      this.showModal();
    } else {
      this.dispatchEvent(new CustomEvent('edit-cancelled'));
    }
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
              <input type="text" .value="${evolution.image}" @input="${e => this.handleInputChange(index, 'image', e)}">
            </div>
          `)}
          <div>
            <label>Repeated Pokémon:</label>
            <input type="checkbox" .checked="${this.isRepeated}" @change="${this.handleCheckboxChange}">
          </div>
          <button type="submit">Save Changes</button>
        </form>

        <!-- Modal Informativo -->
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
