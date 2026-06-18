// Soal 8 — Sistem Dompet Digital

function buatDompet(saldoAwal) {
    let saldo = saldoAwal;
    console.log ( 'saldo saat ini: ' + saldo)
    return {
        // sistem setor
        setor (jumlah) {
            saldo += jumlah;
            console.log ( 'berhasil setor sebanyak:' + jumlah + '.' + '\n' + 'total saldo:' + saldo + '.')
        },

        // sistem tarik
        tarik (jumlaht) {
            if ( jumlaht > saldo ) {
                console.log ( 'saldo anda tidak mencukupi.')
                return
            }
            saldo -= jumlaht
            console.log ( 'penarikan berhasil sebesar: ' + jumlaht + '.' + '\n' + 'total saldo:' + saldo + '.')
        },     
        cekSaldo () {
            console.log ( 'saldo saat ini: ' + saldo)
        }  
    }
}
const rekeningRizaldy = buatDompet(1000000)

rekeningRizaldy.setor(500000)
rekeningRizaldy.tarik(800000)
rekeningRizaldy.cekSaldo()

/* hasil: 
saldo saat ini: 1000000
berhasil setor sebanyak:500000.
total saldo:1500000.
penarikan berhasil sebesar: 800000.
total saldo:700000.
saldo saat ini: 700000
*/