let nilai = [ 90, 65, 75, 40, 88, 70, 55];
function dataNilai () {
    let lulus = [];
    let tidakLulus = [];
    for ( let i = 0; i < nilai.length; i++ ) {
        if ( nilai [i] >= 75 ) {
            lulus.push ( nilai[i] );
        } else {
            tidakLulus.push ( nilai[i] );
        };
    };
    console.log ( "santri lulus: " + lulus);
    console.log ( "jumlah yg lulus: " + lulus.length);
    console.log ( "santri gagal: " + tidakLulus);
    console.log ( "jumlah yg gagal: " + tidakLulus.length);
};

dataNilai ()
/* hasil: santri lulus: 90,75,88
jumlah yg lulus: 3
santri gagal: 65,40,70,55
jumlah yg gagal: 4*/