/*
    I form esistono per ottenere dati o informazioni da parte degli utenti della pagina web (es.: username e password di un form di login).

    Per catturare queste informazioni, possiamo utilizzare degli eventi e più nello specifico, l'evento 'submit' del form. Cliccare sul bottone presente al fondo del form fa partire un evento di submit.

    Quando vogliamo catturare un evento di submit, anche se per lanciarlo l'utente deve cliccare il bottone, dobbiamo "ascoltarlo" sul form. Anche perché il submit può avvenire senza il click sul bottone, ma al semplice iinvio dell'utente.

    L'azione di default che il submit di un form compie è il refresh della pagina. Noi raramente vogliamo che questo accada, quindi usiamo il metodo preventDefault() per evitare l'azione di default dell'evento.
*/
const form = document.querySelector('.signup-form');

// Per ottenere le informazioni inserite dall'utente nei campi di input del form, abbiamo diversi metodi. Possiamo prendere i singoli campi di input e ottenere il value, oppure usare direttamente il form.
// const inputUsername = document.querySelector('#username');

form.addEventListener('submit', e => {
    // Impediamo all'evento submit di refreshare la pagina
    e.preventDefault();

    // console.log(inputUsername.value);
    // Possiamo usare la dot notation sul form per prendere l'input con l'attributo id o l'attributo name che ci interessa
    console.log(form.username.value);
});