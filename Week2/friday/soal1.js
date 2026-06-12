let mahasiswa = {
    nama : 'rizaldy',
    nomorInduk : 12345678,
    jurusan : 'programmer',
    semester : 1,
    perlenalan : function () {
        console.log ( "halo, nama saya " + mahasiswa.nama + ',' + "NiM saya " + mahasiswa.nomorInduk + ',' + "saya dari jurusan " +  mahasiswa.jurusan + ' ' + "semester " + mahasiswa.semester);
    }
}

mahasiswa.perlenalan ()
/* Hasil : 
halo, nama saya rizaldy,NiM saya 12345678,saya dari jurusan programmer semester 1 
*/