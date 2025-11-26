// Seleziono l'elemento con ID demo
let elemento = document.getElementById("demo");


// Modifico il contenuto dell'elemento
// elemento.innerHTML = 'IL MIO TESTO È CAMBIATO!!';

// Modifico il contenuto dell'elemento al click di un bottone
let btn = document.getElementById("btn");

function cambiaTesto (){
    elemento.innerHTML = 'IL MIO TESTO È CAMBIATO!!';
}

// Faccio in modo che il bottone registri l'azione di click dell'utente per lanciare la funzione

btn.addEventListener("click",cambiaTesto);