import {createElement} from '../framework/render.js';
import { AbstractComponent } from '../framework/view/abstract-component.js';


function createFormAddTaskComponentTemplate() {
    return (
        `<form class="new_exercise" aria-label="Форма добавления задачи">
        <label for="add-task">Новая задача</label><br>
        <input id="task_name" name="taskName" type="text" placeholder="Название задачи">
                <button id="add_button" type="submit"> + Добавить</button>
      </form>`
      );
}


export default class FormAddTaskComponent  extends AbstractComponent{
  get template() {
    return createFormAddTaskComponentTemplate();
  }

  removeElement() {
    this.element = null;
  }
}