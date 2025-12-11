const ICONA = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M262.2 48C248.9 48 236.9 56.3 232.2 68.8L216 112L120 112C106.7 112 96 122.7 96 136C96 149.3 106.7 160 120 160L520 160C533.3 160 544 149.3 544 136C544 122.7 533.3 112 520 112L424 112L407.8 68.8C403.1 56.3 391.2 48 377.8 48L262.2 48zM128 208L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 208L464 208L464 512C464 520.8 456.8 528 448 528L192 528C183.2 528 176 520.8 176 512L176 208L128 208zM288 280C288 266.7 277.3 256 264 256C250.7 256 240 266.7 240 280L240 456C240 469.3 250.7 480 264 480C277.3 480 288 469.3 288 456L288 280zM400 280C400 266.7 389.3 256 376 256C362.7 256 352 266.7 352 280L352 456C352 469.3 362.7 480 376 480C389.3 480 400 469.3 400 456L400 280z"/></svg>`;

let listaTasks = document.querySelector(".lista");
let listaElementi = listaTasks.querySelectorAll("li");
let formAggiunta = document.querySelector(".add-form");
let formRicerca = document.querySelector(".search-form");


console.log(listaElementi);
console.log(listaTasks);

// Per aggiungere una nuova task al rilevamento del submit (ENTER Key), da implementare con form.
formAggiunta.addEventListener('submit', e => {
    e.preventDefault()  // prevenire il ricaricamento della pagina al submit del form
    const nuovaTask = document.createElement("li");
    nuovaTask.textContent = `${formAggiunta.nuovaTask.value.trim()} `; // Usando la dot notation possiamo accedere all'input con name o id 'nuovaTask'
    nuovaTask.setAttribute('class', 'py-2 d-flex justify-content-between');
    // nuovaTask.setAttribute('style', 'text-transform: capitalize')
    nuovaTask.innerHTML += ICONA;
    listaTasks.append(nuovaTask);
    formAggiunta.reset(); // Pulisce il form dopo l'invio
}
);

listaTasks.addEventListener("click", e => {
    e.stopPropagation();
    console.log(e.target);

    if (e.target.tagName === 'svg') {  // A quanto pare gli elementi SVG hanno un tagName diverso, case sensitive, quindi minuscolo
        e.target.parentElement.remove();
        
    }
    if (e.target.tagName === 'path') {
        e.target.parentElement.parentElement.remove();
    }
}
);


console.log(listaElementi);

formRicerca.ricerca.addEventListener('keyup', e => {
    let listaElementi = listaTasks.querySelectorAll("li");

    const termineDiRicerca = e.target.value;

    console.log("Termine di ricerca:   " + termineDiRicerca);

    listaElementi.forEach(testo => {
        console.log("Lista su cui viene eseguita la ricerca:   --" + listaElementi);

        const testoTask = testo.innerText.toLowerCase();

        console.log("Elemento ricavato dal forEach:   --" + testo);

        console.log("TESTO DI -'LI'-  " + testoTask);

        if (testoTask.includes(termineDiRicerca)) {
            console.log("Il testo  --" + testoTask + "--  include il termine di ricerca  --" + termineDiRicerca + "-- ");
            console.log(testo.style.display)

            testo.setAttribute('class', 'py-2 d-flex justify-content-between ');

        } else {
            console.log("NON INCLUDE NIENTE");
            console.log(testo.style.display)

            testo.style.display = 'none';
            testo.setAttribute('class', 'py-2');
        }
    })
});