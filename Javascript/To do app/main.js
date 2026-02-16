var app = document.getElementById("app");

var container = document.createElement("div");
container.className = "container";

var heading = document.createElement("h2");
heading.innerText = "TO DO List";
container.appendChild(heading);

var input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter a task";
container.appendChild(input);

var message = document.createElement("p");
container.appendChild(message);

var addBtn = document.createElement("button");
addBtn.innerText = "Add Task";
container.appendChild(addBtn);


var deleteAllBtn = document.createElement("button");
deleteAllBtn.innerText = "Delete All";
container.appendChild(deleteAllBtn);

var ul = document.createElement("ul");
container.appendChild(ul);

// For history
var historyHeading = document.createElement("h3");
historyHeading.innerText = "Deleted Tasks (History)";
container.appendChild(historyHeading);

var historyList = document.createElement("ul");
historyList.id = "history";
container.appendChild(historyList);
function addToHistory(taskText) {
  var li = document.createElement("li");
  li.innerText = taskText;
  historyList.appendChild(li);
}
app.appendChild(container);

function addTask(taskText) {
  if (taskText === "") {
    message.innerText = "Please enter a task first!";
    return;
  }
  message.innerText = "";
  var li = document.createElement("li");

  var span = document.createElement("span");
  span.innerText = taskText;

  var editBtn = document.createElement("button");
  editBtn.className = "btn-edit";
  editBtn.innerText = "Edit";

  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn-delete";
  deleteBtn.innerText = "Delete";


  deleteBtn.onclick = function () {
    addToHistory(span.innerText); 
    ul.removeChild(li);
  };

  editBtn.onclick = function () {
    var newTask = prompt("Edit your task:", span.innerText);
    if (newTask !== null && newTask.trim() !== "") {
      span.innerText = newTask;
    }
  };
  
  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  ul.appendChild(li); 
}

// Add Task button
addBtn.onclick = function () {
  addTask(input.value);
  input.value = "";
};
// Delete All button
deleteAllBtn.onclick = function () {
  var allTasks = ul.getElementsByTagName("span"); // <-- yeh use karo
  for (var i = 0; i < allTasks.length; i++) {
    addToHistory(allTasks[i].innerText);
  }
  ul.innerHTML = ""; // list clear
};
