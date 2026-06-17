// Soal 2 – Analisis Kalimat

const kalimat = "JavaScript adalah bahasa pemrograman yang sangat menyenangkan";

console.log ( 'kalimat: ' + kalimat);
function hasil () {

    const hitungKarakter = kalimat.length;
    const arry = kalimat.split(" ");
    const hitungKata = arry.length;
    const kataPertama = arry[0];;
    const kataTerakhir = arry[6];
    const pengecekan = kalimat.includes( "pemrograman" );

    console.log ( 'jumlah karakter: ' + hitungKarakter + '\n' + 'jumlah kata: ' + hitungKata + '\n' + 'kata pertama: ' + kataPertama + '\n' + 'kata terakhir: ' + kataTerakhir + '\n' + "pengecekan kata pemrograman: " + pengecekan );
} ;

hasil ();

/* hasil: 
kalimat: JavaScript adalah bahasa pemrograman yang sangat menyenangkan
jumlah karakter: 61
jumlah kata: 7
kata pertama: JavaScript
kata terakhir: menyenangkan
pengecekan kata pemrograman: true
*/