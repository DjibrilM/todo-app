import './styles/main.css';
import printElements from './utilities/printTodos.js';
import { getItems, getLength, setItems } from './utilities/localStorage';

const form = document.querySelector('.addForm');
const contentInput = document.querySelector('.content');
const clearAllButton = document.querySelector('.clear-all');

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
    completed: false,
    id: getLength('todos') + 1,
  };

  const list = getItems('todos') || [];
  list.unshift(newTodo);
  setItems('todos', list);
  printElements('dotos-container', getItems('todos'));
  contentInput.value = '';
};

const clearAll = () => {
  const getAllItems = getItems('todos');
  const filteredItems = getAllItems.filter((el) => el.completed === false);
  setItems('todos', filteredItems);
  printElements('dotos-container', getItems('todos'));
};

window.addEventListener('load', () => printLoadedTodos());
form.addEventListener('submit', addTodo);
clearAllButton.addEventListener('click', clearAll);