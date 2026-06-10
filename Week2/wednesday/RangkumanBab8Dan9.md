# Rngkuman bab 8
## Apa itu array di JavaScipt dan penjelasan Array method
* **Apa itu Array:** Array adalah tipe data yang digunakan untuk menyimpan banyak nilai dalam satu variabel. Tanpa array kita harus membuat variabel secara terpisah, pendekatan yang tidak praktis dan sulit dikelola.
* **Contoh dengan Array: let siswa = ["rizaldy", "faiz", "hilmy"];**
* **Contoh tanpa Array: let siswa1 = "rizaldy"; let siswa2 = "faiz" ; let siswa3 = "hilmy" ;**
* **Apa itu method:** Method adalah fungsi yang dimiliki oleh sebuah objek atau tipe data dan digunakan untuk melakukan suatu operasi atau tindakan pada data tersebut.
* **Letaknya:** Method ditulis setelah nama objek/variabel, lalu diikuti tanda titik (.) dan nama method.
* **Contohnya:** console.log(nama.length());
* **Penjelasan Array Method:** 
1. .length: Mengembalikan jumlah elemen.
2. .push(nilai): Menambahkan elemen di akhir.
3. .unshift(nilai): Menambahkan elemen di awal.
4. .pop(): Menghapus dan mengembalikan elemen terakhir.
5. .shift(): Menghapus dan mengembalikan elemen pertama.
6. .indexOf(nilai): Mencari indeks elemen pertama yang cocok.
7. .includes(nilai): Memeriksa apakah elemen ada dalam array.
8. .splice(i, n): Menghapus, menyisipkan, atau mengganti elemen.
9. .slice(i, j): Mengembalikan salinan sebagian array.

## JavaScript Function:
* **Apa itu Function:** Function adalah salah satu konsep terpenting dalam JavaScript. Dengan membungkus logika ke dalam fungsi, kamu dapat membangun program yang lebih terstruktur, mudah dibaca, dan mudah dipelihara. Arrow Function memperkuat kemampuan ini dengan sintaks yang lebih ringkas dan modern.
* **Konsep-konsepnya:**
1. Function Declaration: Mendefinisikan fungsi dengan kata kunci function. **contoh:** function namaFunction() { console.log ('hallo world') } namaFunction ();
2. Function Expression: Menyimpan fungsi ke dalam variabel. **contoh:** const salam = function() ...
3. Arrow Function: menulis function dengan sintaks yang lebih singkat menggunakan tanda panah =>. **Contoh:** const namaFunction = (parameter) => ...
4. Parameter: variabel yang ditulis di dalam tanda kurung () saat membuat function. Parameter digunakan untuk menerima data yang dikirim ke dalam function. **Contoh:** function namaFunction(parameter) ...
5. Argumen: Nilai nyata yang diberikan saat fungsi dipanggil. **Contoh:** namaFunction(argumen);.
6. return : Mengembalikan nilai dari fungsi ke pemanggil; menghentikan eksekusi fungsi.
7. Nilai default: Nilai parameter yang digunakan jika argumen tidak diberikan.