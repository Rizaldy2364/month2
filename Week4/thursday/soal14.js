// Soal 14 — Analisis Performa

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

// Versi A: code berjalan lebih lambat karna diproses secara berurutan, dan baris code lebih panjang.

async function versiA() {
    console.time("Versi A");

    const profil = await ambilPengguna(1);
    const kursus = await ambilKursus();
    const nilai = await ambilNilaiSiswa(1);

    console.log(profil);
    console.log(kursus);
    console.log(nilai);
    console.timeEnd("Versi A");
}

versiA();

/* hasil:
{ id: 1, nama: 'Budi', premium: true }
[ 'JavaScript Dasar', 'React', 'Node.js' ]
{ id: 1, nilai: 90 }
Versi A: 7.050s
*/

//  Versi B: menggunakan promise all menjadikan code  diproses lebih cepat, dan baris code lebih ringkas. 

async function versiB() {
    console.time("Versi B");

    const [profil, kursus, nilai] = await Promise.all([ ambilPengguna(1), ambilKursus(), ambilNilaiSiswa(1)]);
    
    console.log(profil);
    console.log(kursus);
    console.log(nilai);
    console.timeEnd("Versi B");
}

versiB();

/* hasil:
{ id: 1, nama: 'Budi', premium: true }
[ 'JavaScript Dasar', 'React', 'Node.js' ]
{ id: 1, nilai: 90 }
Versi B: 3.049s
*/