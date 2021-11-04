import { html, LitElement, css, unsafeCSS } from "lit";
import smheadercomponent from "./sm-header.component-styles.js";

export class SmHeader extends LitElement {

    static get styles() {

        return css`${unsafeCSS(smheadercomponent)}`;
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <header class="header" id="header">
                <h1 class="header__title">
                    Aplicacion Base
                </h1>
            </header>
        `;
    }
}

customElements.define('sm-header', SmHeader);