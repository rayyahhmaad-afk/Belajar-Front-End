for (let i = 0; i < 5; i++) {
    console.log(i);
}

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

const buah = ["Apel", "Mangga", "Jeruk"];
for (const item of buah) {
    console.log(item);
}

const user = { nama: "Andi", umur: 25 };
for (const key in user) {
    console.log(key + ": " + user[key]);
}

for (let j = 0; j < 10; j++) {
    if (j === 3) continue;
    if (j === 7) break;
    console.log(j);
}
