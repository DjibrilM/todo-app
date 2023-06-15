import { getItems, setItems } from '../utilities/localStorage';

const TodoElement = (content, isActive, id, completed) => {
  // the following factory function is necessary because of linters
  console.log(completed);
  const printElements = (containerClass, elements) => {
    const container = document.querySelector(`.${containerClass}`);
    container.innerHTML = '';

    if (elements.length > 0) {
      elements.forEach((element) => {
        container.appendChild(
          TodoElement(
            element.content,
            element.isActive,
            element.id, element.completed,
          ),
        );
      });
    }
  };
  const element = document.createElement('li');

  element.id = id;
  if (isActive === true) { element.classList.add('active'); }
  if (completed === true) { element.classList.add('completed'); }

  element.innerHTML = `
                <div class="info">
                    <div class="todo-content">
                        <input ${completed && 'checked'} class="checker" type="checkbox">
                        <p >${content}</p>
                    </div>

                    <div class="more">
                        <i class='bx more-btn bx-dots-vertical-rounded'></i>
                    </div>
                </div>

                <div class="actions">
                    <form action="">
                        <input value="${content}" type="text" name="" class="update-input" id="">
                    </form>

                    <div class="delete-btn">
                        <i class='bx bx-trash'></i>
                    </div>
                </div>
    `;

  const deleteButton = element.querySelector('.bx-trash');
  const moreButton = element.querySelector('.more-btn');
  const updateForm = element.querySelector('form');
  const updateValueInput = element.querySelector('.update-input');
  const checkboxInput = element.querySelector('.checker');

  checkboxInput.addEventListener('click', () => {
    const findeIndex = getItems('todos').findIndex((el) => el.id === id);

    const getElements = getItems('todos');
    getElements[findeIndex].completed = !getElements[findeIndex].completed;
    setItems('todos', getElements);
    printElements('dotos-container', getItems('todos'));
  });

  moreButton.addEventListener('click', () => {
    const index = getItems('todos').findIndex((el) => el.id === id);
    const getList = getItems('todos');
    getList[index].isActive = true;
    printElements('dotos-container', getList);
  });

  updateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const list = getItems('todos');
    const findIndex = list.findIndex((el) => el.id === id);
    console.log(updateValueInput);
    list[findIndex].content = updateValueInput.value;
    console.log(list);
    list[findIndex].active = false;
    setItems('todos', list);
    printElements('dotos-container', getItems('todos'));
  });

  deleteButton.addEventListener('click', () => {
    const getTodos = getItems('todos');
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