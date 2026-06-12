let santri = {
    andi : 80,
    budi : 90,
    citra : 75,
    dewi : 88,
}
for ( let nama in santri) {
    console.log ( 'nama santri: ' + nama + '.' + ' ' +"nilai: " + santri[nama])
}

function nilaiSantri() {
    let total = 0;
    for ( let nilai in santri) {
        total += santri[nilai]
    };
    let nilaiRataRata = total / 4 ;
    console.log ( "nilai rata-rata: " + nilaiRataRata)
}

function nilaiTinggi () {
    let nilaiTertinggi = 0;
    for ( let i in santri ) {
        if ( santri[i] > nilaiTertinggi ) {
             nilaiTertinggi = santri[i];
        }
    }
    console.log ( "nilai tertinggi: " + nilaiTertinggi )
}
nilaiSantri()
nilaiTinggi()
/* Hasil: 
nama santri: andi. nilai: 80
nama santri: budi. nilai: 90
nama santri: citra. nilai: 75
nama santri: dewi. nilai: 88
nilai rata-rata: 83.25
nilai tertinggi: 90
*/