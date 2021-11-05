import { html, LitElement, css, unsafeCSS } from "lit";
import smcountercomponent from "./sm-counter.component-styles.js";
import userStorage from '../../classes/UserStorage';

export class SmCounter extends LitElement {

    static get properties() {
        return {
            count: {
                type: String
            },
            maxCount: {
                type: String
            },
            message: {
                type: String
            }
        }
    }

    static get styles() {
        return css `${unsafeCSS(smcountercomponent)}`;
    }

    constructor() {
        super();
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.count = 0;
        this.maxCount = 0;
        this.message = '';

        window.EE.on('sumStep', () => {
            this.count++;
        });

        window.EE.on('decreaseCount', () => {
            if (this.count > 0) {
                this.count--;
            }
        })

        window.EE.on('showFinalMessage', () => {
            this.count = 0;
            this.user = JSON.parse(localStorage.getItem('currentUser'));
            console.log(this.user);
            this.maxCount = this.user.maxPoints;
            console.log(`Has perdido, tu maxima puntuacion es: ${this.maxCount} puntos`);
        });
    }

    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
    }

    render() {
            return html `
            <h1>La puntuación actual es: ${this.count}</h1>
            ${this.maxCount > 0 ? html`
                <h3>La puntación máxima es ${this.maxCount}</h3>
            `: html``}
        `;
    }
}

customElements.define('sm-counter', SmCounter);