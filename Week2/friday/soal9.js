let bank = {
    nasabah : [],
    tambahNasabah : function (nama , saldo ) {
        this.nasabah.push({
            nama : nama,
            saldo : saldo,
        })
        console.log ( 'nasabah ' + nama + ' ' + 'berhasil ditambahkan' + '.' + ' ' + 'saldo: ' + saldo)
    },
    cariNasabah: function (nama) {
    for (let data of this.nasabah) {
        if (data.nama === nama) {
            console.log("Nasabah ditemukan: " + data.nama + ", saldo: " + data.saldo);
            return;
        }
    }
    console.log("Nasabah tidak ditemukan");
    },
    menampilkanSeluruhNasabah : function () {
        console.log ( 'seluruh nasabah: ', this.nasabah)
    }   
    }

bank.tambahNasabah( 'rizaldy' , 200000)
bank.tambahNasabah( 'ahmad' , 500000)
bank.cariNasabah ( 'ahmad')
bank.menampilkanSeluruhNasabah ()
/* Hasil: 
nasabah rizaldy berhasil ditambahkan. saldo: 200000hJ
nasabah ahmad berhasil ditambahkan. saldo: 500000
Nasabah ditemukan: ahmad, saldo: 500000
seluruh nasabah:  [
  { nama: 'rizaldy', saldo: 200000 },
  { nama: 'ahmad', saldo: 500000 }
]*/