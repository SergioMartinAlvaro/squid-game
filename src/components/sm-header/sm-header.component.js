import { html, LitElement, css, unsafeCSS } from "lit";
import smheadercomponent from "./sm-header.component-styles.js";

export class SmHeader extends LitElement {

    static get styles() {

        return css `${unsafeCSS(smheadercomponent)}`;
    }

    constructor() {
        super();
    }

    render() {
        return html `
            <header class="header" id="header">
                <h1 class="header__title">
                    Squid Game
                </h1>
            </header>
            <div class="neumorph shadow"></div>
        `;
    }
}

customElements.define('sm-header', SmHeader);