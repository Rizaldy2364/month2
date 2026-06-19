// Soal 1 – Profil Karakter Game

const hero = {
    nama: "GatotKaca",
    kelas: "Tank",
    level: 25,
    hp: 5000,
    mana: 800
};

const { nama, kelas, hp, level, mana: energi, guild = 'tanpa guild'} = hero;

console.log ( 'nama hero:', nama + '.' + '\n' +'kelas hero:', kelas + '.' + '\n' + 'level hero:', level + '.' + '\n' + 'hp hero:', hp + '.' + '\n' + 'mana hero:', energi + '.' + '\n' + 'guild:', guild)

/* hasil: 
nama hero: GatotKaca.
kelas hero: Tank.
level hero: 25.
hp hero: 5000.
mana hero: 800.
guild:tanpa guild
*/