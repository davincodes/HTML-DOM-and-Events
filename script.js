const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", function () {
  const todoInput = document.getElementById("todoInput").value;
  if(todoInput == ""){
    alert("Please Input a Task")
  }
  
  const newTask = document.createElement("li")
  taskList.appendChild(newTask)
  newTask.textContent = todoInput;
  
  document.getElementById("todoInput").value = "";
  
  const button = document.createElement("button");
  button.innerHTML = "X";

  button.addEventListener("click", function(){
    newTask.remove();
  })
  newTask.appendChild(button);

})
