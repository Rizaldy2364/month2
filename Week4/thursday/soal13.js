// Soal 13 — Memuat Data Bertahap

function login(username, password) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const database = [{username: "budi", password: "123", nama: "Budi"}];
            const user = database.find(function (item) {
                return item.username === username &&
                       item.password === password;
            });
            if (user) {
                resolve(user);
            } else {
                reject("Username atau password salah");
            }
        }, 2000);
    });
}

function ambilPengguna(id) {
    return new Promise  (function (resolve,reject) {
        setTimeout(() => {
            const dataBase = {
                1: { id: 1, nama: "Budi", premium: true },
                2: { id: 2, nama: "Ani", premium: false },
                3: { id: 3, nama: "Dodi", premium: true }
            }
            const pengguna = dataBase[id];
            if ( pengguna) {
                resolve (pengguna);
            } else {
                reject ( 'pengguna dengan id: ' + id + ' tidak ditemukan.')
            }
        }, 2000);
    });
}

function ambilKursus() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(["JavaScript Dasar", "React", "Node.js"]);
        }, 3000);
    });
}

function ambilNilaiSiswa(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const database = [
                { id: 1, nilai: 90 },
                { id: 2, nilai: 75 },
                { id: 3, nilai: 60 }
            ];
            const siswa = database.find(function (item) {
                return item.id === id;
            });
            if (siswa) {
                resolve(siswa);
            } else {
                reject("Data tidak ditemukan");
            }
        }, 2000);
    });
}

async function prosesBelajar() {

    try {

        const user = await login("budi", "1234");
        console.log("Login berhasil");

        const profil = await ambilPengguna(1);
        console.log("Profil dimuat");

        const kursus = await ambilKursus();
        console.log("Kursus dimuat");

        const nilai = await ambilNilaiSiswa(1);
        console.log("Nilai dimuat");

        console.log(user);
        console.log(profil);
        console.log(kursus);
        console.log(nilai);

    } catch (error) {

        console.log("Error:", error);

    }
}

prosesBelajar();

/* hasil:

Login berhasil
Profil dimuat
Kursus dimuat
Nilai dimuat
{ username: 'budi', password: '123', nama: 'Budi' }
{ id: 1, nama: 'Budi', premium: true }
[ 'JavaScript Dasar', 'React', 'Node.js' ]
{ id: 1, nilai: 90 }
*/