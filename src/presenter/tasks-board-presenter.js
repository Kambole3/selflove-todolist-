import TasksListComponent from '../views/task-list-component.js';
import TaskComponent from '../views/task-component.js';
import TaskBoardComponent from '../views/task-board-component.js';
import {render,RenderPosition} from '../framework/render.js';
import {Status,StatusLabel} from '../const.js';
import CleanUpButtonComponent from '../views/clean-up-button-component.js';
import EmptyTaskComponent from '../views/empty-task-component.js';
export default class TasksBoardPresenter {
 #tasksBoardComponent = new TaskBoardComponent()

  #boardContainer=null;
  #tasksModel=null;
  #boardTasks=[];

 constructor({boardContainer, tasksModel}) {
   this.#boardContainer = boardContainer;
   this.#tasksModel=tasksModel;
 }


 init() {
    this.#boardTasks=[...this.#tasksModel.tasks];
   render(this.#tasksBoardComponent, this.#boardContainer);
   for (let status in Status) {
          this.status_title=Status[status];
          this.label=StatusLabel[`${this.status_title}`];
          console.log(`${this.status_title} label ${this.label}`);
          const tasksListComponent = new TasksListComponent({task_status:{status_title:this.status_title,label:this.label}});
          console.log(`happier now: ${tasksListComponent.status}`);
          render(tasksListComponent, this.#tasksBoardComponent.element);
          const tasksForStatus=this.#tasksModel.getTasksByStatus(this.status_title);
          console.log(`happier baby: ${tasksForStatus.length} ${status}`);
          if (tasksForStatus.length==0) {
            const emptyTaskComponent=new EmptyTaskComponent();
            render(emptyTaskComponent,tasksListComponent.element);
          }else{
          for (let j = 0; j < tasksForStatus.length; j++) {
             
                this.#renderTask(tasksForStatus[j],tasksListComponent.element);
               
              
          }
         
        }
        if (this.status_title=="basket") {
          console.log("Why not")
          const cleanupComponent= new CleanUpButtonComponent();
          render(cleanupComponent, tasksListComponent.element);
        }
   }
   
 
 }
 #renderTask(task,container){
  const taskComponent=new TaskComponent({task});
  render(taskComponent,container);
 }
}