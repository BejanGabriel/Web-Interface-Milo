/*
    Gli array ci permettono di memorizzare una collezione di valori correlati fra loro.
    Sono oggetti 0-based.

    - Le parentesi quadre indicano l'inizio e la fine dell'array.
    - Ogni elemento è separato da una virgola.
*/

let studenti = ["Agamennone", "Achille", "Patroloco", "Elena", "Ettore"];
console.log(studenti);

// Si può estrare un singolo elemento specifico utilizzando la braket notation, andando a richiamare l'indice dell'elemento.
let primoStud = studenti[0];
let terzoStud = studenti[2];

console.log(primoStud, terzoStud);

/* ---------------------------- Proprietà Length ---------------------------- */

// Possiamo risalire alla lunghezza di un array, ovvero al numero di elementi al suo interno, tramite la proprietà length

let numStud = studenti.length;
console.log("Ci sono : " + numStud + " studenti");


/* -------------------------------------------------------------------------- */
/*                             Metodi degli array                             */
/* -------------------------------------------------------------------------- */

/* ---------------------------- Cambiare elementi --------------------------- */
// Si può usare la bracket notation per cambiare il valore di un elemento
studenti[1] = "Cassandra";
console.log(studenti);

/* --------------------------- Aggiungere elementi -------------------------- */
// Possiamo aggiungere elementi alla FINE di un array
studenti.push("Odisseo", "Paride")
console.log(studenti);

// Possiamo aggiungere elementi all'INIZIO di un Array
studenti.unshift("Aiace");
console.log(studenti);

/* --------------------------- Rimuovere elementi --------------------------- */
// Rimuovere l'ULTIMO elementi di un array
studenti.pop();
console.log(studenti);

// Rimuovere il PRIMO elementi di un array
studenti.shift();
console.log(studenti);

/* ---------------------------------- Join ---------------------------------- */
// Prende gli elementi di un array e li unisce all'interno di una stringa separati dal carattere o
// caratteri che gli passiamo tra parentesi tonde
let allStudenti = studenti.join(", ");
console.log(allStudenti);


/* --------------------------------- indexOf -------------------------------- */
// Come per le stringhe, possiamo risalire all'indice di un elemento
console.log(studenti.indexOf("Cassandra"));

/* --------------------------------- concat --------------------------------- */
// Prende un array e ne concatena un altro
let studentiAggiornato = studenti.concat(["Circe", "Penelope"]);
console.log(studentiAggiornato);



/* -------------------------------------------------------------------------- */
/*                                  Esercizio                                 */
/* -------------------------------------------------------------------------- */
/*
    Scontrino della spesa

    - Creare due array
        - Il primo contiene la lista dei prodotti da comprare
        - Il secondo i prezzi dei prodotti

    - Stampare in console il secondo elementi dell'array e il suo prezzo
    - Popolare lo scontrino che sarà un UL con id scontrino con un list item per ogni prodotto e il suo costo

    - Costruire un elemento P nel quale verrà stampato il subTotale, cioè il totale senza iva.

    - Costruire un elemento P nel quale verrà stampata l'iva (22%)

    - Calcolare il totale dei prezzi compreso di iva e scriverlo nel paragrafo con id totale

    MINIMO 8 prodotti
*/

// let scontrino = document.getElementById("scontrino");
// let P = document.getElementById("totale");


// const SELETTORE = 1;

// let IVA = 22;
let prodotti = ["Caffe Borbone 200g", "Flauti Mulino Bianco 150g", "Birra Guiness 90ml", "Cotto Rovagnati 200g", "Latte Intero Centrale 100ml", "Monster 500ml", "Stracchino Nonno Nanni 100g", "Prezzemolo 100g"];
let prezzi = [4.99, 3.49, 3.49, 4.99, 1.99, 2.49, 2.99, 1];

// console.log("Nome: " + prodotti[SELETTORE] + "| prezzo: " + prezzi[SELETTORE]);
// let subTot = 0;
// for(let i = 0; i < prodotti.length; i++){
//     scontrino.innerHTML += `<li><span>${prodotti[i]}</span> <span> ${prezzi[i].toFixed(2)} €</span></li>`;
//     subTot += prezzi[i];
// }
// let prezzoIva = subTot * IVA / 100;
// let totale = prezzoIva+subTot
// console.log(scontrino);


// P.innerHTML = `<span>Sub Totale: ${subTot} €  </span>`;
// P.innerHTML += `<span>Iva ${IVA}%: ${prezzoIva.toFixed(2)} €  </span>`;
// P.innerHTML += `<span><strong>Totale: € ${totale.toFixed(2)} €</strong> </span>`;

/* ---------------------------- Proposta di Milo ---------------------------- */
let user = document.getElementById("heading-scontrino")
let elScontrino = document.getElementById("scontrino");
let elsubTotale = document.getElementById("subtotale");
let elIva = document.getElementById("iva");
let elTotale = document.getElementById("totale");
let elBtnTema = document.getElementById("tema");
let elBody = document.getElementById("body");

let subtotale = 0;

for (let i = 0; i < prodotti.length; i++) {
    elScontrino.innerHTML += `<li><span class="prodotto">${prodotti[i]}</span> <span class="prezzo">${prezzi[i].toFixed(2)}€</span></li>`

    subtotale += prezzi[i];
}

elsubTotale.innerHTML = `<strong>Subtotale:</strong> ${subtotale}€`;

let iva = subtotale * 0.22;
elIva.innerHTML = `<strong>Iva (22%):</strong> ${iva.toFixed(2)}€`;

let totale = subtotale + iva;
elTotale.innerHTML = `<strong>Totale:</strong> ${totale.toFixed(2)}€`;

/* -------------- Sbagliato, se hai tempo riguardalo e risolvi -------------- */

// elBtnTema.addEventListener("click", () => {
//     if (elBody.getAttribute("data-bs-theme") === "dark") {
//         elBody.setAttribute("data-bs-theme", "light");
//         elBtnTema.innerHTML = `       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>`
//     } else {
//         elBody.setAttribute("data-bs-theme", "dark");
//         elBtnTema.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
//                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
//                             class="lucide lucide-sun-icon lucide-sun">
//                             <circle cx="12" cy="12" r="4" />
//                             <path d="M12 2v2" />
//                             <path d="M12 20v2" />
//                             <path d="m4.93 4.93 1.41 1.41" />
//                             <path d="m17.66 17.66 1.41 1.41" />
//                             <path d="M2 12h2" />
//                             <path d="M20 12h2" />
//                             <path d="m6.34 17.66-1.41 1.41" />
//                             <path d="m19.07 4.93-1.41 1.41" />
//                         </svg>
// `
//     }
// });

elBtnTema.addEventListener("click", () => {
    if (elBody.getAttribute("data-bs-theme") === "dark") {
        elBody.setAttribute("data-bs-theme", "light");
    } else {
        elBody.setAttribu
        te("data-bs-theme", "dark");
    }
    let iconaSole = elBtnTema.querySelector(".lucid-sun")
    let iconaLuna = elBtnTema.querySelector("lucide-moon");

    iconaLuna.classList.toggle("d-none");
    iconaSole.classList.toggle("d-none");
});