// Soal 3 — Menggunakan .then() dan .catch()

function ambilMateri (no) {
return new Promise( function (resolve, rejected) {
    setTimeout(() => {
        if ( no > 0) {
            resolve ({ noMateri : no , namaMateri : 'promise'})
        } else {
            rejected ( 'no materi: ' + no + ' tidak valid')
        }
    }, 2000);
})
}

ambilMateri (-1)
  .then(function (hasil) {
    console.log("Berhasil:" + '\nnama materi:', hasil.namaMateri + '\nno materi:',hasil.noMateri);
    // Output: Berhasil: Data berhasil dimuat.
  })
  .catch(function (error) {
    console.log("Gagal:" + '\n' + error);
  })
  .finally(function () {
    console.log("Proses selesai.");
  });

  /* hasil:
Berhasil:
nama materi: promise
no materi: 1
Proses selesai.

Gagal:
no materi: -1 tidak valid
Proses selesai.
*/


