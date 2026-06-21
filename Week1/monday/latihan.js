function siawa (nama,umur,jurusan) {
    let mahasiswa = {}
    mahasiswa.nama = nama;
    mahasiswa.umur = umur;
    mahasiswa.jurusan = jurusan;
    return mahasiswa;
}


console.log ( siawa ( 'rizaldy',20,'informatika') )

function siswa (nama,jurusan,umur) {
    this.nama = nama 
    this.umur = umur
    this.jurusan = jurusan

}

console.log ( new siswa ('rizaldi', 'informatika', 20))