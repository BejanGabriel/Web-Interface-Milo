/* 
    Una volta ottenuto un elemento HTML, possiamo anche ottenere o assegnargli degli attributi. Per farlo, sfruttiamo i metodi getAttribute() e setAttribute(). 

    getAttribute() ci restituisce il valore dell'attributo specificato nell'argomento del metodo.
    setAttribute() ci permette di cambiare un attributo o di assegnarne uno nuovo. Richiede due argomenti: 
        - Il nome dell'attributo che ci interessa assegnare
        - Il valore che vogliamo assegnare all'attributo
*/
const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.bottleneck.it/');

const message = document.querySelector('p');

console.log(message.getAttribute('class'));
message.setAttribute('class','alert alert-success');

// Aggiungo un attributo che non è presente nel HTML e gli assegno un valore.
message.setAttribute('style', 'font-weight: bold;')

const titolo = document.querySelector('h1');

console.log(titolo);
console.log(titolo.style);

titolo.style.color = 'salmon';



