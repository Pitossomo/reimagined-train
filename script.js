window.onload = () => {
  console.log("page loaded")

  const addButton = document.getElementById("add")
  const minusButton = document.getElementById("subtract")
  const todoForm = document.getElementById("todo-list-app")

  console.log("add button encountered", addButton)
  console.log("minus button encountered", minusButton) 
  console.log("form encountered", todoForm)

  todoForm.addEventListener("submit", handleNewTaskSubmit)
  addButton.addEventListener("click", handleAddClick)
  minusButton.addEventListener("click", handleMinusClick)
}

function newTodoItem (task) {
  const newItem = document.createElement("li");
  var checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  console.log("checkbox created", checkbox)
  
  const label = document.createElement("label")
  const textNode = document.createTextNode(task)
  label.appendChild(textNode)
  console.log("label updated", label)  

  newItem.appendChild(checkbox)
  newItem.appendChild(label)
  return newItem
}

function handleNewTaskSubmit(event) {
  event.preventDefault();
  console.log("submit event working fine")

  const todoList = document.getElementById("todo-list")
  console.log("todo list encountered", todoList)
  let newTaskInput = document.getElementById("newTask")
  const submittedTask = newTaskInput.value
  console.log("new task submitted", submittedTask);
  todoList.appendChild(newTodoItem(submittedTask))

  newTaskInput.value = ''
  console.log("new task field reseted", newTaskInput.value);
}

function handleAddClick() {
  console.log("add event working fine"); 
  let counter = document.getElementById("counter")
  console.log("counter found", counter);
  counter.innerHTML = Number(counter.innerHTML) + 1
}

function handleMinusClick() {
  console.log("minus event working fine");
  let counter = document.getElementById("counter")
  console.log("counter found", counter);
  counter.innerHTML = Number(counter.innerHTML) - 1
}