/* 
    Spesso Js viene usato per validare i FORM, ovvero per assicurarci che lutente scriva informazioni nella maniera giusta o del tipo corretto all'interno degli input.

    Ad esempio: vogliamo che l'utente inserisca uno username che abbia dai 6 ai 10 caratteri, che questi siano solo lettere e numeri, quindi niente spazi e niente caratteri speciali.

    Per controllare che l'utente segua il pattern che vogliamo, possiamo controllare quello che scrive con una regular expression (regex).

    https://regex101.com è un sito molto utile per testare le regex.
*/
let username = 'milo';
const pattern = /^[a-z]{6,}$/;

// Usiamo il metodo test() su un patter per vedere se matcha la nostra REGEX e ci restituirà true o false
let result = pattern.test(username);
console.log(result); // false

if(result) {
    console.log('Hai passato il test della REGEX');
}else {
    console.log('Non hai passato il test della REGEX');
}
// Altro metodo
let result2 = username.search(pattern);
// console.log(result2); Ci restituisce un intero che indica la posizione del pattern cercato

