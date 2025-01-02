console.log('menu.js conectado');

function showMenu() {
  document.getElementById('overlay').classList.remove('hidden');
  document.getElementById('overlay').classList.add('block');
  document.getElementById('header__nav').classList.remove('max-md:left-[-400px]');
  document.getElementById('header__nav').classList.add('max-md:left-0');
}

function closeMenu() {
  document.getElementById('overlay').classList.add('hidden');
  document.getElementById('overlay').classList.remove('block');
  document.getElementById('header__nav').classList.add('max-md:left-[-400px]');
  document.getElementById('header__nav').classList.remove('max-md:left-0');
}