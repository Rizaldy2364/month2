// Soal 9 — Sistem Login

function buatLoginSystem() {
    let loginBerhasil = 0;
    let loginGagal = 0;
    return {
        berhasil () {
            loginBerhasil++
            console.log ( 'yg berhasil login: ' + loginBerhasil)
        },
        gagal () {
            loginGagal++
            console.log ( 'yg gagal login: ' + loginGagal)
        },
        total () {
            console.log ( '----------------------' )
            console.log ( 'total yg berhasil login: ' + loginBerhasil + '.' + '\n' + 'total yg gagal login: ' + loginGagal + '.')
        },
    }
}
let login = buatLoginSystem ();
login.berhasil()
login.berhasil()
login.berhasil()
login.berhasil()
login.berhasil()

login.gagal()
login.gagal()
login.gagal()

login.total()

/* hasil: 
yg berhasil login: 1
yg berhasil login: 2
yg berhasil login: 3
yg berhasil login: 4
yg berhasil login: 5
yg gagal login: 1
yg gagal login: 2
yg gagal login: 3
----------------------
total yg berhasil login: 5.
total yg gagal login: 3.
*/