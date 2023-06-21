import { getItems, setItems } from './localStorage';
import printElements from './printTodos';

export const setTodoAsActive = (id) => {
  const index = getItems('todos').findIndex((el) => el.id === id);
  const getList = getItems('todos');
  getList[index].isActive = true;
  printElements('dotos-container', getList);
};

export const removeTodo = (id) => {
  const getTodos = getItems('todos');
  const filtered = getTodos.filter((el) => el.id !== id);

  setItems('todos', filtered);
  printElements('dotos-container', getItems('todos'));
};

export const markAsCompleted = (id) => {
  const findeIndex = getItems('todos').findIndex((el) => el.id === id);

  const getElements = getItems('todos');
  getElements[findeIndex].completed = !getElements[findeIndex].completed;
  setItems('todos', getElements);
  printElements('dotos-container', getItems('todos'));
};

export const todoUpdateValue = (value, id, e) => {
  e.preventDefault();
  const list = getItems('todos');
  const findIndex = list.findIndex((el) => el.id === id);
  list[findIndex].content = value;
  list[findIndex].active = false;
  setItems('todos', list);
  printElements('dotos-container', getItems('todos'));
};

export const leaveTodo = (id) => {
  const index = getItems('todos').findIndex((el) => el.id === id);
  const getList = getItems('todos');
  getList[index].isActive = false;
  printElements('dotos-container', getList);
};