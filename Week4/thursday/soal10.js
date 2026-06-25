// Soal 10 — Dashboard Siswa

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

async function dashboard() {
    try {
        const [user, kursus, nilai] = await Promise.all([
            ambilPengguna(1),
            ambilKursus(),
            ambilNilaiSiswa(1)
        ]);
        console.log("DASHBOARD:");
        console.log("Nama :", user.nama);
        console.log("Premium :", user.premium);
        console.log("Nilai :", nilai.nilai);
        console.log("Kursus:");

        for (let item of kursus) {
            console.log( item);
        }
    } catch (error) {
        console.log(error);
    }
}

dashboard();

/* hasil:
DASHBOARD:
Nama : Budi
Premium : true
Nilai : 90
Kursus:
JavaScript Dasar
React
Node.js
*/