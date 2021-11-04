import { html, css, unsafeCSS } from "lit";
import { BaseView } from "../base/base-view";
import mainview from "./main-view-styles";
import { VisibilityFilters, getVisibleTodosSelector } from "../../../redux/reducer";
import { connect } from 'pwa-helpers';
import { store } from "../../../redux/store";

import {
    addTodo,
    updateTodoStatus,
    updateFilter,
    clearCompleted
  } from '../../../redux/actions.js';

class MainView extends connect(store)(BaseView) {

    static get styles() {
        return css`${unsafeCSS(mainview)}`;
    }

    static get properties() {
        return {
            todos: { type: Array },
            filter: { type: String },
            task: { type: String }
        }
    }

    stateChanged(state) {
        this.todos = getVisibleTodosSelector(state);
        this.filter = state.filter;
    }

    render() {
        return html`
            <sm-light></sm-light>
            <sm-counter></sm-counter>
            <sm-button text='Paso Izquierdo' event='handleMovement'></sm-button>
            <sm-button text='Paso Derecho' event='handleMovement'></sm-button>
        `;
    }
  /*  render() {
        return html`
        <sm-light></sm-light>
        <div class="todo-view">
        <div class="input-layout"
        @keyup="${this.shortcutListener}"> 
      
        <vaadin-text-field
          placeholder="Task"
          value="${this.task || ''}" 
          @change="${this.updateTask}"> 
        </vaadin-text-field>
      
        <vaadin-button
          theme="primary"
          @click="${this.addTodo}"> 
            Add Todo
        </vaadin-button>
      </div>
      <div class="todos-list">
  ${this.todos.map(
            todo => html` 
        <div class="todo-item">
          <vaadin-checkbox
            ?checked="${todo.complete}" 
            @change="${e => this.updateTodoStatus(todo, e.target.checked)}"> 
            ${todo.task}
          </vaadin-checkbox>
        </div>
      `
        )
            }
</div>
<vaadin-radio-group
class="visibility-filters"
value="${this.filter}"
@value-changed="${this.filterChanged}"> 

${Object.values(VisibilityFilters).map(
                filter => html`
    <vaadin-radio-button value="${filter}">
      ${filter}
    </vaadin-radio-button>`
            )}
</vaadin-radio-group>
<vaadin-button
@click="${this.clearCompleted}"> 
  Clear completed
</vaadin-button>
</div>`; 
    } */

    updateTodoStatus(updatedTodo, complete) {
        store.dispatch(updateTodoStatus(updatedTodo, complete));
    }

    addTodo() {
        if(this.task) {
            store.dispatch(addTodo(this.task));
            this.task = '';
        }
    }

    shortcutListener(e) {
        if (e.key === 'Enter') {
            this.addTodo();
        }
    }

    updateTask(e) {
        this.task = e.target.value;
    }

    filterChanged(e) {
        store.dispatch(updateFilter(e.detail.value));
    }

    clearCompleted() {
        store.dispatch(clearCompleted());
    }

    applyFilter(todos) {
        switch (this.filter) {
            case VisibilityFilters.SHOW_ACTIVE:
                return todos.filter(todo => !todo.complete);
            case VisibilityFilters.SHOW_COMPLETED:
                return todos.filter(todo => todo.complete);
            default:
                return todos;
        }
    }
}

customElements.define('main-view', MainView)