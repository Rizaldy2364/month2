// Soal 1 — Sistem Seleksi Beasiswa Nasional

const peserta = [
  {
    nama: "Ari",
    tanggalLahir: "2007-03-15",
    nilai: [80, 90, 75],
    penghasilanOrtu: 3500000
  },
  {
    nama: "Bima",
    tanggalLahir: "2006-08-22",
    nilai: [60, 70, 85],
    penghasilanOrtu: 1500000
  },
  {
    nama: "Citra",
    tanggalLahir: "2007-01-10",
    nilai: [95, 88, 92],
    penghasilanOrtu: 7000000
  }
];

let infoPeserta = [...peserta];
let [ peserta1, peserta2, peserta3 ] = infoPeserta;

 function penerimaBeasiswa ( ) {
     let sekarang = new Date ();

     for ( let siswa of peserta) {

         const {nama,tanggalLahir,nilai,penghasilanOrtu} = siswa;

         // umur peserta

         let lahir = new Date (tanggalLahir)
         let umur =  sekarang.getFullYear() - lahir.getFullYear()
         console.log ( 'nama peserta:', nama + '.' + '\n' + 'umur:', umur + ".")

         // nilai rata2 peserta

         let penambahan = nilai[0] + nilai[1] + nilai[2];
         let rataRataNilai = ((penambahan / nilai.length).toFixed(2));
         console.log ( 'nilai rata-rata:', rataRataNilai)
         
         // pengkondisian antara mendapat beasiswa atau tidak

         if ( umur <= 25 && rataRataNilai >=80 && penghasilanOrtu <=5000000) {
            console.log ( nama, "medapatkan beasiswa karna memenuhi syarat")
            console.log ( '-----------------')
         } else {
            console.log ( nama, 'tidak mendapatkan beasiswa karna tidak memenuhi syarat')
            console.log ( '-----------------')
         }
     }
}


penerimaBeasiswa ( )

/* hasil:
nama peserta: Ari.
umur: 19.
nilai rata-rata: 81.67
Ari medapatkan beasiswa karna memenuhi syarat
-----------------
nama peserta: Bima.
umur: 20.
nilai rata-rata: 71.67
Bima tidak mendapatkan beasiswa karna tidak memenuhi syarat
-----------------
nama peserta: Citra.
umur: 19.
nilai rata-rata: 91.67
Citra tidak mendapatkan beasiswa karna tidak memenuhi syarat
*/