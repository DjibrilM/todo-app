import printElements from '../utilities/printTodos'; // eslint-disable-line

import { getItems, setItems } from '../utilities/localStorage';

const TodoElement = (content, isActive, id) => {
  const element = document.createElement('li');

  element.id = id;
  if (isActive === true) { element.classList.add('active'); }

  element.innerHTML = `
                <div class="info">
                    <div class="todo-content">
                        <input type="checkbox">
                        <p>${content}</p>
                    </div>

                    <div class="more">
                        <i class='bx more-btn bx-dots-vertical-rounded'></i>
                    </div>
                </div>

                <div class="actions">
                    <form action="">
                        <input value="${content}" type="text" name="" id="">
                    </form>

                    <div class="delete-btn">
                        <i class='bx bx-trash'></i>
                    </div>
                </div>
    `;

  const deleteButton = element.querySelector('.bx-trash');
  const moreButton = element.querySelector('.more-btn');

  moreButton.addEventListener('click', () => {
    const index = getItems('todos').findIndex((el) => el.id === id);
    const getList = getItems('todos');
    getList[index].isActive = true;
    printElements('dotos-container', getList);
  });

  deleteButton.addEventListener('click', () => {
    const getTodos = JSON.parse(localStorage.getItem('todos'));
    const filtered = getTodos.filter((el) => el.id !== id);

    setItems('todos', filtered);
    printElements('dotos-container', getItems('todos'));
  });

  element.addEventListener('mouseleave', () => {
    const index = getItems('todos').findIndex((el) => el.id === id);
    const getList = getItems('todos');
    getList[index].isActive = false;
    printElements('dotos-container', getList);
  });

  return element;
};

export default TodoElement;