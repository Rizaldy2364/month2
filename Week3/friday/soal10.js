// Soal 10 – Hitung Total Nilai

function hitungTotal(...angka) {
    console.log ('total nilai:', angka.join(','))
}

hitungTotal(10, 20, 30);
hitungTotal(5, 10, 15, 20, 25);

/* hasil: 
total nilai: 10,20,30
total nilai: 5,10,15,20,25
*/