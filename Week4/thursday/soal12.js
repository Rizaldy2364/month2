// Soal 12 — Sistem Premium

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

async function aksesPremium() {
    try {
        const user = await ambilPengguna(2);
        if (user.premium) {
            console.log("Mengakses fitur premium...");
        } else {
            console.log("Fitur premium tidak tersedia.");
        }
    } catch (error) {
        console.log(error);
    }
}

aksesPremium();

/* hasil:

kalo true:
Mengakses fitur premium...

kalo false:
Fitur premium tidak tersedia.
*/