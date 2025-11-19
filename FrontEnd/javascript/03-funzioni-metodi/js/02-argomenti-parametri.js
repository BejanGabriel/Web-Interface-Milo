/*
    I parametri di una funzione sono dei segnaposto che verranno poi valorizzati quando la funzione verrà chiamata.
*/
const saluta = function(name){ // variabile locale che possiamo usare nel blocco della funzione
    console.log(`Buongiorno ${name}`);
}

saluta("Sandro"); // Passo il parametro di name quando richiamo la funzione ---> argomento.


