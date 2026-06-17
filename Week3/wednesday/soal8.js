/* Soal 8 – Tebak Output

a : Script karna index 4 itu di S dan index 10 undefined. ( rumus slice: (awal,sebelum akhir)).
b : BelajarBelajar (karna repeat mengulang string sesuai dangan angka yg ditaruh dalam ()). 
c : 30 karna Number mengubah dalam () menjadi typeof number lalu ditambah 5.
d : 25 karna parseint hanya manjadikan angka bulat dalam string menjadi angka dan mengabaikan angka setelah .
e : 10.5 karna 10.45 toFixed(1)) hanya mengambil 1 angka setelah titik kalau ada lebih dari 1 dilihat angkanya misal 45 karna dibelakang 4 itu 5 maka 4 ditambah 1. ( kalau dibawah 5 dia tetap angka 4 )
*/

// a

console.log("JavaScript".slice(4, 10));

// b

console.log("Belajar".repeat(2));

// c

console.log(Number("25") + 5);

// d

console.log(parseInt("25.9"));

// e

console.log((10.456).toFixed(1));

/* hasil: 
Script
BelajarBelajar
30
25
10.5
*/