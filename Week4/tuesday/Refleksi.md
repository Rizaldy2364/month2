# Pertanyaan Refleksi:

## Mengapa kode dipisahkan menjadi beberapa module?
**Kode dipisahkan menjadi beberapa module agar program lebih rapi, mudah dikelola, dan mudah dikembangkan.**

## Apa keuntungan menggunakan Event dibanding menjalankan function secara langsung?
**Menggunakan Event lebih fleksibel dibanding memanggil function secara langsung karena function hanya dijalankan ketika suatu kejadian (event) terjadi.**

## Bagaimana cara kerja sistem gacha yang kamu buat?
**Setelah rarity didapatkan, program akan mencari seluruh karakter yang memiliki rarity tersebut menggunakan method filter(). Kemudian salah satu karakter dipilih secara acak dari daftar tersebut dan ditampilkan ke halaman menggunakan DOM.Setiap kali pemain melakukan pull, statistik seperti total pull, jumlah Common, Rare, Epic, dan Legendary akan diperbarui secara otomatis. Untuk fitur Pull x10, proses gacha dijalankan sebanyak 10 kali dan seluruh hasil ditampilkan sekaligus. Tombol Reset digunakan untuk menghapus hasil pull dan mengembalikan statistik ke kondisi awal.**

## Fitur tambahan apa yang paling sulit dibuat dan mengapa?
**Saya tidak mengerjakan fitur bonus**