// Soal 9 — Sistem Nilai Siswa

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

async function cekKelulusan(id) {
    try {
        const siswa = await ambilNilaiSiswa(id);
        if (siswa.nilai >= 75) {
            console.log('Id siswa:', siswa.id, "Dinyatakan Lulus");
        } else {
            console.log( 'Id siswa:', siswa.id,"Dinyatakan tidak Lulus");
        }
    } catch (error) {
        console.log(error);
    }
}

cekKelulusan(3);

/* hasil:
Id siswa: 1 dinyatakan Lulus

Id siswa: 3 Dinyatakan tidak Lulus
*/