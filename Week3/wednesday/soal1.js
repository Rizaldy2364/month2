// Soal 1 – Sensor Nama Pengguna

const username = "   fIkRi_bAihAQi73   ";

console.log ('nama awal: ' + username);

function SensorNamaPengguna () {
    
    const spasi = username.trim(); 
    const kecil = spasi.toLocaleLowerCase();
    const ubah = kecil.replace("_","-");

console.log ( 'nama yg sudah diubah: ' +ubah + ' ' + "\n" + 'total karakter: ' + ubah.length);
};

SensorNamaPengguna();

/* hasil: 
nama awal:    fIkRi_bAihAQi73   
nama yg sudah diubah: fikri-baihaqi73 
total karakter: 15
*/