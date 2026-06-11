let nilai = [ 80, 90, 75, 100, 60];
function hasilNilai () {
    let totalNilai = 0;
    let tertinggi = nilai [0];
    let terendah = nilai [0];
    for ( i = 0; i < nilai.length; i++) {
        totalNilai += nilai [i];
        if ( nilai[i] > tertinggi ) {
            tertinggi = nilai [i];
        } if ( nilai[i] < terendah ) {
            terendah = nilai [i];
        }
    }
    let rataRatanilai = totalNilai / nilai.length;

    console.log ( "total nilai: " + totalNilai );
    console.log ( 'nilai rata-rata: ' + rataRatanilai );
    console.log ( "nilai tertinggi: " + tertinggi );
    console.log ( "nilai terendah: " + terendah );
}

hasilNilai ()
/* Hasil : total nilai: 405
nilai rata-rata: 81
nilai tertinggi: 100
nilai terendah: 60*/