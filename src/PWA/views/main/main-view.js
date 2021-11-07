import { html, css, unsafeCSS } from "lit";
import { BaseView } from "../base/base-view";
import mainview from "./main-view-styles";
import { connect } from 'pwa-helpers';
import { store } from "../../../redux/store";


class MainView extends connect(store)(BaseView) {

    static get styles() {
        console.log(mainview);
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
            <style>
                ${unsafeCSS(mainview)}
            </style>
                <sm-header isLogged="login"></sm-header>
            <main class="mainContainer">
                <div class="mainContainer__counterWrapper">
                    <sm-counter></sm-counter>
                </div>
                <div class="mainContainer__light">
                    <sm-light></sm-light>
                </div>
                <div class="mainContainer__buttonWrapper">
                    <sm-button text='Paso Izquierdo' type='secondary' event='stepLeft'></sm-button>
                    <sm-button text='Paso Derecho' type='secondary' event='stepRight'></sm-button>
                </div>
            </main>
        `;
    }
}


customElements.define('main-view', MainView)