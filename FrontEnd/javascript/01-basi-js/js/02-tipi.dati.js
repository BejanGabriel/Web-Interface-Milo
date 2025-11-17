/*
    JavaScript usa più tipi di dato:
    - Number:   numeri di tutti i tipi
    - String:   serie di caratteri tra apici['singoli'  oppure  "doppi"]
    - Boolean:  sono un valore speciale che indica [true o false]
    - Null:     lo utilizziamo per indicare esplicitamente che una variabile non ha un valore
    - Undefined:    come null, ma per variabile non ancora definite e viene assegnato dal browser
    - Object:   sono strutture di dati complesse con più proprietà e funzioni (Array, Dates, Literals, .....)

    Una variabile può contenere qualsiasi tipi di dati e in JS non siamo obbligati a specificare di che tipo di dato si tratti. Possiamo anche sovrascrivere il valore di una variabile con un diverso tipo di dato.
    JavaScript è un linguaggio debolmente tipizzato, cioè conosce benissimo i tipi di dato, ma non siamo obbligati a dichiararli.
*/

let nomeDocente = "Milo"; //String
let cognomeDocente = "Spandre";
let etaDocente = 34;    //Number
let nomeCorso = "Tecnico Interfacce Grafiche";
let materia = "Javascript";
let presenza = true;    //boolean

// Quando in dubbio sul tipo di dato, possiamo utilizzare l'operatore [typeof] seguito dalla variabile di cui vogliamo conoscere il tipo.
console.log(typeof presenza);
console.log(typeof PI);
console.log(typeof nomeDocente, nomeDocente);

console.log("Ciao, mi chiamo " + nomeDocente + " " + cognomeDocente + " ho " + etaDocente + " anni. Insegno " + materia + " nel corso " + nomeCorso + " e oggi il mio stato di presenza è " + presenza);
