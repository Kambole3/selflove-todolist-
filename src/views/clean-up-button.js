import {createElement} from '../framework/render.js';

function createCleanUpButton(){
    return (`
        <button id="clear_button" type="submit">X Очистить</button>
        `);
}

export default class CleanUpButtonComponent{
    getTemplate(){
        return createCleanUpButton();
    }
    getElement(){
        if(!this.element){
            this.element=createElement(this.getTemplate());
        }
        return this.element;
    }
    removeElement(){
        this.element=null;
    }
}