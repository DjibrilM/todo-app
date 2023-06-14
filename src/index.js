import './styles/main.css';
import printElements from './utilities/printTodos.js';
import { getItems, getLength, setItems } from './utilities/localStorage';

const form = document.querySelector('.addForm');
const contentInput = document.querySelector('.content');

const printLoadedTodos = () => {
  const loaded = getItems('todos');
  if (loaded) {
    printElements('dotos-container', loaded);
  }
};

const addTodo = (e) => {
  e.preventDefault();
  const newTodo = {
    content: contentInput.value,
    isActive: false,
    isCompleted: false,
    id: getLength('todos') + 1,
  };

  const list = getItems('todos') || [];
  list.unshift(newTodo);
  setItems('todos', list);
  printElements('dotos-container', getItems('todos'));
  contentInput.value = '';
};

window.addEventListener('load', () => printLoadedTodos());
form.addEventListener('submit', addTodo);