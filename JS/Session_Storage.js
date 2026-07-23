// 🕐 SessionStorage, Cookies, URL Parameters, dan Navigation

// 1. SessionStorage (Hanya bertahan selama tab/browser dibuka)
sessionStorage.setItem("token", "abc123_temp_session_token");
sessionStorage.setItem("activeTab", "Dashboard");

const token = sessionStorage.getItem("token");
console.log("Session Token:", token);

// Perbedaan Storage:
// localStorage: Data persisten (tetap ada walau tab/browser ditutup)
// sessionStorage: Data sementara (hilang otomatis saat tab ditutup)


// 2. Cookies
// Menyimpan data kecil yang sering dikirim bersama HTTP request
document.cookie = "username=Andi; max-age=86400; path=/"; // Berlaku 1 hari (86400 detik)
document.cookie = "theme=dark; max-age=3600; path=/";

console.log("Semua Cookies:", document.cookie);


// 3. URL Parameters (URLSearchParams)
// Membaca parameter dari URL (Contoh: index.html?user=Andi&role=admin)
const urlParams = new URLSearchParams(window.location.search);
const userParam = urlParams.get("user") || "Guest";
const roleParam = urlParams.get("role") || "Visitor";

console.log(`URL Param - User: ${userParam}, Role: ${roleParam}`);


// 4. Navigation & History API
function reloadPage() {
    window.location.reload(); // Refresh halaman
}

function goBack() {
    history.back(); // Kembali ke halaman sebelumnya
}

function goForward() {
    history.forward(); // Maju ke halaman berikutnya
}

function navigateTo(url) {
    window.location.href = url; // Redirect ke URL lain
}
