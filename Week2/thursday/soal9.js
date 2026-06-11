let hasilNilaiSantri = [78, 95, 62, 88, 70, 100];

function peringkat () {
    let urutan = [];
    let nilaiTertinggi3 = [];
    let nilaiTerendah2 = [];

    for (let i = 0; i < hasilNilaiSantri.length; i++) {
        urutan.push(hasilNilaiSantri[i]);
    }

    for (let i = 0; i < urutan.length; i++) {
        for (let j = i + 1; j < urutan.length; j++) {
            if (urutan[i] < urutan[j]) {
                let sementara = urutan[i];
                urutan[i] = urutan[j];
                urutan[j] = sementara;
            }
        }
    }

    for (let i = 0; i < 3; i++) {
        nilaiTertinggi3.push(urutan[i]);
    }

    for (let i = urutan.length - 1; i >= urutan.length - 2; i--) {
        nilaiTerendah2.push(urutan[i]);
    }

console.log("Urutan nilai:", urutan);
console.log("3 nilai tertinggi:", nilaiTertinggi3);
console.log("2 nilai terendah:", nilaiTerendah2);
}

peringkat ()
/* Hasil: Urutan nilai: [ 100, 95, 88, 78, 70, 62 ]
3 nilai tertinggi: [ 100, 95, 88 ]
2 nilai terendah: [ 62, 70 ]*/