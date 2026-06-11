let daftarNama = ['andi', 'budi', 'citra', 'dewi', 'asep', 'aulia']

function mahasiswa () {
    console.log ( 'daftar nama kelas a: ' + daftarNama );

    let diawaliHurufA = [];
    let jumlahA = 0;
    let lebihDari4 = [];

    for ( let i = 0; i < daftarNama.length; i++ ) {
        if ( daftarNama[i][0] === "a" ) {
             diawaliHurufA.push ( daftarNama [i] );
             jumlahA++;
        }
         if ( daftarNama [i].length > 4 ) {
        lebihDari4.push( daftarNama [i] );
    }
}
    console.log ( "nama yg diawali huruf a: " + diawaliHurufA );
    console.log ( "jmlahnya: " + jumlahA );
    console.log ( 'nama yg lebih dari 4: ' + lebihDari4 );
}

mahasiswa ()
/* Hasil: daftar nama kelas a: andi,budi,citra,dewi,asep,aulia
nama yg diawali huruf a: andi,asep,aulia
jmlahnya: 3
nama yg lebih dari 4: citra,aulia*/