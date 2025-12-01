const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault(); // Previene il comportamento di default del form (rinfrescare la pagina)

    // Validazione
    let username = form.username.value; // Prendiamo il valore dell'input username
    const USERNAMEPATTERN = /^[a-zA-Z]{6,}$/; // Regex per validare lo username

    if(USERNAMEPATTERN.test(username)) {
        // Feedback positivo
        feedback.textContent = 'Username valido!';
        feedback.classList.add('text-success');
        feedback.classList.remove('text-danger');
        form.username.style.borderColor = 'green';
    } else {    
        // Feedback negativo
        feedback.textContent = 'Username non valido! Deve contenere almeno 6 caratteri e solo lettere.';
        feedback.classList.add('text-danger');
        feedback.classList.remove('text-success');
        form.username.style.borderColor = 'red';
    }
});