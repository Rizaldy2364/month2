// Soal 7 — Counter Pengunjung

function buatCounter() {
    let jumlahPengunjung = 0;
    return function jumlah () {
            jumlahPengunjung++ ;
            console.log ( 'jumlah pengunjung hari ini: ' + jumlahPengunjung + '.' )
    }
    jumlah ()
} 

const hasil = buatCounter();

hasil()
hasil()
hasil()
hasil()
hasil()
hasil()
hasil()

/* hasil:
jumlah pengunjung hari ini: 1.
jumlah pengunjung hari ini: 2.
jumlah pengunjung hari ini: 3.
jumlah pengunjung hari ini: 4.
jumlah pengunjung hari ini: 5.
jumlah pengunjung hari ini: 6.
jumlah pengunjung hari ini: 7.
*/
