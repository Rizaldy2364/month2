// Soal 11 – Analisis Tim

const tim = [
    {
        nama: "Ari",
        role: "Tank"
    },
    {
        nama: "Bima",
        role: "Mage"
    },
    {
        nama: "Citra",
        role: "Support"
    }
];

const [ nama1, role, nama2] = tim;

console.log ( 'nama team pertama:', nama1.nama + '.')
console.log ( 'role team kedua:', role.role + '.')
console.log ( 'nama team ke tiga:', nama2.nama);

/* hasil:
nama pertama: Ari.
role team kedua: Mage.
nama team ke tiga: Citra
*/