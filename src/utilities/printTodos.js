
import { TodoElement } from '../components/todo.js';

export const printElements = (containerClass, elements) => {
    const container = document.querySelector("." + containerClass)
    container.innerHTML = '';
    elements.forEach(element => {
        container.appendChild(TodoElement(element.content, element.isActive, element.id))
    });
}


