// Soal 3 – Validasi Password

const password = "Bel2026";

function syarat () {
    const kecil = password != password.toLowerCase();
    const besar = password != password.toUpperCase();
// buat loop mengandung angka dalam password
    let angka;
    for ( ada of password ) {
        if ( ada >= '0' && ada <= '9') {
        angka = true
        }
    }
// buat syarat bikin password
    if ( besar && kecil && password.length >= 8 && angka ) {
        console.log ('password: ' + password + '. ' + 'berhasil dibuat.')
    } else {
        console.log ('password: ' + password + '. ' + 'gagal dibuat.')
    }
}

syarat ()

/* hasil: 
1. password: BelajarJS2026. berhasil dibuat.
2. password: BelajarJS. gagal dibuat.
3. password: Bel2026. gagal dibuat.
*/
