/* 
    Una Promise è un qualcosa che rappresenta un'operazione asincrona e il suo eventuale completamento (o fallimento) nel futuro.

    Una Promise può trovarsi in uno dei seguenti tre stati:
        - Pending (in attesa):      lo stato iniziale, nè completo nè rifiutato.
        - Fulfilled (completato):   l'operazione è stata completata con successo.
        - Rejected (rifiutata):     l'operazione è fallita.
*/

const getTodos = (risorasa) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();




        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                // Prima di tutto trasformiamo il JSON in un array di oggetti JS
                let data = JSON.parse(request.responseText)
                resolve(data);
            } else if (request.readyState === 4) {
                reject('Non sono riuscito a recuperare i dati')
            }

        })

        request.open('GET', risorsa);
        request.send();
    });
};

getTodos('https://jsonplaceholder.typicode.com/todos')
.then(data => {
    console.log('Promise risolta: ', data);
    
})
.catch(err => {
    console.log('Promise rifiutata', err);
    
});

// Esempio di promise
const getQualcosa = () => {
    // La promise accetta come parametro una funzione che a sua volta ci dà accesso ad altri due parametri: resolve e reject. Questi sono funzioni già pronte all'interno della Promise.
    return new Promise((resolve, reject) => {
        // recuperiamo qualcosa
        resolve('Dati recuperati'); // Nella resolve passiamo i dati recuperati
        reject('Errore'); // Nella reject passiamo l'errore nel caso si presenti
    })
};

// Richiamando la funzione restituiamo la Promise, che dice "farò qualcosa a un certo punto che potrà risolversi o venir rifiutata". Quindi utilizziamo il metodo then() per dire cosa deve succedere quando la Promise si risolve e prende come parametro due funzioni. La prima nel caso in cui la Promise si risolve e la seconda in caso venga rifiutata.
getQualcosa().then((data) => {
    console.log(data);

}, (err) => {
    console.log(err);

});

// Esiste un metodo più chiaro per scrivere tutto questo utilizzando il metodo catch() che partirà nel caso in cui la Promise venga rifiutata.

getQualcosa()
    .then(data => console.log(data))
    .catch(err => console.log(err));
