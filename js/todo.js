const toDoForm = document.getElementById('todo-form')
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.getElementById('todo-list')

const toDos = []

const TODOS_KEY = 'todos'

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteTodo(event) {
  const li = event.target.parentElement
  li.remove()
}
function paintToDo(newTodo) {
  const li = document.createElement('li')
  const span = document.createElement('span')
  span.innerText = newTodo
  const btn = document.createElement('button')
  btn.innerText = 'X'
  btn.addEventListener('click', deleteTodo)
  li.appendChild(span)
  li.appendChild(btn)
  toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
  event.preventDefault()
  const newTodo = toDoInput.value
  toDoInput.value = ''
  toDos.push(newTodo)
  paintToDo(newTodo)
  saveToDos()
}

toDoForm.addEventListener('submit', handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos)
  parsedToDos.array.forEach
}
