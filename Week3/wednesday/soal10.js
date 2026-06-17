// Soal 10 – Tantangan Logika

function analisisTeks (teks) {
    const panjang = teks.length;
    const arry = teks.split(' ');
    const kata = arry.length;
    const vokal = teks.split('').filter(huruf => 'aiueoAIUEO'.includes(huruf)).length;
    const consonan = teks.split('').filter(huruf =>'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'.includes(huruf)).length;
    const nomor = teks .split('').filter(angka => '0123456789'.includes(angka)).length;
    const lambang = teks.split('').some(lambang => '!@#$%^&'.includes(lambang))
    const spasi = arry.length - 1;
// cari kata terpanjang
let kataTerpanjang = "";

for (let kata of teks.split(' ')) {
    if (kata.length > kataTerpanjang.length) {
        kataTerpanjang = kata;
    }
}
// cetak hasil 
    console.log ( 'teks awal: ' + teks + '\n' + 'panjang karakter: ' + panjang + '.' + "\n" + 'panjang kata: ' + kata + '.' + '\n' + 'Jumlah vokal:', vokal + '.' + '\n' + 'jumlah consonan: ' + consonan + '.' + '\n' + 'jumlah angka: ' + nomor + '.' + '\n' + 'jumlah spasi: ' + spasi + '.' + '\n' + 'apakah ada lambang di teks: ' + lambang + '.' + '\n' + 'kata terpanjang: ' + kataTerpanjang  + '.')
    console.log ('---------------------------------------')
}



analisisTeks ( 'namaku adalah muhammad rasya rizaldi dan umur saya 20 tahun.')
analisisTeks ( 'saya adalah programmer pemula @ # $')
analisisTeks ( 'lokasi pondok saya di jogja kretek')

/* hasil: 
teks awal: namaku adalah muhammad rasya rizaldi dan umur saya 20 tahun.
panjang karakter: 60.
panjang kata: 10.
Jumlah vokal: 21.
jumlah consonan: 27.
jumlah angka: 2.
jumlah spasi: 9.
apakah ada lambang di teks: false.
kata terpanjang: muhammad.
---------------------------------------
teks awal: saya adalah programmer pemula @ # $
panjang karakter: 35.
panjang kata: 7.
Jumlah vokal: 11.
jumlah consonan: 15.
jumlah angka: 0.
jumlah spasi: 6.
apakah ada lambang di teks: true.
kata terpanjang: programmer.
---------------------------------------
teks awal: lokasi pondok saya di jogja kretek
panjang karakter: 34.
panjang kata: 6.
Jumlah vokal: 12.
jumlah consonan: 17.
jumlah angka: 0.
jumlah spasi: 5.
apakah ada lambang di teks: false.
kata terpanjang: lokasi.
---------------------------------------
*/