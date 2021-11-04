import { html, LitElement, css, unsafeCSS } from "lit";
import smlightcomponent from "./sm-light.component-styles";
import User from '../../classes/User';

export class SmLight extends LitElement {

    static get styles() {

        return css`${unsafeCSS(smlightcomponent)}`;
    }

    constructor() {
        super();
        this.turnOn = false;
        this.timeToChangeInMs = 10000;

        // Este evento cambia la luz del semaforo cuando es llamado
        window.EE.on('changeLight', () => {
            this.changeLight();
            console.log(this.light);
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

    render() {
        return html`
            <div class="sm__buttonWrapper">
                <button type='button' class='sm__button'>Boton de prueba</button>
            </div>
        `;
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