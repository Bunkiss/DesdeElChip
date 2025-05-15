
/* SCROLL MENU CATEGORIAS */

const contenedor = document.querySelector('.contenedor-categorias');
const btnIzq = document.querySelector('.flecha-izq');
const btnDer = document.querySelector('.flecha-der');

const desplazamiento = 200;

btnIzq.addEventListener('click', () => {
  contenedor.scrollBy({ left: -desplazamiento, behavior: 'smooth' });
});

btnDer.addEventListener('click', () => {
  contenedor.scrollBy({ left: desplazamiento, behavior: 'smooth' });
});

