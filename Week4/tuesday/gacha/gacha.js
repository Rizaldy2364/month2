import { characters } from "./data.js";
// buat acak karakter
function random () {
    const acak = Math.random () * 100;
    if ( acak < 60 ) return 'Common';
    if ( acak < 85 ) return 'Rare';
    if ( acak < 90 ) return 'Epic';
    return 'Legendary';
}
// buat pull 1x
export function pull () {
    const rarity = random ();
    const pool = characters.filter (
        char => char.rarity === rarity
    );

    const index = Math.floor(Math.random() * pool.length);
     return pool[index];
}
//buat pull 10x
export function pullTen () {
    const hasil = []
    for ( let i = 0; i < 10; i++) {
        hasil.push(pull())
    }
    return hasil;
}