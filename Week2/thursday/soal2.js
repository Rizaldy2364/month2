let angka = [12, 5, 7, 20, 9];

function cariAngka(nilai) {
    let indeks = angka.indexOf(nilai);

    if (indeks !== -1) {
        console.log( "Angka ditemukan" );
        console.log( "Posisi indeks:", indeks );
    } else {
        console.log( "Angka tidak ditemukan" );
    }
}

cariAngka(20);
/* Hasil: Angka ditemukan
Posisi indeks: 3*/
