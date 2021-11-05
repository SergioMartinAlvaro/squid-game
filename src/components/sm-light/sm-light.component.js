import { html, LitElement, css, unsafeCSS } from "lit";
import smlightcomponent from "./sm-light.component-styles";
import User from '../../classes/User';
import COMPONENT_MESSAGES from "../../utils/messages/componentMessages";

export class SmLight extends LitElement {


    static get properties() {
        return {
            light: {
                type: Boolean
            },
            message: {
                type: String
            }
        }
    }

    static get styles() {

        return css`${unsafeCSS(smlightcomponent)}`;
    }

    constructor() {
        super();
        this.turnOn = false;
        this.timeToChangeInMs = 10000;
        this.message = COMPONENT_MESSAGES.light.notok;

        // Este evento cambia la luz del semaforo cuando es llamado
        window.EE.on('changeLight', () => {
            this.changeLight();
            this.changeMessage();
        })

        window.EE.on('handleMovement', () => {
            if (this.light) {
                window.EE.emit('sumStep');
            } else {
                window.EE.emit('restartCount');
            }
        })

        this.startLight();
    }

    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
        this.requestRender();
    }

    render() {
        return html`
            <div class="container">
                <div class="eyeContainer">
                    <div class="eye ${this.light ? 'eyeOpen ': 'eyeClosed'}"></div>
                    <div class="eye ${this.light ? 'eyeOpen ': 'eyeClosed'}"></div>
                </div>
                <figure class="container__imageWrapper">
                    <img class="container__image" alt="nina-calamar" src="../../assets/ninia.svg" />
                </figure>
                <div class="container__messageWrapper">
                    <p class="container__message">${this.message}</p>
                </div>
            </div>
        `;
    }

    changeMessage() {
        if(this.light) {
            this.message = COMPONENT_MESSAGES.light.ok;
        } else {
            this.message = COMPONENT_MESSAGES.light.notok;
        }
    }

    changeLight() {
        this.light = !this.light;
    }

    startLight() {
        this.loadUserData();
        setInterval(() => {
            window.EE.emit('changeLight');
        }, this.timeToChangeInMs);
    }

    loadUserData() {
        let user = new User('paco');
        user = new User('sergio');
        user.connect();
    }
}

customElements.define('sm-light', SmLight);