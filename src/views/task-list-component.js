import {createElement} from '../framework/render.js';


function createTaskListComponent() {
    return (
        `<div><ul id="tasklist">
                <div id="list_title">Название блока</div>
                <li>Название первой задачи</li>
                <li>Название первой задачи</li>
                <li>Название первой задачи</li>
          </ul></div>`
      );
}


export default class TaskListComponent {
  getTemplate() {
    return createTaskListComponent();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}