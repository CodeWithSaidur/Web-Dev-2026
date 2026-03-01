const todoInput = document.getElementById('todoInput')
const addBtn = document.getElementById('addBtn')
const todoList = document.getElementById('todoList')

addBtn.addEventListener('click', addTodo)

function addTodo() {
  const text = todoInput.value.trim()

  if (text === '') {
    alert('Enter To Do')
    return
  }

  const li = document.createElement('li')

  li.innerHTML = `
    <div class="todo-left">
      <input type="checkbox" class="check-task">
      <span>${text}</span>
    </div>
    <button class="delete-btn">X</button>
  `

  const checkbox = li.querySelector('.check-task')
  const taskText = li.querySelector('span')
  const deleteBtn = li.querySelector('.delete-btn')

  // Strike-through when checkbox checked
  checkbox.addEventListener('change', () => {
    taskText.classList.toggle('completed', checkbox.checked)
  })

  // Delete task
  deleteBtn.addEventListener('click', () => {
    li.remove()
  })

  todoList.appendChild(li)
  todoInput.value = ''
}
