localStorage.setItem("nama", "Andi");
localStorage.setItem("user", JSON.stringify({ nama: "Andi", umur: 25 }));

const nama = localStorage.getItem("nama");
const user = JSON.parse(localStorage.getItem("user"));

console.log(nama);
console.log(user);

localStorage.removeItem("nama");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(tugas) {
    todos.push(tugas);
    saveTodos();
}

if (todos.length === 0) {
    addTodo("Belajar JavaScript");
    addTodo("Belajar LocalStorage");
}

console.log(JSON.parse(localStorage.getItem("todos")));
