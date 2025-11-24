/*
    Il ciclo for è un loop che esegue un blocco di codice per un numero determinato di volte deciso dalla sua condizione.

    La sintassi prevede:
    - Parola chiave [for]
    - Parentesi tonde () che contengono gli elementi necessari per porre la condizione
        - inizializzazione di una variabile
        - condizione di controllo della variabile che può essere vera o falsa
        - aggiornameto della variabile
    - Parentesi graffe che contengono il blocco di codice da eseguire finchè la condizione viene rispettata
*/

for(let i = 0; i < 5; i++){
    console.log(`In loop: ${i}`);
}

// Difficilmente la condizione conterrà un numero fisso come il 5, il più delle volte cicleremo dei dati
const STUDENTI = ['Mario','Luigi','Yoshi']
    for (let i = 0; i < STUDENTI.length; i++) {
        console.log(i);
        console.log(STUDENTI[i]);
    }

/* -------------------------------------------------------------------------- */
/*                                  Esercizio                                 */
/* -------------------------------------------------------------------------- */
/*
    Scrivi un loop che itera da 0 a 15, e per ogni ciclo controlla se il numero è pari o dispari
*/
// Soluzione con If statement
for(let i = 0; i <= 15; i++){
    if(i % 2 === 0){
        console.log(`${i} è pari`);
        continue;
    } else{
        console.log(`${i} è dispari`);
        
    }
}

// soluzione senza if statement
const RISULTATI = [' è pari', ' è dispari']

for(let i = 0; i <= 15; i++){
    console.log(`${i} ${RISULTATI[i % 2]}`);
    
}

