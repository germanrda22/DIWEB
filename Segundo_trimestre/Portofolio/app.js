const hamburgerContainer = document.querySelector('#encabezado_navegacion_principal');
const hamburger = document.querySelector('.encabezado_navegacion_principal-hamburger');
const links = document.querySelectorAll('.encabezado_navegacion_principal-links li');

hamburger.addEventListener('click', () => {
  hamburgerContainer.classList.toggle('clicked');
  links.forEach((link) =>{
    link.classList.toggle('fade');
  });
});