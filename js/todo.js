const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const completeList = document.getElementById("complete-list");
let toDos = [];
let completes = [];

const TODOS_KEY = "todos";
const COMPLETES_KEY = "completes";

function loadToDos(key) {
    const savedToDos = localStorage.getItem(key);
    if (savedToDos !== null) {
        const parsedToDos = JSON.parse(savedToDos);
        if (key === TODOS_KEY) {
            toDos = parsedToDos;
        } else if (key === COMPLETES_KEY) {
            completes = parsedToDos;
        }
        parsedToDos.forEach((item) => paintToDo(item, key));
    }
}

function saveToDos(key, item) {
    const stringifyToDos = JSON.stringify(item);
    localStorage.setItem(key, stringifyToDos);
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    const id = li.id;
    console.log(id);
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(id));
    completes = completes.filter((complete) => complete.id != parseInt(id));
    saveToDos(TODOS_KEY, toDos);
    saveToDos(COMPLETES_KEY, completes);
    li.remove();
}

function moveToDo(event) {
    deleteToDo(event);
    const li = event.target.parentElement;
    li.id = Date.now();
    const span = li.querySelector("span");
    const buttonMove = li.querySelector("button");
    buttonMove.remove();
    completeList.appendChild(li);
    const obj = { id: li.id, text: span.innerText}
    completes.push(obj);
    saveToDos(COMPLETES_KEY, completes);
}

function paintToDo(newToDo, key) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    li.appendChild(span);

    if(key === TODOS_KEY) {
        const buttonMove = document.createElement("button");
        buttonMove.innerText = "👍"
        buttonMove.addEventListener("click", moveToDo);
        li.appendChild(buttonMove);
    }

    const buttonDelete = document.createElement("button");
    buttonDelete.innerText = "🖐"
    buttonDelete.addEventListener("click", deleteToDo);
    li.appendChild(buttonDelete);

    
    if (key === TODOS_KEY) {
        toDoList.appendChild(li);  
    } else if (key === COMPLETES_KEY) {
        completeList.appendChild(li);
    }
}

function handleToDoSubmit(event) {
    event.preventDefault();
    
    const newToDo = toDoInput.value;
    const newToDoObj = {
        id: Date.now(),
        text: newToDo,
    }
    toDoInput.value = "";
    toDos.push(newToDoObj);    
    paintToDo(newToDoObj, TODOS_KEY);
    saveToDos(TODOS_KEY, toDos);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
loadToDos(TODOS_KEY);
loadToDos(COMPLETES_KEY);