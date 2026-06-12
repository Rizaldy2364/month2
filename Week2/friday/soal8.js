let karakter = {
    nama : 'rizaldy',
    hp : 100,
    attack : 50,
    serang : function () {
        console.log ( 'status awal karakter: ' + this.nama + '.' + ' ' + 'hp: ' + this.hp + '.' + ' ' + 'attack: ' + this.attack) 
        console.log ('karakter ' +  this.nama + ' ' + 'menyerang dengan panah')
    },
    damage : function (jumlah) {
        this.hp -= jumlah
        console.log ( 'karakter terkena damage: ' + jumlah + "." + " " + 'sisa darah: ' + (this.hp))

    },
    heal : function (jumlah) {
        this.hp += jumlah
        console.log ( 'karakter ngeheal: ' + jumlah + '.' + ' ' + 'sisa darah: ' + (this.hp));
        console.log ( 'status akhir karakter: ' + this.nama + '.' + ' ' + 'hp: ' + this.hp + '.' + ' ' + 'attack: ' + this.attack);
    },
    } 

karakter.serang ()
karakter.damage (50)
karakter.heal (30)
/* Hasil: 
status awal karakter: rizaldy. hp: 100. attack: 50
karakter rizaldy menyerang dengan panah
karakter terkena damage: 50. sisa darah: 50
karakter ngeheal: 30. sisa darah: 80
status akhir karakter: rizaldy. hp: 80. attack: 50
*/