/* SCROLL MENU CATEGORIAS (catálogo) */

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

/* CARRUSEL DE IMÁGENES */

const imagenBanner = document.getElementById("imagen-banner");
const puntos = document.querySelectorAll(".punto");

const imagenes = [
  "../imgs/IMG_4104.JPG",
  "../imgs/IMG_4104.JPG",
  ""
];

puntos.forEach((punto, index) => {
  punto.addEventListener("click", () => {
    imagenBanner.src = imagenes[index];

    puntos.forEach(p => p.classList.remove("activo"));
    punto.classList.add("activo");
  });
});

let indiceActual = 0;

function cambiarImagenAutomatica() {
  indiceActual = (indiceActual + 1) % imagenes.length;
  imagenBanner.src = imagenes[indiceActual];

  // Actualizar los puntitos visualmente
  puntos.forEach(p => p.classList.remove("activo"));
  puntos[indiceActual].classList.add("activo");
}

setInterval(cambiarImagenAutomatica, 3000);

