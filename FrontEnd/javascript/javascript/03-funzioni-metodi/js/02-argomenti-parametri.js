/*
    I parametri di una funzione sono dei segnaposto che verranno poi valorizzati quando la funzione verrà chiamata.
*/
const saluta = function(name){ // variabile locale che possiamo usare nel blocco della funzione
    console.log(`Buongiorno ${name}`);
}

saluta("Sandro"); // Passo il parametro di name quando richiamo la funzione ---> argomento.

const salutaMeglio = function(name, time){ //separiamo i parametri con le virgole
    console.log(`${time},${name}`);  
};
salutaMeglio('Lorenzo', 'Buonasera'); // L'ordine è importante
salutaMeglio();
// Se richiamo una funzione che richiede dei parametri senza passarle degli argomenti, i parametri assumono il valore di undefined. Per evitare questo problema, possiamo assegnare dei valori di default.

const salutaSicuro = function(name = 'Utente', time = 'Salve'){
    console.log(`${time} ${name}`);  
};

salutaSicuro(); // Se non passo alcun argomento, la funzione assegnerà i valori di default.
salutaSicuro('Paola', 'Buon pomeriggio'); // Se passo degli argomenti, quelli sovrascriveranno quelli di default.

/*
    - Un parametro è la variabile elencata tra parentesi tonde nella dichiarazione della funzione (fa parte della dichiarazione).
    - Un argomento è il valore passato alla funzione quando viene chiamata (fa parte della chiamata).
*/