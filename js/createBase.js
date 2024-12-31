console.log('createBase.js conectado');

const overlay = document.createElement('div');
overlay.className = 'overlay';
overlay.onclick = function() {
  closeMenu();
};
overlay.id = 'overlay';
document.body.appendChild(overlay);

const header20px = document.createElement('header');
header20px.className = 'header20px';
document.body.appendChild(header20px);

const headerFalso = document.createElement('header');
headerFalso.className = 'headerFalse';
headerFalso.innerHTML = '<li><a target="_blank" href="https://www.instagram.com/gs_monteperdido/"><i class="fa-brands fa-instagram"></i>@gs_monteperdido</a></li><li><a target="_blank" href="https://www.facebook.com/gsmonteperdido/?locale=es_ES"><i class="fa-brands fa-facebook"></i>@Grupo Scout Monte Perdido</a></li >';
document.body.appendChild(headerFalso);

const header = document.createElement('header');
header.className = 'header';
document.body.appendChild(header);

  const header__logo = document.createElement('a');
  header__logo.href = '../index.html';
  header__logo.className = 'header__logo';
  header.appendChild(header__logo);

    const header__logoImg1 = document.createElement('img');
    header__logoImg1.src = '../img/logoASDE.png';
    header__logo.appendChild(header__logoImg1);

    const header__logoImg2 = document.createElement('img');
    header__logoImg2.src = '../img/logo4-3.png';
    header__logo.appendChild(header__logoImg2);

  const header__nav = document.createElement('nav');
  header__nav.className = 'header__nav';
  header.appendChild(header__nav);

    const header__navBtn = document.createElement('button'); 
    header__navBtn.className = 'header__navBtn';
    header__navBtn.onclick = function() {
      closeMenu();
    }
    header__navBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    header__nav.appendChild(header__navBtn);

    const header__ul = document.createElement('ul');
    header__ul.className = 'header__ul';
    header__ul.innerHTML = '<li style="cursor: default;" class="header__item"><div class="header__navDiv"><i class="fa-solid fa-info"></i> INFORMACIÓN <i class="fa-solid fa-chevron-down"></i></div><ul class="header__subItem"><li><a href="./infos/monteperdido.html">Monteperdido</a></li><li><a href="./infos/manada.html">Manada</a></li><li><a href="./infos/tropa.html">Tropa</a></li><li><a href="./infos/esculta.html">Esculta</a></li></ul></li><li class="header__item"><a href="./redes.html" class="heaeder__link"><i class="fa-solid fa-hashtag"></i> REDES</a></li><li class="header__item"><a href="./tieda.html" class="heaeder__link"><i class="fa-solid fa-cart-shopping"></i> PRODUCTOS</a></li><li class="header__item"><a href="./contacto.html" class="heaeder__link"><i class="fa-solid fa-envelope"></i> CONTACTO</a></li><li class="header__item header__item--last"><a href="./contacto.html" class=" heaeder__link heaeder__link--last">ÚNETE</a></li>';
    header__nav.appendChild(header__ul);

  const header__btn = document.createElement('button');
  header__btn.className = 'header__btn';
  header__btn.onclick = function() {
    showMenu();
  }
  header__btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  header.appendChild(header__btn);