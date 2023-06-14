import TodoElement from '../components/todo.js';

const printElements = (containerClass, elements) => {
  const container = document.querySelector(`.${containerClass}`);
  container.innerHTML = '';
  elements.forEach((element) => {
    container.appendChild(TodoElement(element.content, element.isActive, element.id));
  });
};

export default printElements;
