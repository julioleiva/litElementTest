import { LitElement, html } from 'lit-element';

export class MyCounter extends LitElement {

    static get properties() {
        return {
            counter: {type: Number}
        };
    }

    constructor(){
        super()
        this.counter = 0;
    }

    render() {
        return html`
        <style>
            button {
                border-radius: 5px;
            }
            h3 {
                color: red;
            }
        </style>
        <h3>Componente Contador(Eventos, Componente anidado, shadowRoot.getElementById("feedback") )</h1>
          <div>Llevas ${this.counter} clicks.</div>
          <div><button @click="${this.increase}">+1</button></div>
          <div><button @click="${this.decrease}">-1</button></div>
          <!-- Componente anidado  -->
          <feedback-element id="feedback"></feedback-element>
        `
    }

    decrease() {
        if(this.counter <= 0) {
            this.counter = 0;
            this.shadowRoot.getElementById("feedback").open("No se puede bajar de cero ;)");
        } else {
            this.counter --;
        }            
                
    }

    increase() {
        this.counter ++;
        if (this.counter === 5){
            this.shadowRoot.getElementById("feedback").open("Has llegado a 5 clicks")
        } 
    }
}
customElements.define('my-counter', MyCounter);