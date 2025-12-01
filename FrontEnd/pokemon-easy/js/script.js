/*
    Creare una pagina web che abbia un menu di navigazione (che non porta da nessuna parte per il momento) e un inizio di pokedex:

    - per ogni oggetto (pokemon) deve esserci una card contenente l'immagine (o sprite) del pokemon, il suo nome e la sua abilità

    - ogni card avrà un button 'mostra info', che al click farà comparire le informazioni del pokemon in questione, farà cambiare l'immagine con quella del retro del pokemon e il testo all'interno del bottone stesso, che diventerà "Nascondi info".
*/
const pokemons = [{
    id: 0,
    nome: "Bulbasaur",
    tipo: "erba",
    abilita: "Foglielama",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    spriteSpalle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    info: "Il best boy. Abbastanza socievole se non infastidito"
}, {
    id: 1,
    nome: "Charmander",
    tipo: "fuoco",
    abilita: "Braciere",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    spriteSpalle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
    info: "In caso vada fuori controllo chiamare 112 e farsi passare i pompieri"
}, {
    id: 2,
    nome: "Squirtle",
    tipo: "acqua",
    abilita: "pistolacqua",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    spriteSpalle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
    info: "Non è un pompiere"
}, {
    id: 3,
    nome: "Pikachu",
    tipo: "elettrico",
    abilita: "tuonoshock",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    spriteSpalle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
    info: "Coloro i quali lo agganceranno al contatore saranno punibili secondo norma cod. Penale"
}];

const pokedex = document.querySelector('.pokedex');
function creaCard() {
    pokemons.forEach(pokemon => {
        const card = `<div class="col-md-6 col-lg-3">
                    <div class="card">
                        <img src="${pokemon.sprite}"
                            class="card-img-top" alt="${pokemon.nome}">
                        <div class="card-body">
                            <h5 class="card-title text-capitalize">${pokemon.nome}</h5>
                            <p class="card-text text-capitalize">
                            Tipo: ${pokemon.tipo}</p>
                            Abilità: ${pokemon.abilita}</p>     
                            <a href="#" class="btn btn-primary">Mostra info</a>
                        </div>
                    </div>
                </div>`
        pokedex.innerHTML += card;
        
    });
}
creaCard();