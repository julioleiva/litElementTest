import { LitElement, html } from 'lit-element';


export class TimestampTodate extends LitElement {
    static get properties() {
        return {
            timeStamp: {type: String},
        }
    }

    constructor(){
        super();
        this.timeStamp = 0;
    }

    render() {
        return html`
        <style>
            h3 {
                color: red;
            }
        </style>
        <h3>Componente timeStamp(Inicializxación variables en contructor, métodos de componente)</h1>
            <span>${this.getDate(this.timeStamp)}</span>
        `
    };
    getDate(timeStamp){
        let date = new Date(parseInt(timeStamp));
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    }

    
}
customElements.define('timestamp-todate', TimestampTodate);