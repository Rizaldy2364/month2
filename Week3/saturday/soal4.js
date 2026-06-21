// Soal 4 — Audit Program Warisan

//function sistem() {

    //console.log(user); // ini bisa diakses karna menggunakan var tapi hasilnya akan muncul (undefined) lebih baik mengganti var dengan yg lain dan mengaksesnya setelah dideklarasikan.

    //var user = "Ari";

    //if (true) {
        //let score = 90;
    //}

    //function tampil() {
        //console.log(score); // hasilnya akan eror karna variable dideklarasi didalam kurung kurawal if yg disebut sebagai block scope jadi hanya bisa diakses di dalam scope if.
    //}

    //tampil();
//}

//sistem();

// hasil perbaikan:

function sistem() {

    let user = "Ari";
    console.log(user);

    function tampil() {
        if (true) {
          let score = 90;
          console.log(score);
        }   
    }

    tampil();
}

sistem();

/* hasil:
Ari
90
*/

