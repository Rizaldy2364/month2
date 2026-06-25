// Soal 11 — Simulasi Login

function login(username, password) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const database = [{username: "budi", password: "123", nama: "Budi"}];
            const user = database.find(function (item) {
                return item.username === username &&
                       item.password === password;
            });
            if (user) {
                resolve(user);
            } else {
                reject("Username atau password salah");
            }
        }, 2000);
    });
}

async function masuk() {
    try {
        const user = await login("budi", "1234");
        console.log("Selamat datang,", user.nama);
    } catch (error) {
        console.log(error);
    }
}

masuk();
/* hasil:
jika berhasil:
Selamat datang, Budi

jika gagal:
Username atau password salah
*/