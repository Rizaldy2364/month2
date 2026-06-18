// Soal 6 — Audit Kode
// 3 masalahnya:
/*
console.log ( namaPabrik ); // tidak bisa diakses karna keyword buat variablenya const jadi yg benar adalah dengan mengaksesnya setelah dideklarasikan.
console.log ( namaPemilik ); // tidak bisa diakses karna keyword buat variableny let jadi yg benar adalah dengan mengaksesnya setelah dideklarasikan.
jumlah() // tidak bisa diakses karna functionnya berupa expression jadi yg benar adalah mengaksesnya setelah dideklarasikan atau kalau ingin tetap mengaksesnya
            sebelum dideklarasi maka ubah functionnya menjadi function deklarasion.
*/

const namaPabrik = 'pt kuliner indonesia';
let namaPemilik = 'rizaldy';
const jumlah = function () {
    let jumlahKaryawan = 100;
    let jumlahMenu = 58;
    console.log ( 'jumlah karyawan: ' + jumlahKaryawan + "." + '\n' + 'jumlah menu :' + jumlahMenu + '.' + '\n')
}

console.log ( 'nama pabrik: ' + namaPabrik );
console.log ( 'nama pemilik pabrik: ' + namaPemilik );
jumlah()

/* hasil:
nama pabrik: pt kuliner indonesia
nama pemilik pabrik: rizaldy
jumlah karyawan: 100.
jumlah menu :58.
*/