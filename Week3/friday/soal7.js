// Soal 7 – Merge Data Pengguna

const akun = {
    nama: "Fikri",
    email: "fikri@email.com"
};

const profil = {
    umur: 20,
    kota: "Bandung"
};

const dataDiri = {...akun,...profil};

console.log ( 'infirmasi mentor kelas a24:', dataDiri)

/* hasil:
infirmasi mentor kelas a24: { nama: 'Fikri', email: 'fikri@email.com', umur: 20, kota: 'Bandung' }
*/