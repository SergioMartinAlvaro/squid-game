let mainview = `
.todo-view{
  display: block;
  max-width: 800px;
  margin: 0 auto; }
  .todo-view .input-layout {
    width: 100%;
    display: flex; }
  .todo-view .input-layout vaadin-text-field {
    flex: 1;
    margin-right: var(--spacing); }
  .todo-view .todos-list {
    margin-top: var(--spacing); }
  .todo-view .visibility-filters {
    margin-top: calc(4 * var(--spacing)); }

`;
export default mainview;