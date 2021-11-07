import { html, LitElement, css, unsafeCSS } from "lit";
import smbuttoncomponent from "./sm-button.component-styles.js";

export class SmButton extends LitElement {

    static get properties() {
        return {
            text: {
                type: String
            },
            event: {
                type: String
            },
            type: {
                type: String
            }
        }
    }

    static get styles() {
        return css `${unsafeCSS(smbuttoncomponent)}`;
    }

    constructor() {
        super();
        this.type = 'primary';
        this.text = '';
        this.event = '';
        if (this.type !== 'primary') {
            this.classButton = '--small';
        }
    }

    render() {
        return html `
            <div class="sm__buttonWrapper${this.classButton}">
                <button type='button' class='circle shadow' @click="${this.sendEvent}">${this.text}</button>
            </div>
        `;
    }

    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
    }

    sendEvent() {
        if (this.event !== '') {
            window.EE.emit(this.event);
        } else {
            console.log('No hay un evento registrado para el componente.');
        }

    }
}

customElements.define('sm-button', SmButton);