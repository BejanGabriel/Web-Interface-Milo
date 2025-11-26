/*
    Quando lavoriamo sul DOM e editiamo, cambiamo o eliminiamo contenuti da una pagina, il primo passo da fare è decidere quale elemento vogliamo selezionare per aggiungergli/rimuovergli contenuti o per cambiarlo in qualche modo ed entrare nel DOM per ottenere un riferimento a quell'elemento. Questo è chiamato 'Querying the DOM'.

    Salvando in una variabile il riferimento all'elemento che ci interessa, possiamo poi farne ciò che vogliamo. Per farlo richiamiamo l'elemento document e usiamo il metodo querySelector().

    querySelector() va a recuperare la prima occorrenza dell'elemento selezionato tramite il selettore passatogli come argomento e scritto in sintassi CSS.
*/
// Recuper il primo <p> che incontro nel documento
const paragrafo = document.querySelector('p');

console.log(paragrafo);

// Se volessi un <p> specifico a cui è stata assegnata una classe

const errorMessage = document.querySelector('.alert-danger');
console.log(errorMessage);

// Se però volessimo un altro elemento che non sia un <p>, ma che ha anch'esso la classe .alert-danger:
const errorMessage2 = document.querySelector('div.alert-danger');
console.log(errorMessage2);

/*
    Se però volessimo selezionare tutti gli elementi <p> presenti nella pagina, dobbiamo ricorrere al metodo querySelectorALL(). Questo metodo crea un riferimento a una NodeList che conterrà tutti gli elementi <p> della pagina.

    Una NodeList assomiglia molto a un array, ma non lo è. Però possiamo utilizzare la bracket notation [] per selezionare un determinato elemento al suo interno (0-based).
*/
const paragrafi = document.querySelectorAll('p');

console.log(paragrafi);
console.log(paragrafi[1]);

paragrafi.forEach(paragrafo => {
    console.log(paragrafo);

});

const errori = document.querySelectorAll('-alert-danger');

console.log(errori);

/* ---------------------- alternative al querySelector ---------------------- */
// getElementById() recupera un elemento tramite il su ID e non ha bisogno di un argomento scritto con la sintassi CSS, basta una stirnga contenente il nome dell'id.

/* getElementsByClassName() recupera tutti gli elementi che hanno la stessa classe.
Questo metodo non ci restituisce una NodeList come querySelectorALL(), ma una HTMLCollection. Sono simili, ma non identiche:
    - Possiamo usare la bracket notation
    - Non possiamo usare il metodo forEach()
*/

// getElementsByTagName() recupera tutti gli elementi che sono dello stesso tipo (o tag). Anche questo ci restituisce una HTMLCollection.
const paras = document.getElementsByTagName('p');
console.log(paras);

