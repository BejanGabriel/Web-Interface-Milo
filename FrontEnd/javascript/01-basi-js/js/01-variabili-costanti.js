/* -------------------------------- VARIABILI ------------------------------- 
Le variabili ci permettono di salvare dei valori, come un numero o una mail, e di utilizzare quel valore ogni volta che vogliamo.
Ci sono diversi metodi di creare un variabile in JS.
*/

//[let] è una parola chiave per indicare una variabile e impedisce di dichiarare due variabili con lo stesso nome

let age = 25;
let year = 2025;

console.log(age, year);

// Possiamo sovrascrivere il valore di una variabile e da qui il nome variabile. Per farlo ci basta richiamare la variabile utilizzando il suo nome e assegnale il valore che vogliamo.
age = 26;

console.log(age);

// Posso anche dichiarare una variabile e assegnarle un valore in seguito.
let firstName;
firstName = "Gabriel";

console.log(firstName);

/* -------------------------------- COSTANTI -------------------------------- 
Se vogliamo creare una variabile con un valore che non deve mai cambiare, allora ci serve una costante.
Per creare una costante, usiamo la parola chiave [const] (per convenzione il nome sarà scritto in ALL-CAPS, non è obbligatorio, semplicemente tutti fanno cosi.)
*/

const POINTS = 100;
console.log(POINTS);

/*
Esiste una terza parola chiave per creare variabili: [var], che NON impedisce di dichiarare due variabili con lo stesso nome, a differenza di [let].
*/

var score = 75;

console.log(score);

// var score = 10; questo crea solo confusione perchè l'ho gia dichiarata sopra come variabile.

console.log(score);

/* -------------------------- NOMI DELLE VARIABILI -------------------------- 
 I nomi delle variabili seguono delle regole molto precise e convenzioni che aiutano a rendere il codice leggibile da chiunque:
  - niente spazi (errore)
  - possiamo usare il camelcase (myAge)
  - può contenere solo lettere, numeri, underscore o $, ma non possono mai cominciare con un numero (errore)
  - non possono utilizzare le keyword adottate da JS come [const, let, var, for, if...]
  - il nome deve avere un senso, deve far capire all'istante cosa viene salvato in quella variabile, cosi da rendere il codice leggibile e comprensibile.
*/


