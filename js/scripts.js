/* HAMBURGUER MENU */

const botonHamburger = document.querySelector('.hamburger-buttom');
const menuDesplegable = document.querySelector('.hamburger-desplegado');

botonHamburger.addEventListener('click', () => {
  const visible = menuDesplegable.style.display === 'block';
  menuDesplegable.style.display = visible ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
  if (!botonHamburger.contains(e.target) && !menuDesplegable.contains(e.target)) {
    menuDesplegable.style.display = 'none';
  }
});
