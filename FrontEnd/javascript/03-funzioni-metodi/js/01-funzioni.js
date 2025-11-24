/*
    Le funzioni in JavaScript sono blocchi di codice riutilizzabili che possono essere eseguiti quando vengono chiamati tutte le volte che vogliamo, senza dover scrivere di nuovo lo stesso codice.

    Per dichiarare una funzione usiamo:
    - Parola chiave [function]
    - Nome della funzione
    - Una lista di parametri tra parentesi tonde e separati da virgole
    - Il blocco di codice da eseguire contenuto tra parentesi graffe (corpo della funzione)

    function [nomeFunzione](parametro1, parametro2){
        corpo della funzione
    }

    Per convenzione, si nominano le funzioni con dei verbi, cosi da far capire subito cosa fanno.
*/

function saluta(){
    console.log("Ciao!");
}

function addizione(num1,num2){
    let risultato = num1 + num2;

    console.log(risultato);
    
}

addizione(1,2);

// Possiamo anche salvare una funzione all'interno di una variabile e richiamarla in una maniera molto simile (function expressione). In questo caso la funzione sarà anonima, perchè sarà la variabile ad assegnarle il nome.

const PARLA = function(){
    console.log("Sto parlando!");
}

// La richiamiamo alla stessa maniera
PARLA();
