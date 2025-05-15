/* IMAGENEN DE PRODUCTO Y MINIATURAS */

const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.thumb');

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function () {

        mainImage.src = this.src;

        thumbnails.forEach(t => t.classList.remove('activa'));
        this.classList.add('activa');
    });
});