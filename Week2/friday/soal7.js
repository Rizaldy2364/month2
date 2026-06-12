let penjualan = {
    Januari: 100000,
    Februari: 120000,
    Maret: 90000,
    April: 150000,
}
console.log ( 'data awal penjualan: ',  penjualan )
function total () {
    let totalp = 0;
    for ( let total in penjualan) {
        totalp += penjualan[total];
    }
    console.log ( 'total penjualan: ' + totalp);
    console.log ( 'rata rata penjualan: ' + totalp / 4)
}
function tertinggi () {
    let tinggip =0;
    for ( let tinggi in penjualan ) {
        if ( penjualan[tinggi] > tinggip); {
            tinggip =penjualan[tinggi];
        }
    }
    console.log ( "penjualan tertinggi: " + tinggip)
}
    
total()
tertinggi()
/* hasil: 
data awal penjualan:  { Januari: 100000, Februari: 120000, Maret: 90000, April: 150000 }
total penjualan: 460000
rata rata penjualan: 115000
penjualan tertinggi: 150000
*/