// Soal 5 – Gabung Tim

const timMerah = ["Ari", "Bima"];
const timBiru = ["Citra", "Dewi"];

const teamGabungan = [ ...timMerah, 'Kapten', ...timBiru]

console.log ( 'full team:', teamGabungan.join(', '))

/* hasil:
full team: Ari, Bima, Kapten, Citra, Dewi
*/