// Soal 14 — Sistem Kadaluarsa Produk

const produk = [
    {
        nama: "biskuat",
        kadaluarsa: "2027-01-01"
    },
    {
        nama: "Roti",
        kadaluarsa: "2025-03-10"
    },
    {
        nama: "Yogurt",
        kadaluarsa: "2023-07-01"
    }
];

function cekProduk() {
    const hariIni = new Date();

    for (let item of produk) {
        const tanggalKadaluarsa = new Date(item.kadaluarsa);

        const selisihMs = tanggalKadaluarsa - hariIni;
        const sisaHari = Math.ceil(selisihMs / (1000 * 60 * 60 * 24));

        console.log("Produk:", item.nama);

        if (sisaHari < 0) {
            console.log("Status: Sudah kadaluarsa");
        } else {
            console.log("Status: Belum kadaluarsa");
            console.log("Sisa hari:", sisaHari, "hari");
        }

        console.log("----------------");
    }
}

cekProduk();

/* hasil: 
Produk: biskuat
Status: Belum kadaluarsa
Sisa hari: 197 hari
----------------
Produk: Roti
Status: Sudah kadaluarsa
----------------
Produk: Yogurt
Status: Sudah kadaluarsa
----------------
*/