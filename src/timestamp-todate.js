import { LitElement, html } from 'lit-element';
import { throws } from 'assert';

export class TimestampTodate extends LitElement {
    static get properties() {
        return {
            timeStamp: {type: String},
            writers: {Type: Array}
        }
    }

    constructor(){
        super();
        this.writers = ['Carver', 'Wloff', 'Cheever']
    }

    render() {
        return html`
            <span>${this.getDate(this.timeStamp)}</span>
        `
    };
    getDate(timeStamp){
        let date = new Date(parseInt(timeStamp));
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    }

    
}
customElements.define('timestamp-todate', TimestampTodate);