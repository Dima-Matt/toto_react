const taskList = document.querySelector(".todo-list");
const btnAdd = document.querySelector(".todo-add-btn");
const inputText = document.querySelector(".todo-text");
let idCount = 0;

btnAdd.addEventListener("click", function () {
  if (inputText.value === "") {
    return;
  }
  let result = addNewTask(inputText.value);
  taskList.appendChild(result);
  taskList.className = 'list-style';
  inputText.value = "";
  
function deleter(id) {   
   return function () {
        let taskListItem = document.getElementById(`todo-${id}`);
        taskListItem.remove();                
      }
}

  const btnDel = result.querySelector(".todo-del-btn");
  btnDel.addEventListener("click", deleter(idCount));
  idCount++;

});

function addNewTask(text) {
    let task = document.createElement('li');
    task.className = 'todo-list-item';
    task.id = `todo-${idCount}`;
    task.innerHTML = `${text}<button class="todo-del-btn btn">Del</button>`;
    return task;
  
}
