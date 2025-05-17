
import { inicializarMenuHamburguesa, establecerImagen, establecerTexto, establecerElementosLista, editarLink } from './scripts.js';

/* HAMBURGUER MENU */

inicializarMenuHamburguesa('.hamburger-buttom', '.hamburger-desplegado');

/* API */

async function obtenerDatosApi() {
    let response = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/1');
    return await response.json();
}

/* CARGAR DATOS */

async function cargarDatosHtml() {
    let data = await obtenerDatosApi();
    
    establecerElementosLista('lista-tipos', data.notebooksTypes);
    establecerTexto('titulo', data.title);
    establecerTexto('descripcion', data.description);
    editarLink('link-sitio-web', data.factory_url);
    establecerImagen('main-image', data.image_urls[0], data.title);
    establecerImagen('thumb1', data.image_urls[0], data.title);
    if (data.image_urls[1]) {
    establecerImagen('thumb2', data.image_urls[1], data.title);
    }
    if (data.image_urls[2]) {
    establecerImagen('thumb3', data.image_urls[2], data.title);
    }
}

cargarDatosHtml();

/* IMAGENEN DE PRODUCTO Y MINIATURAS DINÁMICAS */

const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.thumb');

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function () {

        mainImage.src = this.src;

        thumbnails.forEach(t => t.classList.remove('activa'));
        this.classList.add('activa');
    });
});