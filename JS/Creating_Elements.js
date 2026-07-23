const card = document.createElement("div");
card.className = "card";
card.innerHTML = `
    <h3>Judul Kartu</h3>
    <p>Deskripsi kartu dinamis</p>
    <button class="btn">Detail</button>
`;

const container = document.getElementById("container");
if (container) {
    container.appendChild(card);
}

const data = [
    { nama: "Andi" },
    { nama: "Budi" },
    { nama: "Cici" }
];

const fragment = document.createDocumentFragment();
data.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.nama;
    fragment.appendChild(li);
});

const list = document.getElementById("list");
if (list) {
    list.appendChild(fragment);
}

const el = document.getElementById("target");
if (el) {
    el.insertAdjacentHTML("beforeend", "<p>Baru</p>");
}
