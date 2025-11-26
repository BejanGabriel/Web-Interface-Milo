/*
    I metodi di un oggetto sono funzioni che sono associate a quell'oggetto. Questi metodi possono essere utilizzati per eseguire operazioni specifiche relative all'oggetto stesso. Vengono definiti come parte dell'oggetti e possono accedere alle altre priorità dell'oggetto.

    Imetodi possono essere definiti direttamente nell'oggetto usando la notazione a oggetto.

    THIS
    La parola chiave [this] è un "oggetto contestuale", cioè rappresenta il contesto nel quale il codice in cui si trova viene eseguito. All'interno di un oggetto creato da noi, fa riferimento all'oggetto stesso. Quindi il suo valore cambia in base a dove viene usata. Per esempio, se usata in contesto globale, farà riferimento all'oggetto globale, che è WINDOW.
*/
let user = {
    // le proprietà sono coppie di chiave-valore separate da virgola
    nome: 'Mario',
    eta: 30,
    email: "mario@idraulico.it",
    paese: "Italia",
    posts: ["perchè saltare in testa ai goomba?", "Come salvare una principessa in 10 passi"],


    // metodi
    login: function () {
        console.log("L'utente è loggato");
    },
    logout: function () {
        console.log("L'utente non è loggato");
    },
    // Possiamo anche abbreviare i metodi con questa sintassi
    stampaPost() {
        // console.log(posts); restituisce errore
        // console.log(user.posts); Funziona
        console.log(this.posts);
        console.log("Questo utente ha scritto i seguenti post: ");
        this.posts.forEach(post => {
            console.log(post);
        });
        

    }
};

    user.login();
    user.logout();
    user.stampaPost();

    console.log(this);


    // let dato = prompt('Inserisci un dato:'); Prompt sul browser, scomodo ma utile per debug

    // () => {'     Creato negli snip config
    //     '} 
    // F1, snip config, e li puoi scrivere, sotto forma di oggetto, tutti i comandi e anche metodi da richiamare in ogni tuo codice.


