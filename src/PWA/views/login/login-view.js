import { html, css, unsafeCSS } from "lit";
import { BaseView } from "../base/base-view";
import loginview from "./login-view-styles";
import { connect } from 'pwa-helpers';
import { store } from "../../../redux/store";
import COMPONENT_MESSAGES from "../../../utils/messages/componentMessages";
import userStorage from "../../../classes/UserStorage";
import User from "../../../classes/User";
import img from '../../../assets/squid.svg';

const inputClass = 'input__login';
class LoginView extends connect(store)(BaseView) {

    constructor() {
        super();
        window.EE.on('sendForm', () => {
            let userValue = document.body.querySelector('sm-input').shadowRoot.querySelector('.input__login').value;
            if (userValue) {
                this.createUser(userValue);
                document.querySelector('.main-access').click();
            } else {
                this.message = COMPONENT_MESSAGES.login.notIntroducted;
                console.log("Debes introducir un valor");
            }
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
            <style>
                ${unsafeCSS(loginview)}
            </style>
            <main class="loginContainer">
                <sm-image className='imageSquid' url='${img}'></sm-image>
                <div class="loginContainer__loginWrapper">
                    <div class="loginContainer__inputWrapper">
                        <a class="main-access link" href="/main">Ir al juego</a>
                        <sm-input className="input__login" type="text" placeholder='Introduce un usuario'></sm-input>
                        <sm-button text="Entrar al juego" event="sendForm"></sm-button>
                    </div>
                </div>
            </main>
        `;
    }

    createUser(userName) {
        debugger;
        let newUser = new User(userName);
        userStorage.loginUser(newUser);
        newUser.connect();

    }
}

customElements.define('login-view', LoginView)