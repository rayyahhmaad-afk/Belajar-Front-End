const buah = ["Apel", "Mangga", "Jeruk"];

console.log(buah[0]);
console.log(buah.length);

buah.push("Pisang");
buah.pop();
buah.unshift("Anggur");
buah.shift();

const angka = [1, 2, 3, 4, 5];

console.log(angka.map(n => n * 2));
console.log(angka.filter(n => n > 3));
console.log(angka.find(n => n > 3));
angka.forEach(n => console.log(n));
console.log(angka.reduce((sum, n) => sum + n, 0));
console.log(angka.includes(3));
console.log(angka.indexOf(3));

const [pertama, kedua] = buah;
console.log(pertama, kedua);

const [...sisanya] = buah.slice(1);
console.log(sisanya);
