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
        this.timeGreen = 10000;
        this.timeRed = 3000;
        this.timeToChangeInMs = this.timeRed;
        this.message = COMPONENT_MESSAGES.light.notok;

        // Este evento cambia la luz del semaforo cuando es llamado
        window.EE.on('changeLight', () => {
            this.changeLight();
            this.changeMessage();
            this.changeTiming();
            clearInterval(this.refreshInterval);
            this.startLight();
        })

        window.EE.on('recalculateTime', (isUp) => {
            this.recalculateTime(isUp);
        })

        window.EE.on('handleMovement', () => {
            if (this.light) {
                window.EE.emit('sumStep');
            } else {
                window.EE.emit('restartCount');
            }
        })

        window.EE.on('showFinalMessage', () => {
            this.timeGreen = 10000;
        });



        this.startLight();
    }

    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
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

    recalculateTime(isUp) {
        if (isUp) {
            if (this.timeGreen > 2000) {
                this.timeGreen -= 1000;
            }
        } else {
            if (this.timeGreen < 10000) {
                this.timeGreen += 1000;
            }
        }

    }

    changeTiming() {
        if (this.light) {
            this.timeToChangeInMs = this.timeGreen;
        } else {
            this.timeToChangeInMs = this.timeRed;
        }
    }

    changeLight() {
        this.light = !this.light;
    }

    startLight() {
        this.refreshInterval = setInterval(() => {
            console.log(this.timeToChangeInMs)
            window.EE.emit('changeLight');
        }, this.timeToChangeInMs);
    }
}

customElements.define('sm-light', SmLight);