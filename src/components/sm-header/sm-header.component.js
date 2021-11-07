import { html, LitElement, css, unsafeCSS } from "lit";
import userStorage from "../../classes/UserStorage.js";
import smheadercomponent from "./sm-header.component-styles.js";

export class SmHeader extends LitElement {

    static get properties() {
        return {
            isLogged: {
                type: String
            }
        }

    }

    static get styles() {

        return css `${unsafeCSS(smheadercomponent)}`;
    }

    constructor() {
        super();
        this.isLogged = 'unlogged';
        this.user = JSON.parse(localStorage.getItem('currentUser'));
    }

    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
    }

    render() {
            return html `
            <a class="login-access link" href="/squid-game">Ir al juego</a>
            <header class="header" id="header">
                <h1 class="header__title">
                    Squid Game
                </h1>
                <div class="header__logout">
                    ${this.isLogged == 'login' ? html`
                    <p class="header__text" @click='${this.logout}'>Logout</p>
                    ` : html``}
                </div>
            </header>
            <div class="neumorph shadow"></div>
        `;
    }

    logout() {
        window.EE.emit('logout');
        window.location.href = process.env.ROOT_URL;
    }
}

customElements.define('sm-header', SmHeader);