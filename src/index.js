import './styles/main.css';
import { printElements } from './utilities/printTodos.js';

const todosList = [
    {
        content: "something1",
        id: new Date().toISOString(),
        isActive: false
    },

    {
        content: "something2",
        id: new Date().toISOString(),
        isActive: false
    }
    ,
    {
        content: "something3",
        id: new Date().toISOString(),
        isActive: false
    }
]

const printLoadedTodos = () => {
    printElements("dotos-container", todosList);
}

window.addEventListener("load", () => printLoadedTodos())