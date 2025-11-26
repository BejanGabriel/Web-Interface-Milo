/*
    Negi array possiamo salvare valori di tutti i tipi, quindi possiamo anche creare array di oggetti.

    Quando otteniamo dati da un database, nella maggiorparte dei casi riceveremo array di oggetti. Per esempio, se richiediamo a un database una lista di film, questo ci restituirà un array di oggetti film che avranno le loro proprietà (titolo, durata, anno, attori, regista, ecc.)
*/


let user = {

    nome: 'Mario',
    eta: 30,
    email: "mario@idraulico.it",
    paese: "Italia",
    posts: [{
        title: "perchè saltare in testa ai goomba?",
        likes: 30
    },
    {
        title: "Come salvare una principessa in 10 passi",
        likes: 50
    }
    ],

    // metodi
    login: function () {
        console.log("L'utente è loggato");
    },
    logout: function () {
        console.log("L'utente non è loggato");
    },
    stampaPost() {
        console.log(this.posts);
        console.log("Questo utente ha scritto i seguenti post: ");
        this.posts.forEach(post => {
            console.log(`Titolo: "${post.title}" -  ${post.likes} Likes`);
        });

    }
};

user.stampaPost();

/* -------------------------------- Esercizio ------------------------------- */
/*
    Progettare l'array di oggetti canzone, ognuna con le proprietà titolo, band e anno. Fare inserire una nuova canzone all'utente attraverso un prompt. Visualizzare il nuovo oggetto costruito
*/

let canzoni = JSON.parse(localStorage.getItem("canzoni")) || [
    {
        titolo: "Esibizionista",
        band: "Annalisa",
        anno: "E che ne so"
    },
    {
        titolo: "Torna Catalessi",
        band: "Caparezza",
        anno: "E che ne so"
    }
];
// Creo nuova canzone
function aggiungiCanzone() {
    let nuovaCanzone = {
        titolo: prompt("Inserisci titolo Canzone:"),
        band: prompt("Inserisci band Canzone:"),
        anno: prompt("Inserisci anno produzione:")
    }
    // Inserisco la nuova canzone nell'array
    canzoni.push(nuovaCanzone);
}

// Salvo l'array aggiornato nel localStorage
function salvaCanzone(canzoni) {
    localStorage.setItem("canzoni", JSON.stringify(canzoni));
}
// Stampo lista canzoni
function stampaCanzoni(canzoni) {
    canzoni.forEach(canzone => {
        console.log(`Titolo: "${canzone.titolo}" - Band "${canzone.band}" - Anno "${canzone.anno}"`);

    });
}

aggiungiCanzone();
stampaCanzoni();