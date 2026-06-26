# Rangkuman bab 21: Web API

## Apa itu Web API:
API adalah kependekan dari (Application Programming Interface), yaitu fitur bawaan browser yang dapat digunakan JavaScript untuk berinteraksi dengan browser maupun server, seperti mengambil data, menyimpan data, mengetahui lokasi pengguna, mengakses clipboard, dan mengatur navigasi halaman.

## Fetch API:
Digunakan untuk berkomunikasi dengan server melalui internet. Karena membutuhkan waktu, Fetch bersifat asynchronous dan mengembalikan Promise.
* **Metode HTTP yang didukung:**
1. GET: Mengambil data (default).
2. POST: Mengirimkan data baru.
3. PUT:	Memperbarui data secara keseluruhan.
4. PATCH: Memperbarui sebagian data.
5. DELETE: Menghapus data

## Web Storage API: 
Web Storage API menyediakan dua mekanisme penyimpanan data di sisi browser: localStorage dan sessionStorage. Keduanya menyimpan data dalam format teks (String).
* **Method penting:**
1. setItem(): menyimpan.
2. getItem(): membaca.
3. removeItem(): menghapus satu data.
4. clear(): menghapus semua data.
5. length: jumlah data.

* **catatan:** Karena Storage hanya menyimpan String, gunakan:JSON.stringify(object), Saat mengambil kembali: JSON.parse(string).

## Geolocation API:
Digunakan untuk mengetahui lokasi pengguna.
* **Methodnya:**
Method
1. navigator.geolocation.getCurrentPosition(): mengambil lokasi sekali.
2. navigator.geolocation.watchPosition(): memantau lokasi secara terus-menerus.
3. navigator.geolocation.clearWatch(): menghentikan pemantauan.

## History API:
 Digunakan untuk mengatur riwayat navigasi browser tanpa reload halaman.

* **Methodnya:**
1. history.pushState(): Menambah halaman baru ke history.
2. history.replaceState(): Mengganti history saat ini.
3. history.back(): Kembali.
4. history.forward(): Maju.
5. history.go(): Loncat beberapa langkah.
* **Event penting:** popstate: Terjadi ketika pengguna menekan tombol Back atau Forward.

## Clipboard API:
Digunakan untuk membaca atau menulis isi clipboard. method untuk menyalin: navigator.clipboard.writeText(). Membaca: navigator.clipboard.readText().

## Intersection Observer API:
Digunakan untuk mengetahui apakah suatu elemen sudah terlihat di layar (viewport). **Method utama:** observer.observe(element). **Properti penting:** entry.isIntersecting