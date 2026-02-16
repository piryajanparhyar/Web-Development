
var input = document.getElementById("input");
var message = document.getElementById("message");
var todosCounter = document.getElementById('todos-counter');
var buttons = document.getElementById("buttons");
var showList = document.getElementById("show-list");
var histroyDiv = document.getElementById("histroy-div");
var histroyCounter = document.getElementById("histroy-counter");
var histroyUl = document.getElementById('histroy-ul')
var todos = []
var deleteTodosList = []
function addHandler() {
    message.style.display = "block"
    todosCounter.style.display = "block"
    buttons.style.display = "block"
    todos.push(input.value);
    showHandler();
    todosCounter.innerHTML = `All Todos (<b>${todos.length}</b>)`;
    input.value = "";
    setTimeout(function () {
        message.style.display = "none"
    }, 2000);
}
// show 
function showHandler() {
    showList.style.display = "block";
    showList.innerHTML = ""
    for (var i = 0; i < todos.length; i++) {
        var list = document.createElement("li");
        list.innerHTML = todos[i];
        showList.appendChild(list);
        var editButton = document.createElement("button");
        list.appendChild(editButton);
        editButton.innerHTML = "Edit";
        editButton.setAttribute("onClick", `editHandler(${i})`)
        var deleteButton = document.createElement("button");
        list.appendChild(deleteButton);
        deleteButton.innerHTML = "Delete";
        deleteButton.setAttribute("onClick", `deleteHandler(${i})`)
    }
}
// delete all
function deleteAllHandler() {
    deleteTodosList = todos;
    todos = [];
    todosCounter.innerHTML = `All Todos (<b>${todos.length}</b>)`;
    showHandler();
    showHistoryHandler();
        buttons.style.display = "none";
        todosCounter.style.display = "none"
}
// delete
function deleteHandler(index) {
    deleteTodosList.push(todos[index])
    todos.splice(index, 1);
    showHandler();
    todosCounter.innerHTML = `All Todos (<b>${todos.length}</b>)`;
    showHistoryHandler();
        if (todos.length <= 0) {
        buttons.style.display = "none";
        todosCounter.style.display = "none"
    }
}
// edit function
function editHandler(index) {
    var editTodo = prompt("Edit todo", todos[index]);
    todos[index] = editTodo
    showHandler()
}
// show history
function showHistoryHandler() {
    histroyDiv.style.display = "block";
    histroyUl.innerHTML = "";
    histroyCounter.innerHTML = `Histroy (<b>${deleteTodosList.length}</b>)`;
    for (var i = 0; i < deleteTodosList.length; i++) {
        var list = document.createElement("li");
        histroyUl.appendChild(list);
        list.innerHTML = deleteTodosList[i]
    }
}

