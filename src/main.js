import HeaderComponent from './views/header-component.js';
import {render, RenderPosition} from './framework/render.js';

import FormAddTaskComponent from './views/form-add-task-component.js';

const bodyContainer= document.querySelector('.board-app');

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
const formContainer = document.querySelector('.add-task');

render(new FormAddTaskComponent(), formContainer);

