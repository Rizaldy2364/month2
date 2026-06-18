// Soal 11 — Dashboard Waktu

function waktu () {

    let time = new Date ()
    let tanggalSekarang = time.getDate ();
    let bulanSekarang = time.getMonth () + 1;
    let tahunSekarang = time.getFullYear ();
    let hari =time.getDay ();
    let jam = time.getHours ();
    let menit = time.getMinutes ();
    let detik = time.getSeconds ()
    
    console.log ( 'tanggal: ' +  tanggalSekarang + "-" + bulanSekarang + '-' + tahunSekarang + '\n' + 'hari: ' + hari + '.' + '\n' + 'jam: ' + jam + '-' + menit + '-' + detik + '.');
}

 waktu ()

 /* hasil: 
tanggal: 18-6-2026
hari: 4.
jam: 20-33-9.
 */