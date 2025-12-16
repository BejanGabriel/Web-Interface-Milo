/* 
    Fino ad ora abbiamo creato applicazioni che, se refeshate, tornavano al loro stato iniziale, perdendo quindi i dati inseriti dall'utente.

    Per far persistere i dati o creiamo un database o utilizziamo la local storage per memorizzare i dati e recuperarli a piacimento.

    Local Storage è un tipo di archiviazione web che ci permette di salvare dati direttamente nel browser dell'utente.
        - Persistenza: i dati rimangono memorizzati anche dopo la chiusura del browser, a meno che non vengano esplicitamente rimossi.

        - Accesso: i dati possono essere facilmente letti e scritti tramite JS, utilizzando metodi come setItem, getItem e removeItem.

        - Semplicità: è facile e non richiede configurazioni complesse.

        Limitazioni: non è adatta a memorizzare dati sensibili, poichè i dati sono accessibili da qualsiasi script in esecuzione nello stesso origine.
    
    Possiamo quindi salvare dati nel browser sotto forma di coppia chiave/valore. Ogni valore che salviamo in local storage deve essere di tipo stringa, ma non vuol dire che possiamo salvare array, oggetti, ecc. Semplicemente dovremmo parsarli come facciamo per il JSON quando li recuperiamo.

    Possiamo controllare la local storage dalla proprietà localStorage dell'oggetto window, oppure dalla tab "Application" degli strumenti per sviluppatori del browser
*/
// Salvare dati in localStorage:
localStorage.setItem('name', 'Milo');
localStorage.setItem('age', 34); // Anche se scritto come number, diventa stringa.

let nome = localStorage.getItem('name');
let eta = localStorage.getItem('age');
console.log(nome, eta);

// Aggiornare dati nella local storage
localStorage.setItem('name', 'Dario');
// Oppure se vogliamo fare più in fretta. Usiamo la DOT notation
localStorage.age = 30;

// Come cancellare dati dalla localStorage
// localStorage.removeItem('name');
localStorage.clear();

nome = localStorage.getItem('name');
console.log(nome); // Otteniamo null perché non trova il valore
