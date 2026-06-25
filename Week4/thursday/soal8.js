// Soal 8 — Menggabungkan Dua Promise

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

console.time("Total Waktu");

Promise.all([ambilPengguna(5), ambilKursus()])
.then(function ([user, kursus]) {
    console.log(user);
    console.log(kursus);
})
.catch(function (error) {
    console.log(error);
})
.finally(function () {
    console.timeEnd("Total Waktu");
});

/* hasil:

{ id: 1, nama: 'Budi', premium: true }
[ 'JavaScript Dasar', 'React', 'Node.js' ]
Total Waktu: 3.040s

pengguna dengan id: 5 tidak ditemukan.
Total Waktu: 2.030s
*/