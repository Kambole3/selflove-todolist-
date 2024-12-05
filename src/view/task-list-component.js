import {createElement} from '../framework/render.js';
import { AbstractComponent } from '../framework/view/abstract-component.js';

function createTaskListComponent(status) {
  const {status_title, label}=status;
    return (
        `<article>
        <h3>${label}</h3>
        <div id="tasklist_${status_title}"></div>
        </article>`
      );
}


export default class TaskListComponent extends AbstractComponent{
  
  constructor({task_status, label, onTaskDrop}){
    super();
    this.status=task_status;
    this.label=label;
    this.#setDropHandler(onTaskDrop);
  }

  get template() {

    return createTaskListComponent(this.status);
  }

  #setDropHandler(onTaskDrop){
    const container=this.element;
    container.addEventListener('dragover',(event)=>{
      event.preventDefault();
    })
    container.addEventListener('drop',(event)=>{
      event.preventDefault();
      const taskId=event.dataTransfer.getData('text/plain');
      onTaskDrop(taskId, this.status)
    })
  }
  removeElement() {
    this.element = null;
  }
}