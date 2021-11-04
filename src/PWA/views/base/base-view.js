import { LitElement } from 'lit';
export class BaseView extends LitElement {
  createRenderRoot() {
    return this;
  }
}