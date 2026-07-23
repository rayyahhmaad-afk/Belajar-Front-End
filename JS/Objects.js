const user = {
    nama: "Andi",
    umur: 25,
    email: "andi@email.com",
    alamat: {
        kota: "Jakarta",
        kodePos: "12345"
    },
    hobby: ["Coding", "Gaming"],
    sapa() {
        return `Halo, saya ${this.nama}`;
    }
};

console.log(user.nama);
console.log(user["email"]);
console.log(user.alamat.kota);
console.log(user.sapa());

const { nama, umur, email } = user;
console.log(nama, umur, email);

const keys = Object.keys(user);
console.log(keys);

const values = Object.values(user);
console.log(values);

const entries = Object.entries(user);
console.log(entries);

const newUser = { ...user, role: "developer" };
console.log(newUser);
