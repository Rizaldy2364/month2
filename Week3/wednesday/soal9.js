// Soal 9 – Studi Kasus Kasir

const namaBarang = "Laptop Gaming";
const hargaBarang = "15749999.95";
const diskon = 12.5;
const rupiah = Math.round(hargaBarang)
console.log 

function kasir () {
    // namabarang touppercase
    const besar = namaBarang.toUpperCase();
    // harga
    const number = parseFloat(hargaBarang)
    const bulat = Math.round(number);
    const desimal = bulat.toFixed(2);
    const ubah = desimal.replace('.',',');
    const tambah = ubah.slice (0,2) + '.' + ubah.slice(2);
    const tambah2 = tambah.slice(0,6) + '.' + tambah.slice(6);
    // discount
    const discount = bulat * diskon / 100;
    const discon = discount.toFixed(2);
    const u = discon.replace('.',',')
    const t = u.slice (0,1) + '.' + u.slice(1)
    const t2 = t.slice (0,5) + '.' + t.slice(5)
    // discount barang
    const total = bulat - discount;
    const des = total.toFixed(2)
    const bah = des.replace('.',',')
    const tam = bah.slice (0,2) + '.' + bah.slice(2)
    const tam2 = tam.slice (0,6) + '.' + tam.slice(6)
    console.log ( 'nama barang: ' + besar + '.' + '\n' + 'harga awal: Rp' + tambah2 + '.' + '\n' + 'discont sebesar: Rp' + t2 + '.' + '\n' + 'total harga barang: Rp' + tam2);
}

kasir ()

/* hasil: 
nama barang: LAPTOP GAMING.
harga awal: Rp15.750.000,00.
discont sebesar: Rp1.968.750,00.
total harga barang: Rp13.781.250,00
*/