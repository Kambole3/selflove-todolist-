import {createElement} from '../framework/render.js';


function createTaskListComponent(status) {
  const {status_title, label}=status;
    return (
        `<article>
        <h3>${label}</h3>
        <div id="tasklist_${status_title}"></div>
        </article>`
      );
}


export default class TaskListComponent {
  
  constructor({task_status}){
    this.status=task_status;
  }
  getTemplate() {
    //console.log(`heat waves: ${this.status.status_title}`);
    return createTaskListComponent(this.status);
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