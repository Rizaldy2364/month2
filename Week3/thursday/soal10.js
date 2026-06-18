// Soal 10 — Mesin Voting

function voting () {
    let suara = 0;
    let hasil = 0;
    console.log ( 'total awal suara: ' + hasil);
    return {
        // voting
        vote () {
            suara++
            console.log ( 'suara bertambah: ' + suara);
        },
        // hasil suara
        hasilSuara () {
            hasil += suara
            console.log ( "total suara terkumpul: " + hasil );
        }
    }
}

let totalSuara = voting();
totalSuara.vote ()
totalSuara.vote ()
totalSuara.vote ()
totalSuara.vote ()
totalSuara.vote ()
totalSuara.vote ()
totalSuara.hasilSuara()

/* hasil: 
total awal suara: 0
suara bertambah: 1
suara bertambah: 2
suara bertambah: 3
suara bertambah: 4
suara bertambah: 5
suara bertambah: 6
total suara terkumpul: 6
*/
