try {
    let hasil = JSON.parse("bukan json");
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Selalu dijalankan");
}

function bagi(a, b) {
    if (b === 0) throw new Error("Tidak bisa bagi dengan 0");
    return a / b;
}

try {
    console.log(bagi(10, 2));
    console.log(bagi(10, 0));
} catch (error) {
    console.error(error.message);
}

const data = [
    { nama: "Andi", umur: 25 },
    { nama: "Budi", umur: 30 }
];

console.table(data);

console.time("proses");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("proses");
