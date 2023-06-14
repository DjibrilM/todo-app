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
                        <i class='bx bx-dots-vertical-rounded'></i>
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

  return element;
};

export default TodoElement;