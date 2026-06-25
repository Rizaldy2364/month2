// Soal 4 — Data Pengguna

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

ambilPengguna(11)
.then(function (hasil) {
    console.log ('id no:', hasil.id , 'berhasil ditemukan:')
    console.log(hasil);
})
.catch(function (error) {
    console.log("Gagal:\n" + error);
})
.finally(function () {
    console.log("Proses selesai.");
});

/* hasil:

id no: 3 berhasil ditemukan:
{ id: 3, nama: 'Dodi', premium: true }
Proses selesai.

Gagal:
pengguna dengan id: 11 tidak ditemukan.
Proses selesai.
*/