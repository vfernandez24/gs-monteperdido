console.log('menu.js conectado');

const nav = document.querySelector('.header_nav');
const btnMenu = document.querySelector('.header__btn');
const btnMenuI = btnMenu.querySelector('i');

function showMenu() {
    nav.classList.add('visible');
    btnMenuI.classList.toggle('fa-xmark');
    btnMenuI.classList.toggle('fa-bars');
}

function closeMenu() {
    nav.classList.remove('visible');
    btnMenuI.classList.toggle('fa-xmark');
    btnMenuI.classList.toggle('fa-bars');
}