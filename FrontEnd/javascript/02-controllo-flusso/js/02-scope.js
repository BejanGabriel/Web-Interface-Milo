/*
    Lo scope (o ambito) si riferisce alla visibilità delle variabili e delle funzioni in diverse parti del codice
*/
// Si parla di variabili GLOBALI quando dichiarate al di fuori di qualsiasi funzione o blocco di codice circoscritto e sono accessibili da qualsiasi parte del codice.
let age = 30;

if (true) {
    console.log(`Dentero al blocco: ${age}`); // Accessibile all'interno di un blocco di codice
}

console.log(`Fuori dal blocco: ${age}`); // Accessibile dall'esterno di un blocco di codice

// Si parla di variabili LOCALI quando queste vengono dichiarate all'interno di un blocco di codice(come un ciclo o un if statement o una funzione)
if (true) {
    let varLocale = "Sono una variabile locale";
    console.log(`Dentro al blocco:   ${varLocale}`); // Accessibile all'interno di un blocco di codice
}
// console.log(`fuori dal blocco: ${varLocale}`); NON Accessibile dall'esterno di un blocco di codice

let email = 'mail@mail.it';
console.log(email);

// let email = 'altra@mail.it'; // let non ci permette di dichiarare due variabili con lo stesso nome se si trovano nello stesso scope
if (true) {
    let email = 'ennesimaMail@mail.it';
    console.log(email);   
}

/*
    L'operatore ternario è un modo conciso per scrivere una codizione che restituisce uno dei due valori in base a una valutazione booleana. viene usato come alternativa compatta all'istruzione if-else, ma solo quando si hanno due opzioni.
*/

let eta = "18";
let stato = (eta >= 18) ? "Maggiorenne" : "Minorenne";
console.log(stato);
