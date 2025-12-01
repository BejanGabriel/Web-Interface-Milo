/* -------------------- Rimuovere dal un elemento dal DOM ------------------- */

const toDoList = document.querySelector('.lista');
const btn = document.querySelector('.btn');
// Rimuovo l'intera dal DOM
// toDoList.remove();

// Se invece volessi rimuovere un list item al click:
const listItems = document.querySelectorAll('.lista li');

listItems.forEach(item => {
    item.addEventListener('click', e => {
        e.target.remove();
    })  
});

/* ------------------ Aggiungere un nuovo elemento nel DOM ------------------ */

btn.addEventListener('click', () => {
    // Aggiungo un nuovo elemento alla lista passandoglielo con gli operatori studiati
    // let nuovoItem = prompt('Cosa vuoi aggiungere alla lista?');
    // toDoList.innerHTML += `<li>${nuovoItem}</li>`;

    // Creiamo un nuovo elemento privo di contenuto testuale, specificando di che tipo di elementro si tratta ('LI')
    const li = document.createElement('li');

    // Aggiungiamo il testo all'interno del nuovo elemento
    li.textContent = prompt('Cosa vuoi aggiungere alla lista?');

    // Inseriamo il nuovo elemento all'interno del DOM "appendendolo" o "preppendendolo" al genitore
    // toDoList.append(li);  lo aggiunge al fondo
    // todoList.prepend(li);  lo aggiunge in cima

    toDoList.append(li);
});