const timerId = setTimeout(() => {
    console.log("Dijalankan setelah 3 detik");
}, 3000);

clearTimeout(timerId);

const intervalId = setInterval(() => {
    console.log("Dijalankan setiap 1 detik");
}, 1000);

clearInterval(intervalId);

let count = 10;
const countdown = setInterval(() => {
    if (count <= 0) {
        clearInterval(countdown);
        console.log("Waktu habis!");
        return;
    }
    console.log(count--);
}, 1000);
