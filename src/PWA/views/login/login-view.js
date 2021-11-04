import { html, css, unsafeCSS } from "lit";
import { BaseView } from "../base/base-view";
import loginview from "./login-view-styles";
import { connect } from 'pwa-helpers';
import { store } from "../../../redux/store";


class LoginView extends connect(store)(BaseView) {

    constructor() {
        super();
        window.EE.on('sendForm', () => {
            document.querySelector('.main-access').click();
        })
    }

    static get styles() {
        return css `${unsafeCSS(loginview)}`;
    }

    static get properties() {
        return {
            todos: { type: Array },
            filter: { type: String },
            task: { type: String }
        }
    }

    render() {
        return html `
            <main class="container">
                <div class="container__loginWrapper">
                    <div class="container__inputWrapper">
                        <a class="main-access" href="/main">Ir al juego</a>
                        <sm-input type="text" placeholder='Introduce un usuario'></sm-input>
                        <sm-button text="Entrar al juego" event="sendForm"></sm-button>
                    </div>
                </div>
            </main>
        `;
    }
}

customElements.define('login-view', LoginView)