window.onload = () => {
  console.log("page loaded")
  const todoForm = document.getElementById("todo-list-app")
  console.log("form encountered", todoForm)
  todoForm.addEventListener("submit", handleNewTaskSubmit)
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