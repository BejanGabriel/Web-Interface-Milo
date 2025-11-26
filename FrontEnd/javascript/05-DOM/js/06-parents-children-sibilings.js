/* 
    Non sempre siamo noi a scrivere o a generare l'HTML, quindi è bene imparare come selezionare gli elementi che ci interessano grazie al loro rapporto di parentela con gli altri elementi.

    prente      <article>
                    \
                ____\__________________
                 |    |   |   |    |
    childre     <h2> <p> <p> <p> <div>
                        sibilings
*/
/* ----------------------------- parent -> child ---------------------------- */
//  Mi serve una selezione di tutti gli elementi all'interno di <article> (parent) così da poter assegnare a ognuno (children) una classe.

// Creo un riferimento al parent
const article = document.querySelector('article');

// Potrei recuperare tutti i figli dell'elemento genitore con la proprietà children, ma questo ce li salva in una HTMLCollection sulla quale non c'è il metodo forEach().
console.log(article.children);

// Posso però trasformare la HTMLCollection in un Array
console.log(Array.from(article.children));  // Cosi trasformo l'HTMLCollection in un array

Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
});

/* ----------------------------- child -> parent ---------------------------- */
// Posso anche recuperare un elemento partendo da uno dei suoi figli
const title = document.querySelector('h2');

console.log(title.parentElement);
console.log(title.parentElement.parentElement);

/* -------------------------------- sibilings ------------------------------- */
// Prendo l'elemento successivo alla stessa altezza dell'alberatura.
console.log(title.nextElementSibling); // Il fratello che viene dopo

// Prendo l'elemento precedente alla stessa altezza dell'alberatura.
console.log(title.previousElementSibling); // Il fratello che viene prima, in questo caso restituisce null pichè non ce niente prima di lui






