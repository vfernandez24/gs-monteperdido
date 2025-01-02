console.log('createBase.js conectado');

const overlay = document.createElement('div');
overlay.className = 'w-[100vw] h-full bg-[rgba(0,0,0,.5)] fixed top-0 left-0 z-3 hidden cursor-pointer';
overlay.onclick = function() {
  closeMenu();
};
overlay.id = 'overlay';
document.body.appendChild(overlay);

const header20px = document.createElement('header');
header20px.className = 'bg-primary2 h-[20px]';
document.body.appendChild(header20px);

const headerFalso = document.createElement('header');
headerFalso.className = 'absolute top-0 left-0 z-10 w-full h-[90px] bg-primary2 flex justify-end gap-5 pr-[1%]';
headerFalso.innerHTML = '<li class="list-none w-fit h-5 flex items-center justify-center"><a class="text-background no-underline text-sm font-normal w-fit h-7 flex items-center justify-center leading-[30px] transition-all ease-in-out duration-300 hover:text-secondary" target="_blank" href="https://www.instagram.com/gs_monteperdido/"><i class="fa-brands fa-instagram mr-1 text-current transition-all ease-in-out duration-300"></i>@gs_monteperdido</a></li><li class="list-none w-fit h-5 flex items-center justify-center"><a class="text-background no-underline text-sm font-normal w-fit h-7 flex items-center justify-center leading-[30px] transition-all ease-in-out duration-300 hover:text-secondary" target="_blank" href="https://www.facebook.com/gsmonteperdido/?locale=es_ES"><i class="fa-brands fa-facebook mr-1 text-current transition-all ease-in-out duration-300"></i>@Grupo Scout Monte Perdido</a></li>';
document.body.appendChild(headerFalso);

const header = document.createElement('header');
header.className = 'h-[70px] w-full flex justify-between px-5 items-center sticky top-0 left-0 z-40 bg-primary2';
document.body.appendChild(header);

  const header__logo = document.createElement('a');
  header__logo.href = '../index.html';
  header__logo.className = 'h-[70px] flex justify-center align-center gap-[20px]';
  header.appendChild(header__logo);

    const header__logoImg1 = document.createElement('img');
    header__logoImg1.src = '../img/logoASDE.png';
    header__logoImg1.className = 'h-[100%]';
    header__logo.appendChild(header__logoImg1);

    const header__logoImg2 = document.createElement('img');
    header__logoImg2.src = '../img/logo4-3.png';
    header__logoImg2.className = 'h-[100%]';
    header__logo.appendChild(header__logoImg2);

  const header__nav = document.createElement('nav');
  header__nav.className = 'w-fit h-full';
  header.appendChild(header__nav);

    const header__navBtn = document.createElement('button'); 
    header__navBtn.className = 'hidden';
    header__navBtn.onclick = function() {
      closeMenu();
    }
    header__navBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    header__nav.appendChild(header__navBtn);

    const header__ul = document.createElement('ul');
    header__ul.className = 'w-full h-full flex justify-center items-center gap-[30px]';
    header__nav.appendChild(header__ul);

  const header__btn = document.createElement('button');
  header__btn.className = 'hidden';
  header__btn.onclick = function() {
    showMenu();
  }
  header__btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  header.appendChild(header__btn);