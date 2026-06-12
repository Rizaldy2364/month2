let peralatanMandi = [ 'sabun', 'sampo', 'odol', 'sikat gigi']
for (let alat of peralatanMandi) {
    console.log ( 'alat yg ada untuk mandi: ' + alat)
}
/* Hasil:
alat yg ada untuk mandi: sabun
alat yg ada untuk mandi: sampo
alat yg ada untuk mandi: odol
alat yg ada untuk mandi: sikat gigi
array merupakan iterable karna element array dapat disisir
*/

let namaLengkap = 'Muhammad Rasya Rizaldi';
for ( let nama of namaLengkap) {
    console.log ( nama )
};
/* Hasil: 
M
u
h
a
m
m
a
d
 
R
a
s
y
a
 
R
i
z
a
l
d
i
sring merupakan iterable karna karakter string dapat disisir
*/

let person = {
    nama : 'rasya',
    umur : 20,
    status : 'pelajar,'
};
for ( let orng in person ) {
    console.log ( orng + ':',  person[orng])
}
/* Hasil: 
nama: rasya
umur: 20
status: pelajar,
object merupakan non-iterable tapi disediakan in sebagai pengganti of
*/