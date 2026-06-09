// Tugas soal 1-Mesin Tiket Parkir
let lamaParkir = 5;
let biaya;

if (lamaParkir <= 2) {
    biaya = lamaParkir * 3000;
} else if (lamaParkir > 2 && lamaParkir <= 11) {
    biaya = (2 * 3000) + ((lamaParkir - 2) * 2000);
} else {
    biaya = 25000;
}

console.log("Lama parkir:", lamaParkir, "jam");
console.log("Total biaya: Rp" + biaya);
// Hasil:
// Lama parkir: 133 jam
// Total biaya: Rp25000
// Lama parkir: 1 jam
// Total biaya: Rp3000
// Lama parkir: 5 jam
// Total biaya: Rp12000

// Tugas soal 2-Tebak Pola
for (let i = 1; i <= 5; i++) {
    let hasil = "";

    for (let j = 1; j <= i; j++) {
        hasil += j ;
    }

    console.log(hasil);
}
// Hasil:
// 1
// 12
// 123
// 1234
// 12345

// Tugas soal 3-ATM Mini
let saldo = 100000;

const transaksi = [
    { jenis: "tarik", jumlah: 20000 },
    { jenis: "setor", jumlah: 50000 },
    { jenis: "tarik", jumlah: 30000 },
    { jenis: "tarik", jumlah: 130000}
];

for (let i = 0; i < transaksi.length; i++) {
    const t = transaksi[i];

    if (t.jenis === "setor") {
        saldo += t.jumlah;
        console.log(`Setor Rp50000 berhasil.`);
    } else if (t.jenis === "tarik") {
        if (saldo >= t.jumlah) {
            saldo -= t.jumlah;
            console.log(`Tarik Rp${t.jumlah} berhasil.`);
        } else {
            console.log(`Tarik Rp${t.jumlah} gagal. Saldo tidak mencukupi.`);
        }
    }

    console.log(`Saldo saat ini: Rp${saldo}`);
}
// Hasil:
// Setor Rp50000 berhasil.
// Saldo saat ini: Rp150000
// Tarik Rp30000 berhasil.
// Saldo saat ini: Rp120000
// Tarik Rp130000 gagal. Saldo tidak mencukupi.
// Saldo saat ini: Rp120000

// Tugas soal 4-FizzBuzz Modifikasi
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
// Hasil:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// 31
// 32
// Fizz
// 34
// Buzz
// Fizz
// 37
// 38
// Fizz
// Buzz
// 41
// Fizz
// 43
// 44
// FizzBuzz
// 46
// 47
// Fizz
// 49
// Buzz

// Tugas soal 5-Password Validator
let password = "Rizal40";

let adaAngka = false;
let adaHuruf = false;

for (let i = 0; i < password.length; i++) {
    let karakter = password[i];

    if (karakter >= '0' && karakter <= '9') {
        adaAngka = true;
    }

    if (
        (karakter >= 'A' && karakter <= 'Z') ||
        (karakter >= 'a' && karakter <= 'z')
    ) {
        adaHuruf = true;
    }
}

if (password.length >= 8 && adaAngka && adaHuruf) {
    console.log("Password valid");
} else {
    console.log("Password tidak valid");
}
// Hasil:
// pass 1: rizaldy8=valid,karna ada angka sama huuf dan 8 karakter
// pass 2: rizaldy=tidak valid,karna tidak ada angka
// pass 3: 12345678=tidak valid,karna tidak ada huruf
// pass 4: rizal40=tidak valid,karna kurang dari 8 karakter walaupun ada angka sama huruf

// Tugas soal 6- Tebak Angka Tanpa Input
let angkaRahasia = 27;
let percobaan = 0;

for (let i = 1; i <= 100; i++) {
    percobaan++;

    if (i === angkaRahasia) {
        console.log("Angka ditemukan:", i);
        console.log("Jumlah percobaan:", percobaan);
    }
}
// Hasil:
// Angka ditemukan: 27
// Jumlah percobaan: 27

// Tugas soal 7-Kasir Diskon
let daftarBelanja = [80000, 120000, 275000, 600000];

for (let i = 0; i < daftarBelanja.length; i++) {
    let belanja = daftarBelanja[i];
    let diskon = 0;

    if (belanja >= 500000) {
        diskon = 20;
    } else if (belanja >= 250000) {
        diskon = 10;
    } else if (belanja >= 100000) {
        diskon = 5;
    }

    let jumlahDiskon = belanja * diskon / 100;
    let totalBayar = belanja - jumlahDiskon;

    console.log("Belanja: Rp" + belanja);
    console.log("Diskon: " + diskon + "%");
    console.log("Total Bayar: Rp" + totalBayar);
}
// Hasil:
// Belanja: Rp80000
// Diskon: 0%
// Total Bayar: Rp80000
// Belanja: Rp120000
// Diskon: 5%
// Total Bayar: Rp114000
// Belanja: Rp275000
// Diskon: 10%
// Total Bayar: Rp247500
// Belanja: Rp600000
// Diskon: 20%
// Total Bayar: Rp480000

// Tugas soal 8-Analisis Nilai Siswa
let nilai = [90, 75, 60, 85, 40, 100, 70];

let jumlahSiswa = nilai.length;
let nilaiTertinggi = nilai[0];
let nilaiTerendah = nilai[0];
let total = 0;
let lulus = 0;
let tidakLulus = 0;

for (let i = 0; i < nilai.length; i++) {
    total += nilai[i];

    if (nilai[i] > nilaiTertinggi) {
        nilaiTertinggi = nilai[i];
    }

    if (nilai[i] < nilaiTerendah) {
        nilaiTerendah = nilai[i];
    }

    if (nilai[i] >= 75) {
        lulus++;
    } else {
        tidakLulus++;
    }
}

let rataRata = total / jumlahSiswa;

console.log("Jumlah siswa:", jumlahSiswa);
console.log("Nilai tertinggi:", nilaiTertinggi);
console.log("Nilai terendah:", nilaiTerendah);
console.log("Rata-rata nilai:", rataRata);
console.log("Jumlah lulus:", lulus);
console.log("Jumlah tidak lulus:", tidakLulus);
// Hasil:
// Jumlah siswa: 7
// Nilai tertinggi: 100
// Nilai terendah: 40
// Rata-rata nilai: 74.28571428571429
// Jumlah lulus: 4
// Jumlah tidak lulus: 3

// Tugas soal 9-Puzzle Pola
let pola = [3, 2, 1, 2, 1];

for (let i = 0; i < pola.length; i++) {
    let hasil = "";

    for (let j = 0; j < pola[i]; j++) {
        hasil += "*";
    }

    console.log(hasil);
}
// Hasil:
// ***
// **
// *
// **
// *

// Tugas soal 10-Tantangan Logika
let jumlahSpesial = 0;

for (let i = 1; i <= 100; i++) {
    if ((i % 2 === 0 && i % 4 !== 0) || (i % 7 === 0)) {
        console.log(i);
        jumlahSpesial++;
    }
}

console.log("Jumlah bilangan spesial:", jumlahSpesial);
// Hasil:
// 2
// 6
// 7
// 10
// 14
// 18
// 21
// 22
// 26
// 28
// 30
// 34
// 35
// 38
// 42
// 46
// 49
// 50
// 54
// 56
// 58
// 62
// 63
// 66
// 70
// 74
// 77
// 78
// 82
// 84
// 86
// 90
// 91
// 94
// 98
// Jumlah bilangan spesial: 35