import HeaderComponent from './views/header-component.js';
import {render, RenderPosition} from './framework/render.js';

import FormAddTaskComponent from './views/form-add-task-component.js';

import TaskListComponent from './views/task-list-component.js';

 import TasksBoardPresenter from './presenter/tasks-board-presenter.js';

 import TasksModel from './model/task-model.js';

const formContainer = document.querySelector('.add-task');
const bodyContainer= document.querySelector('.board-app');
const tasksBoardContainer = document.querySelector('.taskboard');
const tasksModel = new TasksModel();
const tasksBoardPresenter = new TasksBoardPresenter({
 boardContainer: tasksBoardContainer,
 tasksModel,
});


render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);


render(new FormAddTaskComponent(), formContainer);
tasksBoardPresenter.init()





