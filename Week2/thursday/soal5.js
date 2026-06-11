let hargaBarang = [10000, 25000, 50000, 120000]
function hasilBarang () {
    let hargaDiscont = [];
    for ( i = 0; i < hargaBarang.length; i++ ) {
        let discont = hargaBarang [i] * 10 / 100; 
        hargaDiscont.push ( hargaBarang [i] - discont );
    }
    console.log ( 'harga awal: ' + hargaBarang );
    console.log ( "harga discont: " + hargaDiscont );
}

hasilBarang ()
/* Hasil: harga awal: 10000,25000,50000,120000
harga discont: 9000,22500,45000,108000*/