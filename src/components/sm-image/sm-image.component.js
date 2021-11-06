import { html, LitElement, css, unsafeCSS } from "lit";
import smimagecomponent from "./sm-image.component-styles.js";

export class SmImage extends LitElement {

    static get properties() {
        return {
            url: {
                type: String
            },
            className: {
                type: String
            }
        }
    }

    static get styles() {
        return css `${unsafeCSS(smimagecomponent)}`;
    }

    constructor() {
        super();
    }

    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
    }

    render() {
        return html `
            <div class="imageWrapper shadow">
                <div class="circle shadow-2">
                    <div class="small-circle shadow-2-inset">
                        <img src="${this.url}" alt='photo' class='image ${this.className}' />
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('sm-image', SmImage);