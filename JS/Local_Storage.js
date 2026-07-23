// 💾 LocalStorage - Menyimpan data di browser (persisten meskipun tab/browser ditutup)

// 1. Simpan Data (Set Item)
// Catatan: LocalStorage hanya menyimpang string. 
// Untuk simpan objek/array, gunakan JSON.stringify()
localStorage.setItem("nama", "Andi");
localStorage.setItem("user", JSON.stringify({ nama: "Andi", umur: 25 }));

// 2. Baca Data (Get Item)
// Gunakan JSON.parse() untuk mengembalikan string JSON ke objek/array asal
const nama = localStorage.getItem("nama");
const user = JSON.parse(localStorage.getItem("user"));

console.log("Nama:", nama);
console.log("User Object:", user);

// 3. Hapus Data (Remove Item & Clear)
localStorage.removeItem("nama"); // Menghapus item tertentu
// localStorage.clear(); // Menghapus semua item di LocalStorage

// 4. Contoh Aplikasi Nyata: Todo App / Persistence
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function addTodo(tugas) {
    todos.push(tugas);
    saveTodos();
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Tambah contoh todo jika masih kosong
if (todos.length === 0) {
    addTodo("Belajar JavaScript");
    addTodo("Belajar LocalStorage");
}

console.log("Daftar Todos:", JSON.parse(localStorage.getItem("todos")));
