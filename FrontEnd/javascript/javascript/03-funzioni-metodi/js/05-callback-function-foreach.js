/*
    Abbiamo visto che possiamo passare stringhe, numeri o altro come argomenti di una funzione, ma è possibile anche passare un'altra funzione, per richiamarla o eseguirla all'interno della prima. 
*/
// Creo una arrow function che ha come parametro una callback function
const myFunc = callbackFunc => {
    // fai qualcosa
    let valore = 50;
    // richiamo la funzione di callback
    callbackFunc(valore);
};

// Quando richiamo la funzione, le passo come parametro un'altra funzione
// myFunc(function(valore){
//     console.log(valore); 
// });

// La converto in una arrow function per leggibilità
myFunc(valore => {
    console.log(valore); 
});

/* --------------------------------- forEach -------------------------------- */
/*
    forEach è un metodo degli array che permette di iterare gli elementi di un array e si aspetta come argomento una callback function.

    Nella callback function possiamo passare due parametri:
        - Il primo sarà l'elemento dell'array che sta venendo iterato.
        - Il secondo sarà l'indice dell'elemento iterato.
*/
let personaggi = ['Link', 'Zelda', 'Ganondorf', 'Darunia'];

personaggi.forEach((personaggio, indice) => {
    // console.log("qualcosa");
    console.log(indice,personaggio);
    
});

// Posso anche creare una funzione di callback esterna e richiamarla nel forEach
const logPersonaggio = (personaggio, indice) => {
    console.log(`${indice} - Ciao ${personaggio}`);
};

personaggi.forEach(logPersonaggio);

/* ----------------------------- esempio Pratico ---------------------------- */

let listaPersonaggi = document.getElementById('personaggi');
let html = ``;

personaggi.forEach(personaggio => {
    // creiamo un html template
    html += `<li>${personaggio}</li>`;
});

listaPersonaggi.innerHTML = html;
