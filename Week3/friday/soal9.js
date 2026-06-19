// Soal 9 – Mesin Checkout

function checkoutBarang (...barang) {
    console.log ( 'barang yg dibeli:', barang.join(', ') + '.');
    console.log ( 'jumlah barang:', barang.length + '.');
    console.log ( 'barang pertama yg dibeli:', barang[0] + '.')
}

checkoutBarang ( 'iphone 15 basic', 'pena', 'mobil', 'motor cbr', 'sabun', 'parfum')

/* hasil:
barang yg dibeli: iphone 15 basic, pena, mobil, motor cbr, sabun, parfum.
jumlah barang: 6.
barang pertama yg dibeli: iphone 15 basic.
*/