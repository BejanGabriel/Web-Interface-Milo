/* 
    Possiamo lanciare errori custom nelle nostre funzioni asincrone. 

    Se c'è un errore nel JSON il catch lo trova e lo capisce, ma se l'errore è nella fetch, abbiamo visto che non viene lanciato un errore, perchè la Promise viene risolta comunque. Otteniamo un errore in seguito quando cerchiamo di parsare dati che non sono stati recuperati.

    Quindi dobbiamo controllare manualmente che la response abbia uno status di 200 per essere sicuri che vada tutto a buon fine. In caso contrario "laciamo" un errore con la parola chiave throw seguita dalla creazione di un nuovo oggetto errore. Questo verrà preso dal catch().
*/
const getPosts = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if(response.status !== 200){
        throw new Error('non sono riuscito a fetchare i dati');
    }

    const data = await response.json();

    return data;

};

getPosts()
.then(data => {
    console.log('Risolta:', data)
    data.forEach(post => {
        console.log(post.title);
        // da qui si può inserire tutti i dati con i soliti comando studiati. Creare tabelle Bootstrap 
        
    })
})
.catch(err => console.log('Rifiutata:', err.message)
);
