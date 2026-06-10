// Tugas soal 1-Tebak Hasilnya
// prediksi hasil nilai : 1.20. 2.30. 3.13. 4.4. 5.1.
console.log ( 10 + 5 * 2 );
console.log ( (10 + 5) * 2 );
console.log ( 20 / 2 + 3 );
console.log ( 20 / (2 + 3) );
console.log ( 10 % 3 );
// hasil: 1.20. 2.30. 3.13. 4.4. 5.1.

// Tugas soal 2-Mana yang Benar?
let a = 15;
let b = 20;
let c = 15;

console.log ( a == b );
console.log ( a == c );
console.log ( a != b );
console.log ( a > b );
console.log ( a <= c );
// Penjelasan: 1.false, dikarenakan 15 sama 20 itu beda. 2.tru, karna 15 sama 15 itu sama. 3.tru, karna 15 sama 20 itu beda. 4.false, karna 15 itu lebih rendah dari 20. 5.true, karna 15 tidak lebih rendah dari 15 tapi sama

// Tugas soal 3 - Gerbang Akses
let umur = 18;
let memilikiTiket = true;
console.log ( umur >= 17 && memilikiTiket)
// hasilnya true, karena umur sudah lebih dari 17 dan memiliki tiket.

// Tugas soal 4-Hak Istimewa
let admin = false;
let moderator = true;

console.log ( admin || moderator );
// hasilnya true, karena moderator bernilai true walaupun admin bernilai false.

// tugas soal 5-Alarm Sistem
let listrikMati = false;
let internetPutus = true;

console.log ( listrikMati || internetPutus );
// hasilnya true, karena internet putus bernilai true walaupun listrik mati bernilai false.

// tugas soal 6-Analisis Nilai Boolean
// prediksi hasil nilai : 1.true. 2.false 3.true. 4.false 5.false 6.true 7.true
console.log ( true && true );
console.log ( true && false );
console.log ( false || true );
console.log ( false || false );
console.log ( !true );
console.log ( !false );
console.log ( !(true && false) );
// hasil: 1.true. 2.false 3.true. 4.false 5.false 6.true 7.true

// Tugas soal 7-Detektif Logika
let x = 8;
let y = 12;
let z = 15;

console.log ( x < y && y < z); 
console.log ( !(x < y && y < z) );
// a.true, karna 8 dibawah 12 dan 12 dibawah 15. b.false, karna dalam kurung true lalu ada ekspresi !

// Tugas soal 8-Tantangan Kombinasi
let nilai = 85;
let kehadiran = 90;
let tugas = 70;

console.log ( nilai >= 60 && kehadiran >= 80 && tugas >= 70);
console.log ( !nilai && kehadiran && tugas );
console.log ( nilai >= 60 || kehadiran >= 80 || tugas >= 80);
// hasil: 1.true 2.false 3.true

// Tugas soal 9-Reverse Engineering
// Jawaban 1
let a = 14;
let b = 12;
let c = 19;

console.log ( (a > b) && (c > a) );
// hasilnya true 

// Jawaban 2
let a = 4;
let b = 15;
let c = 18;

console.log ( (a > b) && (c > a) );
// hasilnya false 

// Tugas 10-Puzzle Operator
// Jawaban 1
let a = 6;
let b = 10;

console.log (a * 2 > 10) && (b % 2 == 0);
// hasilnya true

// Jawanban 2
let a = 50;
let b = 100;

console.log (a * 2 > 10) && (b % 2 == 0);
// // hasilnya true

// Jawaban 3
let a = 98;
let b = 50;

console.log (a * 2 > 10) && (b % 2 == 0);
// hasilnya true

