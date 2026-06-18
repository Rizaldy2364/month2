// Soal 15 — Sistem Parkir Pintar

function hitungParkir() {
    const masuk = new Date("2026-06-19T08:00:00");
    const keluar = new Date("2026-06-19T13:00:00");

    const lamaParkir = Math.ceil((keluar - masuk) / (1000 * 60 * 60));

    let biaya;

    if (lamaParkir <= 2) {
        biaya = lamaParkir * 3000;
    } else if (lamaParkir <= 11) {
        biaya = (2 * 3000) + ((lamaParkir - 2) * 2000);
    } else {
        biaya = 25000;
    }

    console.log("Lama parkir:", lamaParkir, "jam");
    console.log("Total biaya: Rp" + biaya);
}

hitungParkir();

/* hasil: 
Lama parkir: 5 jam
Total biaya: Rp12000
*/