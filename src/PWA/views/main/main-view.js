import { html, css, unsafeCSS } from "lit";
import { BaseView } from "../base/base-view";
import mainview from "./main-view-styles";
import { connect } from 'pwa-helpers';
import { store } from "../../../redux/store";


class MainView extends connect(store)(BaseView) {

    static get styles() {
        return css `${unsafeCSS(mainview)}`;
    }

    static get properties() {
        return {
            todos: { type: Array },
            filter: { type: String },
            task: { type: String }
        }
    }

    constructor() {
        super();
        this.stepRight = false;
        this.stepLeft = false;

        window.EE.on('changeLight', () => {
            this.stepRight = false;
            this.stepLeft = false;
        })

        window.EE.on('stepLeft', () => {
            if (!this.stepLeft) {
                window.EE.emit('handleMovement');
                this.stepLeft = true;
                this.stepLeft = this.resetSteps(this.stepLeft);
            } else {
                window.EE.emit('decreaseCount');
            }
        });

        window.EE.on('stepRight', () => {
            if (!this.stepRight) {
                window.EE.emit('handleMovement');
                this.stepRight = true;
                this.stepRight = this.resetSteps(this.stepRight);
            } else {
                window.EE.emit('decreaseCount');
            }
        });
    }

    resetSteps(lastStep) {
        if (this.stepLeft && this.stepRight) {
            this.stepRight = !this.stepRight;
            this.stepLeft = !this.stepLeft;
            return true;
        }
        return lastStep;
    }


    render() {
        return html `
            <main class="container">
                <div class="container__counterWrapper">
                    <sm-counter></sm-counter>
                </div>
                <div class="container__light">
                    <sm-light></sm-light>
                </div>
                <div class="container__buttonWrapper">
                    <sm-button text='Paso Izquierdo' event='stepLeft'></sm-button>
                    <sm-button text='Paso Derecho' event='stepRight'></sm-button>
                </div>
            </main>
        `;
    }
}


customElements.define('main-view', MainView)