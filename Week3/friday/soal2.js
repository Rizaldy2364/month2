// Soal 2 – Analisis Nilai Siswa

const nilai = [85, 92, 78, 95, 88];

const [ pertama, kedua, , keempat, kelima] = nilai;

function nilaiSantri (...nilai) {
    console.log (nilai.join(','))
}

 nilaiSantri (pertama, kedua , keempat, kelima);

/* hasil:
85,92,95,88    //nilai ketiga: 78 diabaikan.
*/