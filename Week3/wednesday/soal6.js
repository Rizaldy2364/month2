// Soal 6 – Analisis Harga
const harga = 125499.789;

function bulatan () {
    const naik = Math.ceil(harga)
    const turun = Math.floor(harga)
    const membulatkanTerdekat = Math.round(harga)
    const desimal = membulatkanTerdekat.toFixed(2)
    const ubah = desimal.replace ('.',',')
    const titik = ubah.slice(0,3) + '.' + ubah.slice(3);
    console.log ( 'total awal: ' + harga + '.' + '\n' + 'membulatkan ke atas: ' + naik + '.' + '\n' + 'membulatkan kebawah: ' + turun + '.' + '\n' + 'membulatkan terdekat: ' + membulatkanTerdekat + '.' + '\n' + "hasil akhir: Rp" + titik + '.')
}

bulatan ()

/* hasil: 
total awal: 125499.789.
membulatkan ke atas: 125500.
membulatkan kebawah: 125499.
membulatkan terdekat: 125500.
hasil akhir: Rp125.500,00.
*/