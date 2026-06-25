// Soal 2 — Promise Pertama
function ambilMateri (no) {
return new Promise( function (resolve, rejected) {
    setTimeout(() => {
        if ( no > 0) {
            resolve ({ noMateri : no , namaMateri : 'promise'})
        } else {
            rejected ( 'no materi tidak valid')
        }
    }, 2000);
})
}

async function muatmateri(no) {
  try {
    const materi = await ambilMateri(no);
    console.log ( 'no materi:', materi.noMateri, 'berhasil dimuat' )
    console.log("nama materi:", materi.namaMateri);
    return materi;
  } catch (error) {
    console.log("Gagal mencari materi no :", no + '.', error);
    return null;
  } finally {
    console.log("Proses selesai.");
  }
}

muatmateri(20)

/* hasil:
kalo berhasil:

no materi: 20 berhasil dimuat
nama materi: promise
Proses selesai.

kalo gagal:
Gagal mencari materi no : -6.  no materi tidak valid
Proses selesai.
*/