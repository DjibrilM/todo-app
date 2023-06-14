import './styles/main.css';
import printElements from './utilities/printTodos.js';

const todosList = [
  {
    content: 'something1',
    id: 1,
    isActive: false,
  },

  {
    content: 'something2',
    id: 2,
    isActive: false,
  },

  {
    content: 'something3',
    id: 3,
    isActive: false,
  },
];

const printLoadedTodos = () => {
  printElements('dotos-container', todosList);
};

window.addEventListener('load', () => printLoadedTodos());