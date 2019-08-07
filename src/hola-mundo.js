import { LitElement, html } from "lit-element";

class HolaMundo extends LitElement {
  static get properties() {
    return {
      name: String
    };
  }

  render() {
    return html`
      <h1>Hello ${this.name}</h1>
    `;
  }
}
customElements.define("hola-mundo", HolaMundo);
