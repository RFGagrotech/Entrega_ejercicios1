let form = document.getElementById("taskForm");
let text = document.getElementById("taskInput");
let list = document.getElementById("taskList");
let clearCompletedBtn = document.getElementById("clearCompleted");

let STORAGE_KEY = "task_v1";

//helpers-localstorage
function loadTasks() {
    let raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
}

function saveTask(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Estado
let tasks = loadTasks();

//UI
function renderTasks() {
    list.innerHTML = "";

    tasks.forEach(task => {
        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        let span = document.createElement("span"); 
        span.textContent = task.text; 

        //Marcar como completa/ no completa
        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
            saveTasks(tasks); 
            // Opcional: estilo visual 
            span.style.textDecoration = task.completed ? "line-through" : "none";
        });
        // stilo inicial
        span.style.textDecoration = task.completed ? "line-through" : "none";

        li.appendChild(checkbox);
        li.appendChild(span);
        list.appendChild(li);
    });
}

//Añadir tarea
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let text = input.value.trim();

    //Validación: no permitir vacío
    if (text === "") return;

    let newTask = {
        id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
        text,
        completed: false
    };

    tasks.push(newTask);
    saveTasks(tasks);
    renderTasks();

    input.value = "";
    input.focus();
});

//Limpiar completadas
clearCompletedBtn.addEventListener("click", () => {
    tasks = tasks.filter(task => !task.completed);
    saveTasks(tasks);
    renderTasks();
});

//Pintar al cargar
renderTasks();