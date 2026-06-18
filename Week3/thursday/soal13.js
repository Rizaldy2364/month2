// Soal 13 — Pengingat Acara

const acara = "Seminar JavaScript";
const tanggalAcara = new Date ("2026-12-01");

function hitungHariMenuju() {
  const sekarang = new Date();
  const target = tanggalAcara;
  const selisihMs = target - sekarang;
  const hari = Math.ceil(selisihMs / (1000 * 60 * 60 * 24));
  const jam= Math.ceil(selisihMs / (1000 * 60 * 60 ));
 
  console.log ( 'nama acara: ', acara + '.' + '\n' + hari + " hari lagi menuju acara." + '\n' + 'selisih jam: ' + jam + '.');
}

hitungHariMenuju()

/* hasil: 
nama acara:  Seminar JavaScript.
166 hari lagi menuju acara.
selisih jam: 3970.
*/