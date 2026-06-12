let dompet = {
    pemilik : "rizaldy",
    saldo : 400000,
    topup : function (jumlah) {
        this.saldo += jumlah;
        console.log ( "berhasil top-up: " + this.saldo );
    },

    bayar : function (jumlah) {
        this.saldo -= jumlah;
        if ( this.saldo >= 0) {
            console.log ( "pembayaran berhasil: " + this.saldo )
            
        } else {
            console.log ( "transaksi gagal")
        }
    }, 
    cekSaldo : function () {
        if ( this.saldo >= 0 ) {
            console.log ( 'sisa saldo:' + this.saldo )
        } else {
            console.log ( 'saldo kurang')
        }
        }
};

console.log ( "nama : " + dompet.pemilik);
console.log ( "saldo awal: " + dompet.saldo)
dompet.topup(500000)
dompet.bayar(1000000)
dompet.cekSaldo()
/* Hasil: 
kalau saldo cukup
nama : rizaldy
saldo awal: 400000
berhasil top-up: 900000
pembayaran berhasil: 0
sisa saldo:0

kalau saldo kurang: 
nama : rizaldy
saldo awal: 400000
berhasil top-up: 900000
transaksi gagal
saldo kurang*/
