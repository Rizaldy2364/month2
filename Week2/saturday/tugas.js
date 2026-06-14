function hari (hari) {
    if ( hari === 'senin' || hari === 'selasa') {
        console.log ( 'hari ' + hari + ' ' + 'pakai kameja putih');
    }else if ( hari === 'rabu' || hari === 'kamis' ) {
        console.log ( 'hari ' + hari + ' ' + 'pakai kameja hitam');
    } else if ( hari === 'jumat' || hari === 'sabtu') {
        console.log ( 'hari ' + hari + ' ' + 'pakai baju batik');
    } else if ( hari === 'minggu') {
        console.log ( 'hari ' + hari + ' ' + 'libur!!!');
    } else {
        console.log ( 'hari tidak valid ');
    };
    } ;

    hari ('monday')