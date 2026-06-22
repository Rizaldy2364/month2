# Rangkuman bab 16 dan 18

## Rangkuman bab ke 16: JS DOM (Manipulasi DOM & DOM API).

* **Apa itu DOM:** DOM adalah singkatan dari ( Document Object Model ) yaitu jembatan antara HTML dan JavaScript, sehingga JavaScript bisa membaca, mengubah, menambah, atau menghapus isi halaman web secara dinamis.
* **Menyeleksi Elemen HTML:** Langkah pertama sebelum memanipulasi elemen adalah menemukannya. JavaScript menyediakan beberapa method untuk ini.

* **Konsep / Method	dan fungsinya:**
1. document.getElementById(id) : Mengembalikan satu elemen yang memiliki atribut id yang sesuai.
2. querySelector(selektor): Menyeleksi elemen pertama yang cocok dengan selektor CSS.
3. document.querySelectorAll(css): Menyeleksi semua elemen yang cocok.
4. element.textContent: Membaca atau mengubah teks tanpa mengubah tag HTML.
5. element.innerHTML: Membaca atau mengubah konten termasuk tag HTML.
6. element.setAttribute(attr, val): Mengubah nilai atribut elemen.
7. element.style.properti: element.style.properti.
8. element.classList.add(cls): Menambahkan class CSS.
9. element.classList.remove(cls): Menghapus class CSS.
10. element.classList.toggle(cls): element.classList.toggle(cls).
11. element.classList.contains(cls): Memeriksa apakah class ada.
12. document.createElement(tag): Membuat elemen HTML baru.
13. parent.appendChild(child): Menyisipkan elemen sebagai anak terakhir.
14. element.remove(): Menghapus elemen dari DOM.

## Rangkuman bab ke 17: JS Events.

* **Apa itu JS events:** suatu kejadian atau aksi yang terjadi pada halaman web seperti menekan tombol atau interaksi yang lain. Mekanisme untuk mendeteksi dan merespons aksi pengguna ini disebut Event Handling ( jembatan antara DOM dan interaksi pengguna ).

* ** Cara memasang Event Listener:** Gunakan addEventListener() untuk mendeteksi event (interaksi) pada elemen HTML.Method ini dipasang pada sebuah elemen dan menerima dua argumen:   
1. Nama event / jenis aksi yang ingin dideteksi.
2. Callback function — fungsi yang akan dijalankan saat event tersebut terjadi.

* **Jenis-Jenis Event yang Umum Digunakan:**
* **A. Event Mouse:**
1. click: Saat elemen diklik (tekan dan lepas).
2. dblclick: Saat elemen diklik dua kali berturut-turut.
3. mouseenter: Saat kursor memasuki area elemen.
4. mouseleave: Saat kursor meninggalkan area elemen.
5. mousemove: Setiap kali kursor bergerak di atas elemen.
* **B. Event Keyboard:**
6. keydown: Saat tombol keyboard ditekan.
7. keyup: Saat tombol keyboard dilepas.
* **C. Event Form:**
8. input: Setiap kali nilai input berubah (real-time).
9. change: Saat nilai input berubah dan elemen kehilangan fokus.
10. submit: Saat formulir dikirimkan.
11. focus: Saat elemen mendapat fokus
12. blur: Saat elemen kehilangan fokus
* **D. Event Halaman:**
13. load: Saat seluruh halaman selesai dimuat.
14. DOMContentLoaded: Saat struktur DOM selesai dibangun (lebih cepat dari load).
15. scroll: Saat halaman atau elemen di-scroll.
16. resize: Saat ukuran jendela browser berubah.

* **Apa itu Event Object:** objek yang otomatis dikirim oleh JavaScript saat sebuah event terjadi. Objek ini berisi informasi lengkap tentang event tersebut, Object ini diteruskan ke callback function sebagai argumen pertama, biasanya diberi nama e atau event.

* **Properti / Method Event Object yang umum digunakan:**
1. e.type: Nama event yang terjadi ("click", "input", dll.).
2. e.target: Elemen yang memicu event.
3. e.target.value: Nilai input pada elemen form.
4. e.key: Nama tombol keyboard yang ditekan.
5. e.clientX / e.clientY: Koordinat kursor saat event terjadi.
6. e.preventDefault(): Mencegah perilaku bawaan browser.

* ** Apa itu preventDefault() — Mencegah Perilaku Bawaan Browser:** method pada Event Object yang digunakan untuk mencegah aksi bawaan (default) browser saat suatu event terjadi.
* **Beberapa elemen HTML memiliki perilaku bawaan yang terjadi saat di-interaksi. seperti:**
1. Elemen ( a href="..." ) akan berpindah halaman saat diklik.
2. Elemen ( form ) akan memuat ulang (refresh) halaman saat formulir dikirimkan.
* Dalam pengembangan web modern, kita sering perlu mencegah perilaku ini agar dapat memproses data secara dinamis di JavaScript tanpa reload halaman. Gunakan e.preventDefault().

* **Apa itu Event Delegation:** teknik menangani event pada elemen induk (parent) untuk mengontrol event dari elemen anak (child). **caranya adalah: Daripada memasang event listener ke setiap elemen anak, kita cukup memasangnya pada parent.**

## Rangkuman bab 18: Modularisasi JavaScript.

* **Apa itu modularisasi javascript:** teknik memecah program besar menjadi beberapa file atau modul kecil yang memiliki tugas tertentu. Tujuannya agar kode lebih rapi, mudah dibaca, mudah dirawat, dan bisa digunakan kembali.

* **Konsep Export dan Import:** export dan import digunakan untuk berbagi kode antar file (modul). **export → mengirim atau menyediakan fungsi, variabel, atau class dari suatu file.** sedangkan **import → mengambil dan menggunakan yang telah di-export dari file lain.**

* **Named Export:** cara mengekspor satu atau lebih variabel, fungsi, atau class dengan nama tertentu dari sebuah modul. Karena memiliki nama, saat mengimpor kita harus menyebutkan nama tersebut menggunakan {}.

* **Fungsi kata kunci ( as ):** digunakan untuk mengganti nama saat import agar lebih pendek, lebih jelas, atau menghindari konflik nama.

* **Fungsi import * as :** Mengimport seluruh isi file sekaligus dalam satu namespace.

* **Apa itu Default Export:** Gunakan Default Export ketika sebuah file memang dirancang untuk mengekspor satu hal utama saja. Keuntungannya: saat mengimport, tidak perlu kurung kurawal, dan dapat diberi nama apa saja. **Setiap file hanya boleh memiliki satu export default.**

* **Cara mengaktifkan modul di HTML:** Agar import dan export bisa digunakan di browser, file JavaScript harus dijalankan sebagai module.Caranya dengan menambahkan atribut type="module" pada tag <script>.