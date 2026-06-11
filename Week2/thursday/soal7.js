let book = [ 'Laskar Pelangi', 'Bumi', 'Dilan', 'Ayat-Ayat Cinta'];

function buku () {
    console.log ( 'daftar buku: ' + book );

    book.push ('naruto')
    console.log ( 'setelah tambah buku: ' + book)

   let hapus = book.indexOf ( 'Bumi');
   if ( hapus != -1) {
    book.splice (hapus, 1);
   }
    console.log ( "setelah menghapus buku: " + book );

    let cekBuku = 'doraemon';
    if ( book.includes (cekBuku) ) {
        console.log ( cekBuku + ':' + ' ' + 'buku tersedia' );
    } else {
        console.log (cekBuku + ':' + ' ' + 'buku tidak tersedia' );
    }
    console.log ( 'tampilan seluruh daftar buku: ' + book );
}

buku ()
/* Hasil : daftar buku: Laskar Pelangi,Bumi,Dilan,Ayat-Ayat Cinta
setelah tambah buku: Laskar Pelangi,Bumi,Dilan,Ayat-Ayat Cinta,naruto
setelah menghapus buku: Laskar Pelangi,Dilan,Ayat-Ayat Cinta,naruto
doraemon: buku tidak tersedia
tampilan seluruh daftar buku: Laskar Pelangi,Dilan,Ayat-Ayat Cinta,naruto.*/
