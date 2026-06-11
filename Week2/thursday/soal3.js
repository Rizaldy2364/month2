let adab = ["bodoh", "rajin", "malas", "hebat", "jelek"]

function sensor () {
    console.log ( 'sebelum di sensor: ' + adab );
    adab.shift();
    adab.pop();
    console.log ( "sesudah disensor: " + adab )
}

sensor()
/* Hasil: sebelum di sensor: bodoh,rajin,malas,hebat,jelek
sesudah disensor: rajin,malas,hebat*/