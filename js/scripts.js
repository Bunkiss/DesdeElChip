/* HAMBURGUER MENU */

export function inicializarMenuHamburguesa(botonSelector, menuSelector) {
  const botonHamburger = document.querySelector(botonSelector);
  const menuDesplegable = document.querySelector(menuSelector);

  if (!botonHamburger || !menuDesplegable) return;

  botonHamburger.addEventListener('click', () => {
    const visible = menuDesplegable.style.display === 'block';
    menuDesplegable.style.display = visible ? 'none' : 'block';
  });

  document.addEventListener('click', (e) => {
    if (!botonHamburger.contains(e.target) && !menuDesplegable.contains(e.target)) {
      menuDesplegable.style.display = 'none';
    }
  });
}

/* EDITAR CONTENEDORES */

export function establecerTexto(idElemento, texto) {
    document.getElementById(idElemento).textContent = texto;
}

export function establecerImagen(idElemento, urlImagen, alt) {
    let imagen = document.getElementById(idElemento);
    imagen.src = urlImagen;
    imagen.alt = alt;
}

export function editarLink(idElemento, url) {
    let link = document.getElementById(idElemento);
    link.href = url;
}

export function establecerElementosLista(idLista, tiposNotebook) {
    const lista = document.getElementById(idLista);

    for (let tipo of tiposNotebook) {
        const li = document.createElement('li');

        // Texto para la descripción de RAM
        const textoRam = document.createTextNode(`${tipo.ramAmount} de RAM, `);
        li.appendChild(textoRam);

        // Nodo con estilo para el precio
        const spanPrecio = document.createElement('span');
        spanPrecio.classList.add('precio');
        spanPrecio.textContent = `$${tipo.price.toLocaleString()}`;
        li.appendChild(spanPrecio);

        lista.appendChild(li);
    }
}
