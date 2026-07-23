let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
    const list = document.getElementById("todoList");
    if (!list) return;
    list.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span style="text-decoration: ${todo.done ? 'line-through' : 'none'}">${todo.text}</span>
            <button onclick="toggleTodo(${index})">✓</button>
            <button onclick="deleteTodo(${index})">✕</button>
        `;
        list.appendChild(li);
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(text) {
    if (!text.trim()) return;
    todos.push({ text, done: false });
    renderTodos();
}

function toggleTodo(index) {
    todos[index].done = !todos[index].done;
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

document.addEventListener("DOMContentLoaded", renderTodos);
