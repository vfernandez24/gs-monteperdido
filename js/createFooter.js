console.log('createFooter.js conectado');

const footer = document.createElement('footer');
footer.className = 'footer';
body.appendChild(footer);

const footerColumn1 = document.createElement('div');
  footerColumn1.className = 'footerColumn'
  footer.appendChild(footerColumn1);

    const footerA1 = document.createElement('a');
    footerA1.className = 'footerLink';
    footerA1.href = 'index.html' // CAMBIAR EN LOS HTML
    footerA1.textContent = 'Inicio';
    footerColumn1.appendChild(footerA1);
    
    const footerA2 = document.createElement('a');
    footerA2.className = 'footerLink';
    footerA2.href = 'pages/info.html' // CAMBIAR EN LOS HTML
    footerA2.textContent = 'Información';
    footerColumn1.appendChild(footerA2);

    const footerA3 = document.createElement('a');
    footerA3.className = 'footerLink';
    footerA3.href = 'pages/redes.html';
    footerA3.textContent = 'Redes';
    footerColumn1.appendChild(footerA3);

    const footerA4 = document.createElement('a');
    footerA4.className = 'footerLink';
    footerA4.href = 'pages/tienda.html';
    footerA4.textContent = 'Tienda';
    footerColumn1.appendChild(footerA4);

    const footerA5 = document.createElement('a');
    footerA5.className = 'footerLink';
    footerA5.href = 'pages/contacto.html';
    footerA5.textContent = 'Contacto';
    footerColumn1.appendChild(footerA5);

  const footerColumn2 = document.createElement('div');
  footerColumn2.className = 'footerColumn';
  footerColumn2.innerHTML = `
    <a href="mail"><i class="fa-solid fa-envelope"></i>infomonteperdido@gmail.com</a>
    <a href="https://instagram.com/gs_monteperdido"><i class="fa-brands fa-instagram"></i>Instagram</a>
    <a href="https://facebook.com"><i class="fa-brands fa-facebook"></i>Facebook</a>
    <a href=""><i class="mobile-alt"></i></a>
    <a href=""><i class="fa-solid fa-location"></i>C/ BLA BLA BLA 5, Parla, Madrid</a>
  `;
  footer.appendChild(footerColumn2);

  const footerColumn3 = document.createElement('div');
  footerColumn3.className = 'footerColumn3';
  footer.appendChild(footerColumn3);

    const footerImg1 = document.createElement('img');
    footerImg1.src = 'img/Logo 4-3.png'; //!! CAMBIAR EN LOS HTML
    footerColumn3.appendChild(footerImg1);

    const footerImg1 = document.createElement('img');
    footerImg1.src = 'img/Logo 4-3.png'; //!! CAMBIAR EN LOS HTML
    footerColumn3.appendChild(footerImg1);

const footer2 = document.createElement('footer');
footer2.className = 'footer footer--2';
footer2.textContent = '© 2024 Grupo Scout Monteperdido. Todos los derechos reservados';
body.appendChild(footer2);