/*
    Quando si attiva un evento su un elemento, l'evento si propaga "risalendo" attraverso la gerarchia degli elementi genitori.

    - Attivazione dell'evento
    Quando un evento, come un click, si verifica su un elemento, l'evento inizia a propagarsi dal target (l'elemento cliccato) fino all'elemento radice del documento (HTML)  

    - Propagazione
    Dura la fase di bubbling, l'evento viene passato a ciascun elemento genitore, in ordine gerarchico, fino a raggiungere l'elemento radice del documento.

    - Gestione degli eventi
    Ogni elemento lungo il percorso può avere dei genitori di eventi associati. Se un gestore di eveneti è definito su un elemento genitore, può "catturare" l'eveneto e reagire a esso.

    Se vogliamo impedire che l'evento continui a propagarsi, possiamo utilizzare il metodo stopPropagation() sull'oggetto evento all'interno del gestore dell'evento.
*/

const todoList = document.querySelector('.lista');
const listItems = todoList.querySelectorAll('li'); 
const btn = document.querySelector('.btn');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = prompt('Cosa vuoi aggiungere alla lista?');
    todoList.append(li);
});

// Qui aggiungiamo un EventListener su ogni elemento della lista. Questo è un dispendio di memoria e potrebbe rallentare il programma. In più non funziona sugli elementi che aggiungiamo dopo il caricamento della pagina.
// listItems.forEach(item => {
//     item.addEventListener('click', e => {
//         console.log('Evento su LI');
//         e.target.remove();
//         // e.stopPropagation(); // Se decommentato, impedisce la propagazione dell'evento al body
//     });
// });

// body.addEventListener('click', () => {
//     console.log('Evento click sul body catturato grazie al bubbling!');
// });

todoList.addEventListener('click', e => {
    e.stopPropagation;
    console.log(e.target); // Controllo che l'evento parta sull'elemento cliccato

    // Se volessimo eliminare il list item cliccato, possiamo intanto controllare che sia effettivamente stato cliccato un LI e non l'UL
    if(e.target.tagName === 'LI') {
        e.target.remove();
    }
});

