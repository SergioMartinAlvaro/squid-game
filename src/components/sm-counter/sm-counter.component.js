import { html, LitElement, css, unsafeCSS } from "lit";
import smcountercomponent from "./sm-counter.component-styles.js";

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
        if (this.user) {
            this.count = this.user.currentPoints;
            this.maxCount = this.user.maxPoints;
        } else {
            this.count = 0;
            this.maxCount = 0;
        }
        this.message = '';

        window.EE.on('sumStep', () => {
            this.count++;
            window.EE.emit('recalculateTime', true)
        });

        window.EE.on('decreaseCount', () => {
            if (this.count > 0) {
                this.count--;
                window.EE.emit('recalculateTime', false)
            }
        })

        window.EE.on('showFinalMessage', () => {
            this.count = 0;
            this.user = JSON.parse(localStorage.getItem('currentUser'));
            this.maxCount = this.user.maxPoints;
        });
    }

    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
    }

    render() {
        return html `
            <div class="counterContainer">
                <h1 class="counterContainer__points">La puntuación actual es: ${this.count}</h1>
                <h3 class="counterContainer__maxPoints">La puntación máxima es ${this.maxCount}</h3>
            </div>

    `;
    }
}

customElements.define('sm-counter', SmCounter);