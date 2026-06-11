let daftarBelanja =[ "beras", "telur", "gula",];
daftarBelanja.push ( "minyak" );
daftarBelanja.unshift ( "garam" );
daftarBelanja.pop ();

console.log ( "Daftar belanjaan terbaru: " + daftarBelanja ); 
console.log ( "Jumlah belanjaan yg tersisa: " + daftarBelanja.length );
// Hasil : Daftar belanjaan terbaru: garam,beras,telur,gula.
// Jumlah belanjaan yg tersisa: 4.