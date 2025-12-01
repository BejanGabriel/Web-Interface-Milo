/* 
    Per rendere la vita più facile all'utente e dargli velocemente un feedback sulla correttezza di quello che scrive, possiamo intercettare gli eventi della tastiera.
*/

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const USERNAMEPATTERN = /^[a-zA-Z]{6,}$/; // Regex per validare lo username

// Validazione
form.addEventListener('submit', e => {
    e.preventDefault(); // Previene il comportamento di default del form (rinfrescare la pagina)

    let username = form.username.value; // Prendiamo il valore dell'input username


    if (USERNAMEPATTERN.test(username)) {
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

// Live feedback
form.username.addEventListener('keyup', e => {
    if (USERNAMEPATTERN.test(e.target.value)) {
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