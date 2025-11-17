/*
    Usiamo le stringhe per salvare una serie di lettere, numeri o altri caratteri, come un nome o un indirizzo email.
    Per assegnare una stringa come valore di una variabile, bisogna metterla [ " " ]
*/
let string = "Sono una stringa";

// Se la stringa deve contenere a sua volta degli apici, bisogna far capire che quegli apici fanno parte della stringa e non sono attinenti al codice.
// Un modo è quello di unasre i backslash (\), che è un carattere di escape, prima di ogni apertura di apici

let url = "<a href=\"https://www.youtube.come\">Vai a YouTube</a>"
let nomeLibro = 'L\'uomo del bho';
console.log(url);

/* 
  ALTRI UTILIZZI DEL CARATTERE DI ESCAPE
    \' apostrofo o apice singolo
    \" apici doppi
    \\ backslash
    \r a capo  
 */

// Un altro metodo è quello di usare gli apici singoli per dichiarare la stringa e gli apici doppi dove servono all'interno della stringa o viceversa.

let quote = 'Ieri mi ha detto solo "Ciao"!';
console.log(quote);

/*
 Per concatenare più stringhe tra loro, possiamo usare l'operatore di concatenazione [ + ] 
*/

let ourString = "Io vengo prima " + " Io vengo dopo."
console.log(ourString);

//  Possiamo usare l'operatore [ += ] per concatenare stringhe.

let stringaConc = "Io vengo prima. ";
stringaConc += " Io vengo dopo.";

console.log(stringaConc);


let myName = "Milo";
let myAge = "34";
let templateLiteral = `Ciao mi chiamo ${myName} e ho ${myAge}`;
console.log(templateLiteral);

// Possiamo calcolare la lunghezza di una stringa utilizzando la priprietà [length] 
let firstNameLength = 0;
let firstName = "Milo";

firstNameLength = firstName.length;

console.log(firstNameLength);

// Se volessimo ricavare la prima lettera di una stringa possiamo usare la bracket notation

let firstLetterOfFirstName = firstName[0]; //le stringhe sono 0-based

// Possiamo ricavare l'ultimo carattere di una stringa anche se non ne conosciamo la lunghezza esatta

let nome = "Agamennone";
let lastLetterOfName = nome[nome.length-1]

console.log(lastLetterOfName);

/* ----------------------------- Metodi Stringhe ---------------------------- */
let txt = "Oggi ho svolto 6 ore di lezione";
// Metodi di ricerca
let search1 = txt.indexOf("lezione"); // restituisce l'indice in cui la parola inizia
console.log(search1+"sono qui");

let search2 = txt.lastIndexOf("e"); // restituisce l'indice dell'ultima occorrenza
console.log(search2);

let search3 = txt.charAt(3);
console.log(search3);

let search4 = txt.indexOf("f"); // se il carattere non esiste, restituise -1

// Metodi per il taglio
let testo = "sono le 13 e tutto va bene";

// I metodi [ slice() ] e s[ substring() ] estraggono una sezione della stringa e la restituiscono come una nuova stringa senza modificare l'originale.

let taglio1 = testo.slice(4,10); // se li passo un solo numero negativo, lui conta al contrario
console.log(taglio1);

let taglio2 = testo.substring(10, 4);
console.log(taglio2);

// Metodi per sostituzione
let affermazione = "Il migliora browser del mondo è Internet Explorer";

// Il metodo [ replace() ] che restituisce una nuova stringa rimpiazzando la prima ricorrenza del pattern dato con una sostituzione. Se voglio rimpiazzare ogni ricorrenza si usa [ replaceAll() ]

let sost = affermazione.replace("Internet Explorer" , "Google Chrome")
console.log(sost);

// Il metodo toUpperCase() converte tutti i caratteri in maiuscolo
let upp = affermazione.toUpperCase();
console.log(upp);

let low = affermazione.toLowerCase();
console.log(low);

// Il metodo [ split() ] divide una stringa in una lista ordinata di sotto-stringhe, le ragruppa in un array e restituisce questo array. La divisione avviene cercando un pattern fornito con parametro tra le parentesi del metodo e indica dove il metodo deve andare a separare.
let string1 = "Ciao mi chiamo Milo";
let array1 = string1.split(" ");
console.log(array1);

// Se invece si parte da un array di stringhe, con il metodo [ join() ] e possibile ottenere una stringha che concatena tutti gli elementi dell'array separati da virgole, oppure dal carattere specificato come argomento del metodo.

let array2 = ["M", "i", "l", "o"];
let string2 = array2.join(""); //unisco secondo il carattere indicato, se vuoto, lega tutti gli elementi
console.log(string2);

/* -------------------------------------------------------------------------- */
/*                                  Esercizi                                  */
/* -------------------------------------------------------------------------- */
// Salvare un nome in una variabile e stamparlo in consolore senza l'iniziale

// Data una stringa, stamparla in console al contrario

// Elabora uno script per estrarre l'estensione di un file
// immagine.jpg -> "L'estensione del file è : jpg"

// Elabora uno script per fare la seguente manipolazione:
// oggi sono a lezione -> Oggi Sono A Lezione

//es1
let miNome = "Gabriel";
console.log(miNome.slice(1, nome.length));

//es2
let esStringa = "Mi chiamo Gabriel";
let arrayInverso = [esStringa.split(" ")];
for(let i = 0; i < arrayInverso.length; i++){
    arrayInverso[i] = arrayInverso[arrayInverso.length-i];
}
console.log(arrayInverso.toString + "Sono qui");


//es3
let estensioneFile = "index.html";
let array3 = estensioneFile.split(".");
console.log(array3[1]);

//es4
// let stringaUp = "oggi sono a lezione";
// let arrayUp = stringaUp.split(" ");
// let arrayComp = arrayUp.length;
// for(let i = 0; i < arrayUp.length; i++){
//     let searchUp = arrayUp[i].charAt(1).toUpperCase;
//     arrayComp[i] = searchUp;
// }
// let stringaComp = arrayComp.join("");
// console.log(arrayComp);


