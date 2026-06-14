/* simulasi kerajaan bertahan hidup, sebuah kerajaan kecil sedang mengalami krisis pangan.*/

let dataPenduduk = [
    { nama: "Ari", energi: 90, makanan: 2, emas: 30, status: "aktif" },
    { nama: "Bima", energi: 60, makanan: 1, emas: 10, status: "aktif" },
    { nama: "Citra", energi: 50, makanan: 0, emas: 50, status: "aktif" },
    { nama: "Dewi", energi: 20, makanan: 4, emas: 5, status: "aktif" },
    { nama: "Eko", energi: 75, makanan: 0, emas: 20, status: "aktif" }
];

// fase 1 -konsumsi makanan:
function memilikiMakanan() {
    console.log ( 'data awal penduduk: ', dataPenduduk );
    for (let penduduk of dataPenduduk) {
        if (penduduk.makanan > 0 && penduduk.status === "aktif") {
            penduduk.makanan -= 1;
            penduduk.energi += 10;
        } else {
            penduduk.energi -= 20;
        }
    }
}

//fase 2 -status penduduk
function statusp () {
    console.log ( 'hasil fase 2:' );
    for ( let statuspen of dataPenduduk) {
        if ( statuspen.energi <= 0 ) {
           statuspen.status = "tumbang";
           console.log ( statuspen.nama + ' ' + 'sudah tumbang. tidak bisa mengiikuti fase selanjutnya' )
        } else {
            console.log ( statuspen.nama + ' ' + 'belum tumbang. bisa mengikuti fase berikutnya') 
        }
         console.log ( statuspen.nama + ' ' + 'status penduduk: ' + statuspen.status) 
    }
     console.log ( 'data akhir penduduk: ', dataPenduduk )
}


// fase 3 -mencari makanan
function mencariMakanan () {
    console.log ('------------------------------');
    console.log ( 'hasil fase 3:' );
    for ( let mencari of dataPenduduk) {
        if ( mencari.energi >= 80 && mencari.status === 'aktif') {
            mencari.makanan += 3;
            mencari.energi -= 15;
            console.log ( mencari.nama + ' ' + 'karna energi diatas 79 mendapat 3 makanan dan berkurang 15 energi')
        } else if ( mencari.energi >= 50 && mencari.status === 'aktif') {
            mencari.makanan += 2;
            mencari.energi -= 15;
            console.log ( mencari.nama + ' ' + 'karna energi diatas 49 mendapat 2 makanan dan berkurang 15 energi')
        } else if (mencari.energi  >= 30 && mencari.status === 'aktif') {
            mencari.makanan += 1;
            mencari.energi -= 15;
            console.log ( mencari.nama + ' ' + 'karna energi diatas 29 mendapat 1 makanan dan berkurang 15 energi')
        } else if (mencari.energi  < 30 && mencari.status === 'aktif') {
            mencari.makanan += 0;
            mencari.energi -= 15;
            console.log ( mencari.nama + ' ' + 'karna energi dibawah 30 tidak dapat makanan dan berkurang 15 energi')
        }
    }
}

//fase 4 -pasar
function belanja () {
    console.log ('------------------------------');
    console.log ( 'hasil fase 4:' );
    for ( let beli of dataPenduduk ) {
        if ( beli.makanan === 0 && beli.emas >=10 && beli.status === 'aktif' ) {
            beli.makanan += 1;
            beli.emas -= 10;
        } else if ( (beli.makanan !== 0 || beli.emas < 10)  && beli.status === 'aktif') {
            console.log (beli.nama + ' ' + 'tidak membeli makanan karna makanannya masih ada')
        }
    }
}

// fase 5 -Solidaritas
function solidaritas () {
    console.log ('------------------------------');
    console.log ( 'hasil fase 5:' );
    let sumbangan = 0;
    for ( let solid of dataPenduduk) {
        if ( solid.makanan > 3 && solid.status === 'aktif') {
             solid.makanan -= 1
             sumbangan += 1;
             console.log ( 'yg memberi sumbangan: ' + solid.nama)
        } 
    }
    for ( let miskin of dataPenduduk ) {
        if ( miskin.makanan < 2 && sumbangan > 0 && miskin.status === 'aktif') {
            miskin.makanan += 1;
            sumbangan -= 1;
            console.log ( 'yg menerima sumbangan: ' + miskin.nama)
        }
    }
    console.log ( 'sisa stok: ' + sumbangan )
    console.log ('------------------------------');
}

