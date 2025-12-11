/* 
    Le HTTP request sono le tipiche azioni che richiedono tempo e per le quali useremo l'assincronia.

    Spesso vorremo mostrare sulla nostra pagina dei dati che si trvano su un database o su un server (post, commenti, utenti, lista di canzoni, ecc). Utilizziamo una richiesta HTTP per raggiungere quel server o database per ottenere i dati che ci interessano e usarli come vogliamo. Per dire cosa vogliamo, facciamo delle richieste a quelli che si chiamano API endpoint, ovvero degli URL che il server rende accessibili.

    La richiesta all'endpoint ci restituisce i dati sotto forma di JSON (JavaScript Object Notation), un formato di scambio dati facilmente leggibile da macchine e umani, molto simile appunto a come vengono scritti gli oggetti in JavaScript. Nasce infatti da JS, ma è utilizzabile da tutti i linguaggi di programmazione.

    Esistono diversi tipi di richieste HTTP che indicano l'azione da eseguire:

    - GET:          per recuperare dati
    - POST:         per inviare nuovi dati
    - PUT:          per aggioranre dati esisteni
    - DELETE:       per eliminare dati
*/
// Vecchio metodo che veniva usato prima dell'arrivo del JSON, ma funziona ancora. Invia una richiesta per ottenere dei dati
const request = new XMLHttpRequest();

// redystatechange è un evento che monitora lo stato di un oggetto XMLHttpRequest durante il processo di richiesta e risposta di un API. Questo evento viene attivato ogni volta che che vambio lo stato della richiesta.
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200){
        console.log(request.responseText);
    } else if(request.readyState === 4){
        console.log(`Non sono riuscito a recuperare i dati. Errore: ${request.status}`);
    }
    
});

// Il metodo open() "prepara" la richiesta è ha bisogno di due argomenti: il tipo di richiesta da fare e dove vogliamo fare la richiesta, quindi l'endpoint.
request.open('GET','https://jsonplaceholder.typicode.com/todoss')

// Il metodo send() invia effettivamanete la richiesta

request.send();

console.log(request.responseText);
