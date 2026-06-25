// Soal 7 — Data Kursus

function ambilKursus() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(["JavaScript Dasar", "React", "Node.js"]);
        }, 3000);
    });
}

async function tampilkanKursus() {
    const kursus = await ambilKursus();
    console.log("Daftar Kursus:");

    for (let item of kursus) {
        console.log( item);
    }
}

tampilkanKursus();

/* hasil:
Daftar Kursus:
JavaScript Dasar
React
Node.js
*/