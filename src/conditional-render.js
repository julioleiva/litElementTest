import { LitElement, html, css } from "lit-element";

class ConditionalRender extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        h1 {
          color: red;
        }
      }
    `;
  }

  static get properties() {
    return {
      visible: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.visible = true;
  }

  render() {
    return html`
      <h3>Componente de Renderizado condicional con operador ternario</h3>
      <button
        @click=${this.toggleVisibility}>
        ${this.visible ? "Ocultar" : "Mostrar" }
      </button>
      ${this.visible
        ? html`
            <h1>Te veo</h1>
          `
        : html`
            <h1>No te veo</h1>
          `}
    `;
  }
  toggleVisibility(){
    this.visible = !this.visible;
  }
}

customElements.define("conditional-render", ConditionalRender);
