/* 
    async e await sono due parole chiave introdotte recentemente che ci permettono di concatenare tra loro delle Promise in maniera facile e leggibile.

    --- E il metodo più moderno usato ad oggi ---

    Possiamo mettere tutto il nostro codice assincrono all'interno di una funzione asincrona e usare la parola chiave await all'interno per concatenare le Promise.
*/

const getPosts = async () => {

    // La fetch restituisce una promise e la parola chiave await ferma JavaScript in modo da assegnare il valore alla variabile response solo quando la Promise si risolve
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // console.log(response);

    // Lo response non ci restituisce ancora i dati, dobbiamo quindi usare il metodo json() che ci restituisce a sua volta una Promise.
    const data = await response.json();
    console.log(data);

    // // Possiamo concatenare quante Promise vogliamo
    // const response2 = await fetch('https://jsonplaceholder.typicode.com/comments');
    // const data2 = await response2.json();
    // console.log(data2);

    return data;

};

console.log(1);
console.log(2);

// Quando richiamiamo una funzione asincrona, ci viene sempre restituita una Promise
getPosts()
.then(data => console.log('Risolta:', data));

console.log(3);
