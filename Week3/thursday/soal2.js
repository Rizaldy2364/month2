// Soal 2 — Area Terlarang

let nama = 'rizaldy';
// function 1
function a () {
   let pelajar = true;
   console.log (nama) //bisa diakses karna dia merupakan global scope begitupula bisa diakses di luar.
   console.log ( pelajar ) // bisa diakses karna masih didalam scope tapi tidak bisa diakses di luar.
    // function 2
    function   b () {
        let umur = 20;
        console.log ( umur); // bisa diakses karna masih didalam scope tapi tidak bisa diakses di luar.
        console.log (pelajar) // bisa diakses karna masih didalam scope a () tapi tidak bisa diakses di luar.
        // function 3
        function c () {
            let program = 'programmer';
            console.log ( program ) // bisa diakses karna masih didalam scope tapi tidak bisa diakses di luar.
            console.log ( umur) // bisa diakses karna masih didalam scope b () tapi tidak bisa diakses di luar.
        }
    }
}