let openBtn = document.querySelector('.open-btn');
let closeBtn = document.querySelector('.close-btn');
let menu = document.querySelector('nav ul');

openBtn.addEventListener('click', () => {
    menu.classList.add('open')
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('open')
});
// Al posto di ADD e REMOVE, si può utilizzare il toggle. Che sarebbe un interrutore che punta a un solo bottone.