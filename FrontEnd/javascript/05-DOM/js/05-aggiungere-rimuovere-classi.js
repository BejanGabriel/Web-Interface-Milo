/* 
    Siccome non è consigliabile lavorare sullo stile in linea, è meglio imparare come fare a rimuovere e aggiungere classi CSS.

    La proprietà classList degli elementi HTML ci permette di vedere l'elenco di classi di un dati elemento HTML.
    Per aggiungere una classe, usiamo il metodo di classList add().
    Per rimuovere una classe, usiamo il metodo di classList remove().
    Esiste poi il metodo toggle() che aggiunge un classe se non presente nella classList e la rimuove se presente.
*/

const par = document.querySelector('p');

console.log(par.classList);

// Aggiungo la classe text-primary
// par.classList.add('text-primary');

// Rimuovo la classe text-primary
// par.classList.remove('text-primary');

// Aggiungo più classi in diversi momenti
// par.classList.add('text-success');
// par.classList.add('display-4');

const pars = document.querySelectorAll('p');

pars.forEach(par => {
    if(par.textContent.includes('error')){
        par.classList.add('text-bg-danger');
    }
    if(par.textContent.includes('success')){
        par.classList.add('text-bg-success');
    }
});

const title = document.querySelector('h1');

title.addEventListener('click', () => {
    title.classList.toggle('text-info');
})