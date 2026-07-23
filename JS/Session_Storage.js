sessionStorage.setItem("token", "abc123");
const token = sessionStorage.getItem("token");
console.log(token);

document.cookie = "username=Andi; max-age=86400; path=/";
console.log(document.cookie);

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(id);

function reloadPage() {
    window.location.reload();
}

function goBack() {
    history.back();
}

function goForward() {
    history.forward();
}

function navigateTo(url) {
    window.location.href = url;
}
