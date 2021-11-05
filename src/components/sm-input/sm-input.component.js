import { html, LitElement, css, unsafeCSS } from "lit";
import sminputcomponent from "./sm-input.component-styles.js";

export class SmInput extends LitElement {

    static get properties() {
        return {
            placeholder: {
                type: String
            },
            type: {
                type: String
            },
            class: {
                type: String
            },
            isPrimary: {
                type: Boolean
            }
        }
    }

    static get styles() {
        return css `${unsafeCSS(sminputcomponent)}`;
    }

    constructor() {
        super();
        this.placeholder = '';
        this.type = 'text'
        this.isPrimary = true;
    }

    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
    }

    render() {
        return html `
                <input type="${this.type}" class='${this.class}
                ${this.isPrimary ? 'smInput__primary' : 'smInput__secondary'}' placeholder="${this.placeholder}" />
        `;
    }
}

customElements.define('sm-input', SmInput);