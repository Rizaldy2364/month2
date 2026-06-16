# Rangkuman bab 2 sampai bab 11

## Rangkuman bab 2:
* **Apa itu syntax:** Syntax adalah Aturan tata bahasa yang harus diikuti agar kode dapat dipahami oleh JavaScript Engine. *contoh*: console.log ( aturannya harus menulis setelah consol (.) bukan koma karna aturannya harus pake (.)).
* **Apa itu statement:** Instruksi lengkap yang memerintahkan komputer melakukan sebuah tindakan. *contoh*: console.log ( 'hello world' ); ( ini adalah bentuk perintah kepada komputer untuk mencetak kata (hello world) di terminal kita).
* **Apa itu Expression:** potongan kode dalam JavaScript yang akan dijalankan ole komputer dan menghasilkan sebuah nilai (value). *contoh*: 3 + 5 ( ini adalah bentuk expresion aritmatika yg hasilnya adalah 8).
* **Komentar dalam JS:** komentar gunanya jika kita menulis banyak baris kode lalu menulis dalam komentar apa yg kita maksud dari menulis kode tsbt agar yg menulis sama orang lain tau maksud kode tersebut ditulis. *bentuk menulis komentar ada 2 :*
1. jika komentarnya hanya satu baris maka sebelum menulis pake tanda ( // ).** *contoh:* // saya membuat looping angka disini.
2. jika komentarnya banyak ( lebih dari satu baris ) maka menggunakan tanda ( /* ).** sebagai pembuka dan ( */ ) sebagai penutup komentar. *contohnya:* ( tanya google).

## Rangkuman bab 3:
* **Apa itu variable:** Wadah untuk menyimpan data sementara di dalam memori program. *contoh:* let apel = 10; ( apel disini sebagai variable yg nilainya 10).
* **Peraturan dalam penulisan variabel:**
1. harus dalam bentuk satu kata. 
2. tidak boleh pake spasi. 
3. tidak bisa menggunakan simbol kecuali ( _ ) sama ( $ ). 
4. tidak boleh didahului angka kecuali angka tersebut berada di tengah kata atau akhir kata. 
* *dianjurkan menulis variabel dalam bentuk camelCase, dan penamaan yang masuk akal.*
* **Cara mendeklarasikan variable adalah:** dengan menggunakan 3 kata kunci ini: 
1. var : kata kunci ini sudah ditinggal sejak terbitnya kata kunci ( let ) dan ( const ) karna seringnya memunculkan bug. yaitu: **1.** Tidak memiliki block scope ( tanda kurung {} ) jadi dia dapat diakses meskipun diluar block scope ( tanda kurung {} ). **2.** Dapat dideklarasikan ulang tanpa peringatan error.
2. let : Variabel yang Dapat Diubah, systax ini digunakan jika nilai variabel tersebut berpotensi berubah di kemudian hari.
3. const : Variabel yang Tidak Dapat Diubah, systax ini digunakan jika variabel itu nilainya bersifat tetap dan tidak boleh diubah setelah dideklarasikan pertama kali. jika tetap ingin mengubahnya maka akan menghasilkan eror.

## Rangkuman bab 4:
* **Apa itu type data:** Tipe data (data type) adalah jenis atau kategori dari sebuah nilai (value) yang menentukan data seperti apa yang disimpan dalam sebuah variabel dan bagaimana data tersebut dapat diproses oleh JavaScript.
* **Jenis-jenis Data Type di JavaScript:**
1. String: tipe data yang digunakan untuk menyimpan teks atau kumpulan karakter. dan syaratnya adalah harus meletakkan nilainya dengan menggunakan tanda kutip satu ( '' ) atau kutip 2 ( "" ).
2. Number: tipe data untuk menyimpan angka, baik bilangan bulat maupun desimal.
3. Boolean:  tipe data yang hanya memiliki dua nilai: 1.true. 2.false.
4. Undefined berarti sebuah variabel sudah dibuat, tetapi belum diberi nilai. *contoh:* let apple;.
5. Null digunakan untuk menunjukkan bahwa suatu variabel sengaja dikosongkan atau tidak memiliki nilai. *contoh:* let apple = null;.
6. Array: tipe data khusus untuk menyimpan banyak nilai dalam satu variabel dengan meletakkan nilainya dalam tanda ( [] ) dan setiap nilainya dipisah dengan ( , ).
7. Object: tipe data yang digunakan untuk menyimpan kumpulan data dalam bentuk pasangan key dan value, 
8. Symbol: tipe data yang digunakan untuk membuat nilai yang unik.
9. BigInt digunakan untuk menyimpan angka yang sangat besar melebihi batas Number.

## Rangkuman bab 5:
* **Apa itu operator:** simbol atau tanda khusus dalam JavaScript yang digunakan untuk melakukan operasi terhadap suatu nilai (operand) sehingga menghasilkan nilai baru.
* **Macam-macam operator:**
1. Operator Aritmatika: digunakan untuk melakukan operasi perhitungan matematika, *simbolnya:* *  /  +  -  %  ** .
2. Operator Assignment (Penugasan): Digunakan untuk memberikan atau mengubah nilai pada variabel.* simbolnya:* = , += , -= , *= , %= , /= .
3. Operator Perbandingan (Comparison): Digunakan untuk membandingkan dua nilai dan menghasilkan Boolean (true atau false). *simbolnya:* === , == , < , > , <= , >= , != , !== .
4. Operator Logika (Logical): Digunakan untuk menggabungkan atau membalikkan nilai Boolean. *simbolnya:* && , || , ! .
5. Operator Increment dan Decrement: Digunakan untuk menambah atau mengurangi nilai sebesar 1. *simbolnya:* ++ ( increment (tambah 1) ) , -- ( decrement (kurangi 1) ).
6. Operator String (Concatenation): digunakan untuk menggabungkan dua atau lebih string menjadi satu string baru. *simbolnya:* + .

## Rangkuman bab 6:
* **Apa itu percabangan ( control flow ):** struktur dalam JavaScript yang digunakan untuk mengatur alur jalannya program berdasarkan suatu kondisi tertentu. Dengan percabangan, program dapat memilih tindakan yang berbeda tergantung apakah kondisi tersebut bernilai true (benar) atau false (salah).
* **Percabangan ( control flow ) ada 4 jenis:**
1. if: Digunakan untuk menjalankan kode jika suatu kondisi bernilai true.
2. if...else: Digunakan untuk memilih antara dua kondisi.
3. else if:Digunakan ketika terdapat beberapa kondisi yang harus diperiksa.
4. switch:Digunakan untuk memilih tindakan berdasarkan nilai tertentu.

## Rangkuman bab 7:
* **Apa itu looping:** struktur dalam JavaScript yang digunakan untuk menjalankan sebuah blok kode secara berulang-ulang selama kondisi tertentu masih terpenuhi atau sampai jumlah perulangan yang ditentukan tercapai.
* **Jenis-jenis looping:**
1. for: Digunakan ketika jumlah perulangan sudah diketahui.
2. while: Digunakan ketika perulangan berjalan selama suatu kondisi bernilai true.
3. do while: Mirip dengan while, tetapi blok kode akan dijalankan minimal satu kali sebelum kondisi diperiksa.

## Rangkuman bab 8:
* **Apa itu array:** Array adalah tipe data yang digunakan untuk menyimpan banyak nilai dalam satu variabel. Tanpa array kita harus membuat variabel secara terpisah, pendekatan yang tidak praktis dan sulit dikelola.
* **Apa itu method:** Method adalah fungsi yang dimiliki oleh suatu object atau tipe data tertentu yang digunakan untuk melakukan operasi atau tindakan terhadap data tersebut. Method dipanggil dengan menggunakan tanda titik (.).
* **Penjelasan Array Method:** 
1. length: Mengembalikan jumlah elemen.
2. push(nilai): Menambahkan elemen di akhir.
3. unshift(nilai): Menambahkan elemen di awal.
4. pop(): Menghapus dan mengembalikan elemen terakhir.
5. shift(): Menghapus dan mengembalikan elemen pertama.
6. indexOf(nilai): Mencari indeks elemen pertama yang cocok.
7. includes(nilai): Memeriksa apakah elemen ada dalam array.
8. splice(i, n): Menghapus, menyisipkan, atau mengganti elemen.
9. slice(i, j): Mengembalikan salinan sebagian array.

## Rangkuman bab 9:
* **Apa itu function:** sebuah mesin yang menyimpan beberapa perintah. Saat mesin tersebut dipanggil, semua perintah di dalamnya akan dijalankan.*contoh:* function blender ( buah, sayur) {} . ( function adalah mesin dan blender adalah nama mesinnya dan dalam tanda kurung () namanya parameter dan dalam tanda {} berisi kode yg akan dijalankan seperti isi dalam mesin yg terdapat gir,kabel dan lain-lain).
* **deklarasi dan cara memanggilan Fungsi:** Untuk membuat fungsi, gunakan kata kunci function, diikuti nama fungsi, tanda kurung (), dan blok kode dalam kurung kurawal {}. jika sudah mendeklarasi fungsi, cara memanggilnya adalah dengan menulis nama fungsi dan tanda kurung ().
* **Apa itu parameter dan argumen:** Parameter adalah Nama variabel yang dideklarasikan di dalam tanda kurung () yg fungsinya sebagai "pintu masuk" data. 
sedangkan argumen adalah Nilai nyata yang diberikan dalam tanda kurung () saat fungsi dipanggil.
* **Function Expression:** Menyimpan function ke dalam variabel. *contoh:* const hitungLuasPersegiPanjang = function (panjang, lebar) {}.
* **Arrow Function:** cara penulisan funaction yang lebih ringkas menggunakan simbol panah =>. *contoh:* const kali = (x, y) => {} .
* **return:** kata kunci dalam JavaScript yang digunakan untuk mengembalikan hasil dari sebuah function agar nilai tersebut dapat digunakan di bagian lain dari program. Begitu return dieksekusi, fungsi langsung berhenti. Kode setelah return tidak akan pernah dijalankan. *contoh:* ( cek google ).
* **Nilai default:** Nilai parameter yang digunakan jika argumen tidak diberikan dengan menggunakan tanda ( = ) setelah value dalam parameter. *contoh:* function hitungDiskon(harga, persentase = 10) {} . ( persentase disini kalau tidak diisi di argumen maka otomatis akan menghasilkan nilai 10).

## Rangkuman bab 10:
* **Apa itu object:** tipe data yang digunakan untuk menyimpan kumpulan data yang saling berhubungan dalam satu wadah, dalam bentuk pasangan key dan value. analoginya seperti sebuah kartu identitas (KTP) yang menyimpan beberapa informasi tentang satu hal atau satu benda.
* **Apa itu properti:** pasangan key dan value yang tersimpan di dalam object.
* **Dot Notation:** cara mengambil data dari object dengan menuliskan variable kemudian tanda ( . ) lalu key. *contoh:* object.properti.
* **Bracket Notation:** cara mengambil data dari object dengan menuliskan nama key di dalam tanda kurung siku sebagai sebuah string. *contoh:* object["properti"].
* **Method:** Function yang ditulis di dalam Object.
* **this:** Kata kunci yang merujuk pada Object pemilik method. *contoh penulisan dalam method:* this.properti.
* **delete:** kata kunci yg digunakan untuk menghapus properti. *contoh penulisan:* delete santri.umur . ( delete disini kata kunci untuk menghapus properti, santri disini variablenya object dan umur adalah disini adalah properti dalam variable santri, saat dijalankan maka umur akan terhapus dari object.).
* **in:** kata kunci yg digunakan untuk memeriksa keberadaan properti, jika hasilnya true maka ada jika false maka tidak ada. *contoh penulisan:* "key" in namaObject.

## Rangkuman bab 11:
* **Apa itu Iterable** Iterable adalah tipe Data yang Dapat Disisir Berurutan dengan menggunakan perulangan for ... of. *Tipe data Iterable yang paling umum digunakan:* 
1. string: contoh: "apel" maka apel ini akan ditulis huruf perhuruf seperti a-p-e-l.
2. array: contoh [ "emas", "perak"] maka yg dalam array ini akan ditulis element per element seperti 'emas', 'perak'.
* **Apa itu Non-Iterable:**  tipe data yang tidak memiliki konsep urutan, sehingga tidak dapat diproses menggunakan for...of. tipe datanya:
1. Number: Angka seperti 4500 adalah satu nilai tunggal, bukan kumpulan.
2. Boolean: true atau false adalah status, bukan kumpulan elemen.
3. Object {}: adalah tempat untuk menyimpan beberapa data menggunakan pasangan key dan value. Berbeda dengan array, data di dalam object tidak memiliki urutan nomor (indeks) seperti [0], [1], [2], dan seterusnya. Data harus diakses menggunakan nama key-nya.
* **Cara Mengiterasi (melooping) Object dengan for...in:** Karena Object bukan Iterable, for...of tidak dapat digunakan. JavaScript menyediakan for...in khusus untuk mengiterasi kunci (key) dari sebuah Object. *prosesnya:* for...in akan mengambil setiap nama key dari sebuah object satu per satu. Key tersebut kemudian bisa digunakan dengan Bracket Notation (object[key]) untuk mengambil nilai (value) yang ada di dalam object.
