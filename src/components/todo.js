import {
  setTodoAsActive,
  removeTodo,
  markAsCompleted,
  todoUpdateValue,
  leaveTodo,
} from '../utilities/todo';

const TodoElement = (content, isActive, id, completed) => {
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
  const updateValueInput = element.querySelector('.update-input').value;
  const checkboxInput = element.querySelector('.checker');

  checkboxInput.addEventListener('click', () => markAsCompleted(id));
  moreButton.addEventListener('click', () => setTodoAsActive(id));
  updateForm.addEventListener('submit', (e) => todoUpdateValue(updateValueInput, id, e));
  deleteButton.addEventListener('click', () => removeTodo(id));
  element.addEventListener('mouseleave', () => leaveTodo(id));

  return element;
};

export default TodoElement;