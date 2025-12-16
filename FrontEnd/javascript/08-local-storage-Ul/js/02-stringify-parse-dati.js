/* 
     Quando abbiamo bisogno di salvare qualcosa di più complesso di semplici stringhe o numeri, visto che la local storage lavora SOLO con le stringhe, dobbiamo prima trasformarlo in una stringa.
     A quel punto possiamo salvare i nostri dati complessi nella local storage, ma quando li recuperiamo riceviamo una stringa, quindi dobbiamo parsarla in qualcosa in cui possiamo lavorare in JS, come un array o un oggetto.
*/

const todos = [
    {
        testo: 'Pulire casa',
        autore: 'milo'
    },
    {
        testo: 'Salvare Peach',
        autore: 'mario'
    },
    {
        testo: 'Mangiare frutta',
        autore: 'yoshi'
    }
];

// Per salvare questo array in local sotrage, dobbiamo prima trasformarlo in una stringa. Per farlo utilizziamo il metodo stringify() dell'oggetto JSON.

console.log(JSON.stringify(todos)); // Le proprietà sono tra virgolette.
localStorage.setItem('todos', JSON.stringify(todos));

// Possiamo recuperare dalla local storage il nostro JSON e convertirlo di nuovo da una stringa in un array con il metodo parse() dell'oggetto JSON.
const todosSalvati = localStorage.getItem('todos');
console.log(JSON.parse(todosSalvati));




