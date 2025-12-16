const URL_API = 'https://dog.ceo/api';

const selettoreRazza = document.getElementById('selettoreRazza');
const contenitoreCard = document.getElementById('contenutoCard');

const recuperaRazze = async () => {

    const risposta = await fetch(`${URL_API}/breeds/list/all`);

    if (risposta.status !== 200) {
        throw new Error('Errore nel recupero delle razze');
    }

    const dati = await risposta.json();

    return dati.message;
};

recuperaRazze()
    .then(oggettoRazze => {

        const razze = Object.keys(oggettoRazze);

        razze.forEach(razza => {
            const opzione = document.createElement('option');
            opzione.value = razza;
            opzione.textContent = razza;
            selettoreRazza.appendChild(opzione);
        });

    })
    .catch(errore => console.log('Promise rifiutata:', errore.message));


selettoreRazza.addEventListener('change', () => {

    const razzaSelezionata = selettoreRazza.value;
    contenitoreCard.innerHTML = '';

    if (razzaSelezionata === '') return;

    recuperaImmaginiRazza(razzaSelezionata)
        .then(immagini => {

            immagini.forEach(urlImmagine => {

                const colonna = document.createElement('div');
                colonna.className = 'col';
                // aggiungere il controllo sulle sottorazze del cane
                colonna.innerHTML = `
                    <div class="card h-100 shadow-sm">
                        <img src="${urlImmagine}" class="card-img-top" alt="${razzaSelezionata}">
                        <div class="card-body text-center">
                            <h5 class="card-title text-capitalize">${razzaSelezionata}</h5>
                        </div>
                    </div>
                `;

                contenitoreCard.appendChild(colonna);
            });

        })
        .catch(errore => console.log('Promise rifiutata:', errore.message));
});

const recuperaImmaginiRazza = async (razza) => {

    const risposta = await fetch(`${URL_API}/breed/${razza}/images/random/12`);

    if (risposta.status !== 200) {
        throw new Error('Errore nel recupero delle immagini');
    }

    const dati = await risposta.json();

    return dati.message;
};
