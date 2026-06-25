// Soal 6 — Error Handling

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

async function tampilkanProfil(id) {
    try {
        const user = await ambilPengguna(id);
        console.log("Nama :", user.nama);
        console.log("Premium :", user.premium);

    } catch (error) {
        console.log("Error :", error);

    } finally {
        console.log("Proses telah selesai");
    }
}

tampilkanProfil(5);

/* hasil:
Nama : Budi
Premium : true
Proses telah selesai

Error : pengguna dengan id: 5 tidak ditemukan.
Proses telah selesai
*/