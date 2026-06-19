// Soal 8 – Update Profil

const user = {
    nama: "Budi",
    umur: 18,
    kota: "Jakarta"
};

const perubahan = {
    ...user,
    umur : 19,
    kota : 'Bandung',
};
console.log ( 'informasi awal user:', user )
console.log ( 'informasi baru user:', perubahan)

/* hasil:
informasi awal user: { nama: 'Budi', umur: 18, kota: 'Jakarta' }
informasi baru user: { nama: 'Budi', umur: 19, kota: 'Bandung' }
*/