import { Router } from '@vaadin/router';
import { html, LitElement } from 'lit';
import './src/poke-api-pt.js';
import './src/PokeApiPtEditor.js';

class MyApp extends LitElement {

  firstUpdated() {
    super.firstUpdated();
    this.router = new Router(this.shadowRoot.querySelector('#outlet'));
    this.router.setRoutes([
      { path: '/home', component: 'poke-api-pt' },
      { path: '/home/:pokemonName?', component: 'poke-api-pt' },
      { path: '/edit', component: 'poke-api-pt-editor' }
    ]);
  }

  render() {
    return html`
      <div id="outlet"></div>
    `;
  }
}

customElements.define('my-app', MyApp);
