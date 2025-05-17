/* HAMBURGUER MENU */

import { inicializarMenuHamburguesa } from './scripts.js';

inicializarMenuHamburguesa('.hamburger-buttom', '.hamburger-desplegado');


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
  "../imgs/descuentosNotebooks.png",
  "../imgs/descuentosOtoñales.jpeg",
  "../imgs/descuentos50.png"
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

/* API */

async function obtenerDatosApi() {
    let response = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/');
    return await response.json();
}

/* CARGAR DATOS */

async function cargarDatosHtml() {
    let data = await obtenerDatosApi();
    let contenedorGrid = document.querySelector('.productos-grid');

    for (let producto of data) {

        let img = document.createElement('img');
        img.src = producto.image_urls[0];
        img.alt = producto.title;

        let titulo = document.createElement('h3');
        titulo.textContent = producto.title;


        let link = document.createElement('a');
        link.href = '../html/productoDetalle.html';

        // Anidar dentro del <a>
        link.appendChild(img);
        link.appendChild(titulo);

        let divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.appendChild(link);

        contenedorGrid.appendChild(divProducto);
    }
}

cargarDatosHtml();