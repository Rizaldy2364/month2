// Soal 6 – Sistem Inventaris

const inventoryAwal = [
    "Pedang",
    "Perisai",
    "Potion"
];

const inventoryBaru = [...inventoryAwal, 'Armor', 'Elixir'];

console.log ( 'inventory lama:', inventoryAwal.join(', '))
console.log ( 'inventori baru:', inventoryBaru.join(', '))

/* hasil:
inventory lama: Pedang, Perisai, Potion
inventori baru: Pedang, Perisai, Potion, Armor, Elixir
*/