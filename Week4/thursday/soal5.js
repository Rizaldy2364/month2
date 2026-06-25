// Soal 5 — Async/Await

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

async function tampilkanProfilPengguna(id) {
  console.log("Memuat profil pengguna ID:", id);

  try {
    const pengguna = await ambilPengguna(id);

    console.log("---");
    console.log("No id :", pengguna.id);
    console.log("Nama :", pengguna.nama);
    console.log("Status :", pengguna.premium ? "Premium" : "Reguler");
    console.log("---");
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log ('proses selesai.');
  }
}

tampilkanProfilPengguna(2);

/* hasil:
Memuat profil pengguna ID: 2
---
No id : 2
Nama : Ani
Status : Reguler
---
proses selesai.

Memuat profil pengguna ID: 55
Error: pengguna dengan id: 55 tidak ditemukan.
proses selesai.
*/