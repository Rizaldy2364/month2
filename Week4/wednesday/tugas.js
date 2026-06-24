const siswa = [
    {
        id: 1,
        nama: "Ari",
        umur: 17,
        nilai: 85
    },
    {
        id: 2,
        nama: "Bima",
        umur: 18,
        nilai: 72
    },
    {
        id: 3,
        nama: "Citra",
        umur: 17,
        nilai: 95
    },
    {
        id: 4,
        nama: "Dewi",
        umur: 16,
        nilai: 68
    }
];

// Soal 1 – Menampilkan Data

for (let data of siswa) {
    console.log("Nama  :", data.nama);
    console.log("Umur  :", data.umur);
    console.log("Nilai :", data.nilai);
    console.log("--------------------");
}

/* hasil:
Nama  : Ari
Umur  : 17
Nilai : 85
--------------------
Nama  : Bima
Umur  : 18
Nilai : 72
--------------------
Nama  : Citra
Umur  : 17
Nilai : 95
--------------------
Nama  : Dewi
Umur  : 16
Nilai : 68
--------------------
*/

// Soal 2 – Analisis Nilai

let tertinggi = siswa[0];
let terendah = siswa[0];
let totalNilai = 0;

for (let data of siswa) {
    if (data.nilai > tertinggi.nilai) {
        tertinggi = data;
    }

    if (data.nilai < terendah.nilai) {
        terendah = data;
    }

    totalNilai += data.nilai;
}

let rataRata = totalNilai / siswa.length;

console.log("Nilai Tertinggi:");
console.log(tertinggi.nama, "-", tertinggi.nilai);

console.log("Nilai Terendah:");
console.log(terendah.nama, "-", terendah.nilai);

console.log("Rata-rata Nilai:");
console.log(rataRata);

/* hasil:
Nilai Tertinggi:
Citra - 95
Nilai Terendah:
Dewi - 68
Rata-rata Nilai:
80
*/

// Soal 3 – Menambah dan Mencari Data

siswa.push({
    id: 5,
    nama: "Eko",
    umur: 18,
    nilai: 90
});

function cariSiswa(nama) {
    for (let data of siswa) {
        if (data.nama === nama) {
            return data;
        }
    }

    return "Siswa tidak ditemukan";
}

console.log(cariSiswa("Eko"));
console.log(cariSiswa("Ari"));
console.log(cariSiswa("Joko"));

/* hasil:
{ id: 5, nama: 'Eko', umur: 18, nilai: 90 }
{ id: 1, nama: 'Ari', umur: 17, nilai: 85 }
Siswa tidak ditemukan
*/

// Soal 4 – Konversi JSON

const jsonString = JSON.stringify(siswa);

console.log("JSON String:");
console.log(jsonString);

const dataKembali = JSON.parse(jsonString);

console.log("Object JavaScript:");
console.log(dataKembali);
console.log(typeof jsonString); 
console.log(typeof dataKembali); 

/* hasil:
JSON String:
[{"id":1,"nama":"Ari","umur":17,"nilai":85},{"id":2,"nama":"Bima","umur":18,"nilai":72},{"id":3,"nama":"Citra","umur":17,"nilai":95},{"id":4,"nama":"Dewi","umur":16,"nilai":68},{"id":5,"nama":"Eko","umur":18,"nilai":90}]
Object JavaScript:
[
  { id: 1, nama: 'Ari', umur: 17, nilai: 85 },
  { id: 2, nama: 'Bima', umur: 18, nilai: 72 },
  { id: 3, nama: 'Citra', umur: 17, nilai: 95 },
  { id: 4, nama: 'Dewi', umur: 16, nilai: 68 },
  { id: 5, nama: 'Eko', umur: 18, nilai: 90 }
]
string
object
*/

// Soal 5 – Sistem Ranking

const ranking = [...siswa];

ranking.sort(function(a, b) {
    return b.nilai - a.nilai;
});

for (let i = 0; i < ranking.length; i++) {
    console.log( "Peringkat", i + 1, ":", ranking[i].nama, ranking[i].nilai );
}

/* hasil:
Peringkat 1 : Citra 95
Peringkat 2 : Eko 90
Peringkat 3 : Ari 85
Peringkat 4 : Bima 72
Peringkat 5 : Dewi 68
*/