import { LitElement, html } from "lit-element";

export class ListRender extends LitElement {
  static get properties() {
    return {
      writers: { Type: Array }
    };
  }

  constructor() {
    super();
    this.writers = ["Carver", "Wloff", "Cheever"];
  }

  render() {
    return html`
      <h3>Componente Lista (Renderizado de listas)</h1>
      <ul>
        ${this.writers.map(writer => html`<li>${writer}</li>`)}</ul>`;
  }
}
customElements.define("list-render", ListRender);
