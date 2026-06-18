// Soal 5 — Eksperimen Function

//Program A
nama() // bisa diakses sebelum function dibuat karna javascript mengangkat seluruh isi function ke atas sebelum kode dijalankan.

function nama() {
    let name = 'rizaldy';
    console.log ( name )
}

//Program B
namaFunction () // hasilnya eror karna functionnya berbentuk expression yg menggunkan const dan const tidak bisa dihoisting

const namaFunction = function() {
    let umur = 20;
    console.log ( umur )
}
