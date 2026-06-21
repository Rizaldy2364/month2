// Soal 2 — Mesin Analisis Teks

function analisisDokumen(teks) {
    let jumlahH = teks.length;
    let jumlahK = teks.split(' ').length;
    let kataTerpanjang = "";
    // cari kata terpanjang
    for (let kata of teks.split(' ')) {
    if (kata.length > kataTerpanjang.length) {
        kataTerpanjang = kata;
       }
    }
    // cari kata jumlah angka
    let jumlahAngka = 0;
    for (let huruf of teks) {
    if (huruf >= '0' && huruf <= '9') {
        jumlahAngka++;
    } 
}
console.log('jumlah teks:', jumlahH + '.' + '\n' + 'jumlah kata:', jumlahK + '.' + '\n' + "jumlah angka:", jumlahAngka + '.' + '\n' + 'kata terpanjang:', kataTerpanjang + ".");
}


analisisDokumen("JavaScript 2026 sangat populer. Pada tahun 2025 pengguna meningkat 35%.");

/* hasil:
jumlah teks: 71.
jumlah kata: 10.
jumlah angka: 10.
kata terpanjang: JavaScript.
*/

