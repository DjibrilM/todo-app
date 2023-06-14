import TodoElement from '../components/todo.js';

const printElements = (containerClass, elements) => {
  const container = document.querySelector(`.${containerClass}`);
  container.innerHTML = '';

  if (elements.length > 0) {
    elements.forEach((element) => {
      container.appendChild(TodoElement(element.content, element.isActive, element.id));
    });
  }
};

export default printElements;