// soal 1 :
function simulasi1Hari () {
    memilikiMakanan ()
    mencariMakanan ()
    belanja ()
    solidaritas ()
    statusp ()
}

// soal no 2 :
function simulasi7Hari () {
    for ( let i = 1; i <= 7; i++) {
        console.log ( '-----------' + "hari ke: " + i + ' ' + '-----------' );
        simulasi1Hari ()
    }
}

simulasi7Hari ();

// soal no 3 :
// nama-nama aktif,
    let pendudukAktif = [ ]
    for ( let aktif of dataPenduduk) {
        if ( aktif.status === "aktif") {
            pendudukAktif.push ( aktif.nama)   
        };   
};
    console.log ( 'nama yg aktif: ' + pendudukAktif )
// nama-nama tumbang.
    let pendudukTumbang = []
    for ( let tumbang of dataPenduduk ) {
        if ( tumbang.status === 'tumbang') {   
            pendudukTumbang.push ( tumbang.nama)
        }; 
    };
    console.log ( 'nama yg tumbang: ' + pendudukTumbang)
// total makanan.
    let totalMakanan = 0;
    for ( let totalM of dataPenduduk ) {
        totalMakanan += totalM.makanan;
    };
     console.log ( 'total makanan kerajaan: ' + totalMakanan);
// total emas.
     let totalEmas = 0;
    for ( let totale of dataPenduduk ) {
        totalEmas += totale.emas;
    };
    console.log ( 'total emas kerajaan: ' + totalEmas);
// rata-rata energy penduduk aktif.
    let rataRata = 0;
    for ( let rata of dataPenduduk ) {
        if ( rata.status === 'aktif') {
            rataRata += rata.energi;
        };
    };
    console.log ( 'rata rata energy penduduk aktif:' + rataRata / pendudukAktif.length );

    //soal no 4.
let kerajaan = {
    simulasiHari: function () {
    memilikiMakanan();
    mencariMakanan();
    belanja();
    solidaritas();
    statusp();
},
    laporan : function () {
        console.log ( 'laporan penduduk kerajaan: ' );
        console.log ( dataPenduduk );
    },
    aktifPenduduk : function () {
        console.log ( 'daftar penduduk yg aktif: ' );
        console.log ( pendudukAktif );
    },
    tumbangPenduduk : function () {
        console.log ( 'daftar penduduk yg tumbang: ');
        console.log ( pendudukTumbang );
    },
    pendudukTerkaya : function () {
        let terkaya = dataPenduduk [0];
        for ( let kaya of dataPenduduk ) {
            if ( kaya.emas > terkaya.emas )
                terkaya = kaya
        };
        console.log ( 'orang terkaya: ' + terkaya.nama + ' ' + 'dengan emas: ' + terkaya.emas + ' ' + 'dengan status: ' + terkaya.status);
    },
    pendudukTerlapar : function () {
        let terlapar = dataPenduduk [0];
        for ( let lapar of dataPenduduk ) {
            if ( lapar.makanan < terlapar.makanan) 
                terlapar = lapar
        };
        console.log ( 'orang terlapar: ' + terlapar.nama + ' ' + 'dengan makanan : ' + terlapar.makanan + ' ' + 'dengan status: ' + terlapar.status) 
    }
}
    kerajaan.simulasiHari ();
    kerajaan.laporan();
    kerajaan.aktifPenduduk();
    kerajaan.tumbangPenduduk();
    kerajaan.pendudukTerkaya();
    kerajaan.pendudukTerlapar();
    
    //soal no 5

    let totalKeseluruhan = [ rataRata, totalMakanan, totalEmas, pendudukAktif.length]
    console.log ( 'total energi: ' + totalKeseluruhan[0])
    console.log ( 'total makanan: ' + totalKeseluruhan[1])
    console.log ( 'total emas: ' + totalKeseluruhan[2])
    console.log ( 'total penduduk aktif: ' + totalKeseluruhan[3])
