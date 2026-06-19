// Soal 4 – Upgrade Karakter

const karakter = {
    nama: "Citra",
    level: 10,
    attack: 100,
    defense: 80
};


console.log ( 'data awal karakter:', karakter)

const karakterUpgrade = {
    ...karakter,
    level : 11,
    attack : 120,
    defense : 90,
}

console.log ( 'data setelah karakter diupgrade:', karakterUpgrade)

/* hasil:
data awal karakter: { nama: 'Citra', level: 10, attack: 100, defense: 80 }
data setelah karakter diupgrade: { nama: 'Citra', level: 11, attack: 120, defense: 90 }
*/