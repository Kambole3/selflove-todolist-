import { UpdateType, UserAction } from '../const.js';
import Observable from '../framework/observable.js';
import {tasks} from '../mock/tasks.js';
import generateUniqueIdentifier from '../utils.js';

export default class TasksModel extends Observable{
    #boardtasks=[];
    #tasksApiService=null;

    constructor({tasksApiService}){
        super();
        this.#tasksApiService=tasksApiService;

        this.#tasksApiService.tasks.then((tasks)=>{
            //(tasks);
        })
    }

    async init(){
        try{
            const tasks=await this.#tasksApiService.tasks;
            this.#boardtasks=tasks;
            //(`Observable ${tasks}`);
        }catch(error){
            //(`No error I hope: ${error}`)
            this.#boardtasks=[]
        }
        this._notify(UpdateType.INIT);
    }
    get tasks(){
        return this.#boardtasks;
    }
    getTasksByStatus(status){
        return this.#boardtasks.filter((task)=>{ 
            ////(`status: ${status} tas.id: ${task.id}`)
            return task.status===status});
    }

    set tasks(value){
        this.#boardtasks=value;
    }

    clearTasks(){
        this.#boardtasks=this.#boardtasks.filter(task=>task.status!=='basket');
        this._notifyObservers();
        return this.#boardtasks;
    }

    async addTask(title){
        const newTask={
            title,
            status:'backlog',
           
        };
        try {
            const createdTask=await this.#tasksApiService.addTask(newTask);
            this.#boardtasks.push(createdTask);
            this._notify(UserAction.ADD_TASK,createdTask);
            return createdTask;
        } catch (error) {
            console.error('Ошибка при добавлении задачи на сервер:', err);
            throw error;
        }
        const length=this.#boardtasks.push(newTask);
        //(`Iris: ${length}`)
        this._notifyObservers();
        return newTask;
    }
    async updateTaskStatus(taskId, newStatus){
        const task= this.#boardtasks.find(task => task.id === taskId)
        if (task) {
           // //(`task status: ${task.status} new status ${newStatus}`);
            task.status=newStatus.status_title;
            try {
               const updateTask = await this.#tasksApiService.updateTask(task);
               Object.assign(task,updateTask);
               this._notify(UserAction.UPDATE_TASK, task)
            } catch (error) {
                console.error('Error when updating the status of the task on the server', error)
                
                throw error
            }
            
        }
    }

    deleteTask(taskId){
        this.#boardtasks=this.#boardtasks.filter(task=>task.id!==taskId);
        this._notify(UserAction.DELETE_TASK, {id:taskId});
    }

    async clearBasketTasks(){
        const basketTasks=this.#boardtasks.filter(task=>task.status==='basket');

        try {
            await Promise.all(basketTasks.map(task=>this.#tasksApiService.deleteTask(task.id)));
            this.#boardtasks=this.#boardtasks.filter(task=>task.status!=='basket');
            this._notify(UserAction.DELETE_TASK,{status:'basket'});
        } catch (error) {
           console.error('Error when deleting the tasks from the basket on the server',error);
           throw error;
        }
    }

    hasBasketTasks(){
        return this.#boardtasks.some(task=>task.status==='basket');
    }


  
}