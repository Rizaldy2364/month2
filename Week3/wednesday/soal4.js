// Soal 4 – Generator Inisial

const nama = "Muhammad Fikri Baihaqi";
console.log ('nama awal: ' + nama )

function initial () {
// ubah nama jadi kapital
    const capital = nama.toUpperCase ();
    console.log ( 'mengubah nama jadi huruf kapital: ' + capital)
// bikin initial
    const initialM = nama.slice(0,1) 
    const initialF = nama.slice(9,10) 
    const initialB = nama.slice(15,16) 

    const besar = initial;
    
 console.log ('initial: ' + initialM + '.' + initialF + '.' + initialB + '.')
}

initial ()

/* hasil: 
nama awal: Muhammad Fikri Baihaqi
mengubah nama jadi huruf kapital: MUHAMMAD FIKRI BAIHAQI
initial: M.F.B.
*/