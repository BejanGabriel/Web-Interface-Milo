/* 
    ES1 Scrivi una funzione javascript che accetti due argomenti, una stringa e una lettera. La funzione conterà il numero di occorrenze della specifica lettera nella stringa

    Es2 Scrivi una funzione javascript che accetta un “argomento” e ritorna il tipo di dato: oggetto, funzione, stringa, numero, undefined.

    Es3 Scrivi una funzione javascript che accetta una stringa come parametro e trova la parola più lunga all’interno della frase. Es (mi chiamo Massimiliano -> Massimiliano).

    Es4 Scrivi un programma che accetta (da finestra) un numero come input e inserisce un dash (-) tra due numeri pari. Es ( 823486 -> 8-234-8-6 )

    Es5 Scrivi una funzione javascript che rimuova gli elementi duplicati da un array.

    Es6 Dati due array, calcolare la somma degli elementi presenti nello stesso indice. Esempio:
    array1 = [1,0,2,4,6]
    array2 = [0,4,5,8,7]
    Output = [1,4,7,12,13]

    Es7 Scrivi una funzione che stampa a console tutti i numeri interi di un dato intervallo. Per i multipli di 3 stamperà *Zoom! mentre per i multipli di 5 stamperà *Boom!. Controlla anche il caso in cui il numero è divisibile sia per 3 che per 5.
*/

/* ---------------------------------- ES 1 ---------------------------------- */
function contaOccorenza(stringa, lettera) {
    let contatore = 0;
    for (let i = 0; i < stringa.length; i++) {
        if (stringa[i] === lettera) {
            contatore++;
        }
    }
    console.log(`La lettera: ${lettera} dentro la frase: ${stringa}, si ripete ${contatore} volte`);
}

contaOccorenza("Ciao Come Canti?", "c");

/* ---------------------------------- ES 2 ---------------------------------- */
const findType = argomento => {
    console.log(typeof (argomento));
};

findType(false);

/* ---------------------------------- ES 3 ---------------------------------- */
const maxLunghezza = stringa => {
    let lunghezzaMaggiore = " ";
    let arrayStringa = stringa.split(" ");
    console.log(arrayStringa);

    for (let i = 0; i < arrayStringa.length; i++) {

        if (arrayStringa[i].length > lunghezzaMaggiore.length) {
            lunghezzaMaggiore = arrayStringa[i];
        }
    };
    console.log(`Nella frase "${stringa}" la parola più lunga è: ${lunghezzaMaggiore}`);
}

maxLunghezza("1234 123 12345 12");

/* ---------------------------------- ES 4 ---------------------------------- */
const separaNumPari = sequenzaNumerica => {
    let arrayNumeri = sequenzaNumerica.toString().split("");
    let risultato = "";

    for (let i = 0; i < arrayNumeri.length; i++) {
        risultato += arrayNumeri[i];
        let num2 = arrayNumeri[i + 1];
        if (arrayNumeri[i] % 2 === 0 && num2 % 2 === 0) {
            risultato += "-";
        }
    }
    console.log(risultato);
}

separaNumPari(12634485566);


/* ---------------------------------- ES 5 ---------------------------------- */
const rimuoviDuplicati = arrayConDoppi => {
    console.log(typeof (arrayConDoppi));
    let array;

    if (typeof (arrayConDoppi) == "number") {
        array = arrayConDoppi.toString().split("");
    } else {
        array = arrayConDoppi.split(" ");
    }
    let unico = [];
    array.forEach(element => {
        if (!unico.includes(element)) {
            unico.push(element);
        }
    });
    return unico.toString();

}

console.log(rimuoviDuplicati(12345446611));

/* ---------------------------------- ES 6 ---------------------------------- */
function sommaArray(array1, array2) {
    let somma = [];
    let lunghezza = Math.min(array1.length, array2.length);

    for (let i = 0; i < lunghezza; i++) {
        somma.push(array1[i] + array2[i]);
    }
    console.log(somma.toString());

}
sommaArray([1, 0, 2, 4, 6], [0, 4, 5, 8, 7]);

/* ---------------------------------- ES 7 ---------------------------------- */
function giochino(rangeMax) {

    for (let i = 0; i < rangeMax; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("ZoomBoom");

        } else if (i % 3 === 0) {
            console.log("Zoom");

        } else if (i % 5 === 0) {
            console.log("Boom");

        } else {
            console.log(i);

        }

    }

}

giochino(100);

