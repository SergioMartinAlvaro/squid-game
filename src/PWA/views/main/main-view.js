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
                    <sm-button text='Paso Izquierdo' event='handleMovement'></sm-button>
                    <sm-button text='Paso Derecho' event='handleMovement'></sm-button>
                </div>
            </main>
        `;
    }
}

customElements.define('main-view', MainView)