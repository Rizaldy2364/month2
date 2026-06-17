// Soal 7 – Mesin Konversi Nilai

const input = "89.75";
console.log ( 'nilai awal: ' + input + ' adalah ' + typeof(input ))
function bulat () {
    // merubah string input menjadi angka.
    const number = parseFloat(input)
    console.log ( 'nilai sekarang: ' + number + ' adalah ' + typeof(number))
    // membulatkan angka number.
    const pembulatan = Math.round(number);
    //menentukan apakah hasil membulatkan angka dalam number beneran angka bulat atau bukan?
    const apakahBulat = Number.isInteger(pembulatan)
    console.log ( 'setelah dibulatkan menjadi: ' + pembulatan)
    console.log ( 'hasil pembulatan: ' + pembulatan + ' adalah: ' + apakahBulat)
}
 
bulat ()


/* Hasil: 
nilai awal: 89.75 adalah string
nilai sekarang: 89.75 adalah number
setelah dibulatkan menjadi: 90
hasil pembulatan: 90 adalah: true
*/