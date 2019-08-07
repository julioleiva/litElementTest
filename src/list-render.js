import { LitElement, html } from "lit-element";

export class ListElement extends LitElement {
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
      <ul>
        <!-- function hmtl`` anidado -->
        ${this.writers.map(
          writer =>
            html`
              <li>${writer}</li>
            `
        )}
      </ul>
    `;
  }
}
customElements.define("timestamp-todate", ListElement);
