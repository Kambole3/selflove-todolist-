import HeaderComponent from './views/header-component.js';
import {render, RenderPosition} from './framework/render.js';

import FormAddTaskComponent from './views/form-add-task-component.js';

import TaskListComponent from './views/task-list-component.js';

const formContainer = document.querySelector('.add-task');
const bodyContainer= document.querySelector('.board-app');
const taskListContainer = document.querySelector('.taskboard');

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);


render(new FormAddTaskComponent(), formContainer);

var i=0
while (i<4) {
    render(new TaskListComponent(), taskListContainer,RenderPosition.AFTERBEGIN);
    i+=1;}





