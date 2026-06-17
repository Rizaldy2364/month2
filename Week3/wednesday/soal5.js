// Soal 5 – Mesin Sensor Kata

const komentar = "Dasar bodoh! Kamu sangat jelek dan malas.";

console.log ( 'komentar sebelum di sensor: ' + komentar );

function sensor () {
// sensor kata-kata tidak pantas
    const bodoh = komentar.replace ( 'bodoh','*****');
    const jelek = bodoh.replace ('jelek','*****');
    const malas = jelek.replace ('malas','*****');

    console.log ( 'komentar sesudah disensor: ' + malas );
}

sensor ()

/* hasil: 
komentar sebelum di sensor: Dasar bodoh! Kamu sangat jelek dan malas.
komentar sesudah disensor: Dasar *****! Kamu sangat ***** dan *****.
*/
