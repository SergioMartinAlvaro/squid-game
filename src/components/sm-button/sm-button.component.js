import { html, LitElement, css, unsafeCSS } from "lit";
import  smbuttoncomponent  from "./sm-button.component-styles.js";

export class SmButton extends LitElement {

    static get properties() {
        return {
            text: {
                type: String
            },
            event: {
                type: String
            }
        }
    }

    static get styles() {
        return css`${unsafeCSS(smbuttoncomponent)}`;
    }

    constructor() {
        super();
        this.text = '';
        this.event = '';
    }

    render() {
        return html`
            <div class="sm__buttonWrapper">
                <button type='button' class='sm__button' @click="${this.sendEvent}">${this.text}</button>
            </div>
        `;
    }

    sendEvent() {
        if(this.event !== '') {
            window.EE.emit(this.event);
        } else {
            console.log('No hay un evento registrado para el componente.');
        }

    }
}

customElements.define('sm-button', SmButton);