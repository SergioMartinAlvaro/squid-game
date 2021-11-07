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
            },
            lightClass: {
                type: String
            }
        }
    }

    static get styles() {

        return css `${unsafeCSS(smlightcomponent)}`;
    }

    constructor() {
        super();
        this.turnOn = false;
        this.lightClass = 'open';
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
        return html `
            <div class="girlContainer">
                <div class="girlContainer__midRow">
                    <div class="girlContainer__eye--${this.lightClass} circle shadow"></div>
                    <div class="girlContainer__eye--${this.lightClass} circle shadow"></div>
                </div>
                <div class="girlContainer__nose circle shadow"></div>
                <div class="girlContainer__smile circle shadow"></div>
                </div>
            </div>
        `;
    }

    changeMessage() {
        if (this.light) {
            this.lightClass = 'closed';
            this.message = COMPONENT_MESSAGES.light.ok;
        } else {
            this.lightClass = 'open';
            this.message = COMPONENT_MESSAGES.light.notok;
        }
    }

    changeLight() {
        this.light = !this.light;
    }

    startLight() {
        setInterval(() => {
            window.EE.emit('changeLight');
        }, this.timeToChangeInMs);
    }
}

customElements.define('sm-light', SmLight);