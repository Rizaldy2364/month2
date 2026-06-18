// Soal 12 — Kalkulator Umur

function umur () {
    const lahir = new Date ('2006-03-28')
    const sekarang = new Date ( '2026-06-18')
    const selisihMs = sekarang - lahir;
    const selisihHari = Math.floor(selisihMs / (1000 * 60 * 60 * 24));
    const selisihBulan = selisihHari / 30.44;
    const pembulatan = selisihBulan.toFixed()
    const selisihTahun = 2026 - 2006;
    console.log("Selisih:", selisihHari, "hari." + '\n' + 'selisih: ', pembulatan, ' bulan.' + '\n' + 'selisih: ', selisihTahun + ' tahun.');
}

umur ()

/* hasil: 
Selisih: 7387 hari.
selisih:  243  bulan.
selisih:  20 tahun.
*/

