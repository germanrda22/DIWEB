const hamburgerContainer = document.querySelector('#nav_cabecera_principal');
const hamburger = document.querySelector('.nav_cabecera_espacios');
const links = document.querySelectorAll('.nav_cabecera_principal_links li');

hamburger.addEventListener('click', () => {
  hamburgerContainer.classList.toggle('clicked');
  links.forEach((link) =>{
    link.classList.toggle('fade');
  });
});