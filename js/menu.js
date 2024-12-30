console.log('menu.js conectado');

const nav = document.querySelector('.header__nav');

function showMenu() {
    nav.classList.add('visible');
    document.body.style.overflowY = 'hidden';
    overlay.style.display = 'block';
}

function closeMenu() {
    nav.classList.remove('visible');
    document.body.style.overflowY = 'auto'; 
    overlay.style.display = 'none';
}