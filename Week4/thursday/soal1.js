// Soal 1 — Simulasi Synchronous vs Asynchronous

// Program A : ini contoh  synchronous yg mana program membaca dari atas ke bawah.

console.log ('mulai belajar')
console.log ('Mengerjakan tugas')
console.log ('Selesai')

/* hasil:
mulai belajar
Mengerjakan tugas
Selesai
*/

// Program B : ini contoh asynchronous yg mana code setTimeout dijalankan setelah 3s dan langsung menjalankan 'selesai' tanpa menunggu setTimeout selasai dijalankan.

console.log ('Mulai belajar')
setTimeout ( function(){
    console.log ( 'Mengunduh materi')
}, 3000)

console.log ( 'Selesai')

/* hasil:
Mulai belajar
Selesai
Mengunduh materi
*/