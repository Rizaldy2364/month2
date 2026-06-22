// Soal 3 — Sistem Bank Mini

let nomorRekening = 1000;

function buatBank(namaBank) {
      let saldo = 0;
      let transaksi = [];
      console.log ( 'nama bank:', namaBank)
      
      
    return {
        buatRekening(saldoAwal) {
            nomorRekening++;
            saldo = saldoAwal; 
            console.log('nomor rekening:', nomorRekening);
            console.log ('saldo awal anda:', saldo)   
            console.log ( '-------------')
        },
        transfer(transfer) {
            if ( transfer > saldo) {
                console.log ('anda tidak bisa transfer karna saldo anda kurang.');
                console.log ( '-------------')
                return
            };
            
            saldo -= transfer;
            let waktu = new Date();
            transaksi.push({jenis: "transfer",jumlah: transfer,waktu: waktu});

            console.log ( 'anda berhasil trasfer sebesar:', transfer + '.' + '\nsaldo anda:', saldo);
            console.log ( 'waktu transfer:', waktu.toLocaleString ());
            console.log ( '-------------')
        },
        setor(setor) {
            saldo += setor
            let waktu = new Date();
            transaksi.push({jenis: "setor",jumlah: setor,waktu: waktu});

            console.log ( 'setoran berhasil sebesar: ', setor + '.' + '\nsaldo anda:', saldo);
            console.log ( 'waktu setoran:', waktu.toLocaleString());
            console.log ( '-------------')

        },
        tarik(tarik) {
            if ( tarik > saldo) {
                console.log ('anda tidak bisa menarik uang karna saldo anda kurang.');
                console.log ( '-------------')
                return
            };
            saldo -= tarik
            let waktu = new Date();
            transaksi.push({jenis: "tarik",jumlah: tarik, waktu: waktu});

            console.log ( 'anda berhasil menarik uang sebesar:', tarik + '.');
            console.log ( 'waktu tarik:',  waktu.toLocaleString())
            console.log ( '-------------')
            return
        },
        laporan() {
            console.log ( 'sisa saldo:', saldo);
            console.log ('---------- riwayat transaksi ---------')
            // riwayat transaksi
             for (let data of transaksi) {
                console.log( 'jenis',data.jenis + '. ' + 'jumlah:', data.jumlah + '. ' + 'waktu:', data.waktu.toLocaleString());
            }
            console.log ('--------------------------------------')
        }
    };
}

const bank = buatBank('bank solo')

bank.buatRekening(100000000)
bank.transfer(50000000)
bank.setor(20000000)
bank.tarik(30000000)
bank.laporan()

const bank2 = buatBank('bank jogja')

bank2.buatRekening(1000000000)
bank2.transfer(50000000)
bank2.setor(20000000)
bank2.tarik(30000000)
bank2.laporan()

/* hasil:
nama bank: bank solo
nomor rekening: 1001
saldo awal anda: 100000000
-------------
anda berhasil trasfer sebesar: 50000000.
saldo anda: 50000000
waktu transfer: 20/6/2026, 16.14.28
-------------
setoran berhasil sebesar:  20000000.
saldo anda: 70000000
waktu setoran: 20/6/2026, 16.14.28
-------------
anda berhasil menarik uang sebesar: 30000000.
waktu tarik: 20/6/2026, 16.14.28
-------------
sisa saldo: 40000000
---------- riwayat transaksi ---------
jenis transfer. jumlah: 50000000. waktu: 20/6/2026, 16.14.28
jenis setor. jumlah: 20000000. waktu: 20/6/2026, 16.14.28
jenis tarik. jumlah: 30000000. waktu: 20/6/2026, 16.14.28
--------------------------------------
// nama bank kedua
nama bank: bank jogja
nomor rekening: 1002
saldo awal anda: 1000000000
-------------
anda berhasil trasfer sebesar: 50000000.
saldo anda: 950000000
waktu transfer: 20/6/2026, 16.14.28
-------------
setoran berhasil sebesar:  20000000.
saldo anda: 970000000
waktu setoran: 20/6/2026, 16.14.28
-------------
anda berhasil menarik uang sebesar: 30000000.
waktu tarik: 20/6/2026, 16.14.28
-------------
sisa saldo: 940000000
---------- riwayat transaksi ---------
jenis transfer. jumlah: 50000000. waktu: 20/6/2026, 16.14.28
jenis setor. jumlah: 20000000. waktu: 20/6/2026, 16.14.28
jenis tarik. jumlah: 30000000. waktu: 20/6/2026, 16.14.28
--------------------------------------
*/