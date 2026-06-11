let barang = [
    { nama: "Pensil", harga: 3000, jumlah: 2 },
    { nama: "Buku", harga: 5000, jumlah: 3 },
    { nama: "Penghapus", harga: 2000, jumlah: 1 }
];

function hitungBelanja() {
    let totalBelanja = 0;
    let barangTermahal = "";
    let subtotalTermahal = 0;

    console.log("=== STRUK BELANJA ===");

    for (let i = 0; i < barang.length; i++) {
        let subtotal = barang[i].harga * barang[i].jumlah;

        console.log(
            barang[i].nama +
            " | Harga: Rp" + barang[i].harga +
            " | Jumlah: " + barang[i].jumlah +
            " | Subtotal: Rp" + subtotal
        );

        totalBelanja += subtotal;

        if (subtotal > subtotalTermahal) {
            subtotalTermahal = subtotal;
            barangTermahal = barang[i].nama;
        }
    }

    console.log("====================");
    console.log("Total Belanja: Rp" + totalBelanja);
    console.log("Barang dengan subtotal paling mahal: " + barangTermahal + " (Rp" + subtotalTermahal + ")");
}

hitungBelanja();
/* Hasil: === STRUK BELANJA ===
Pensil | Harga: Rp3000 | Jumlah: 2 | Subtotal: Rp6000
Buku | Harga: Rp5000 | Jumlah: 3 | Subtotal: Rp15000
Penghapus | Harga: Rp2000 | Jumlah: 1 | Subtotal: Rp2000
====================
Total Belanja: Rp23000
Barang dengan subtotal paling mahal: Buku (Rp15000)*/