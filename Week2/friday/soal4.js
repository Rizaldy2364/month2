let barang = {
    namaBarang : 'pisau',
    stok : 20 ,
    harga : 10000,
    tambahStok : function (jumlah) {
        this.stok += jumlah;
        console.log ( 'barang berhasil ditambah: ' + this.stok);
    },
    kurangStok : function (jumlah) {
        this.stok -= jumlah;
        console.log ( 'barang berhasil dikurangi: ' + this.stok);
    },
    totalNilaiBarang : function () {
        let total = this.stok *= this.harga;
        console.log ( 'total harga barang: ' + total);
    }
}
console.log ( 'data awal barang: ');
console.log ( 'nama barang: ' + barang.namaBarang);
console.log ( 'stok: ' + barang.stok);
console.log ( 'harga perbarang: ' + barang.harga);
barang.tambahStok( 25 );
barang.kurangStok( 5 );
barang.totalNilaiBarang();
/* Hasil: 
data awal barang: 
nama barang: pisau
stok: 20
harga perbarang: 10000
barang berhasil ditambah: 45
barang berhasil dikurangi: 40
total harga barang: 400000
*/