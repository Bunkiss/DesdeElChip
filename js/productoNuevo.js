import { inicializarMenuHamburguesa } from './scripts.js';

/* HAMBURGUER MENU */

inicializarMenuHamburguesa('.hamburger-buttom', '.hamburger-desplegado');

/* FORM POST */

document.getElementById("productForm").addEventListener("submit", function (event) {
    event.preventDefault();  // Prevenir el envío del formulario

    // Limpiar el mensaje de error
    document.getElementById("error-message").textContent = "";

    // Obtener los valores de los campos
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const image_url = document.getElementById("image_url").value.trim();
    const factory_url = document.getElementById("factory_url").value.trim();
    const features = getFeatures();

    // Validar que no haya campos vacíos
    if (!title || !description || !image_url || !factory_url || features.length === 0) {
        document.getElementById("error-message").textContent = "Todos los campos son obligatorios, y debe haber al menos una característica.";
        return;
    }

    // Crear un objeto para los datos
    const productData = {
        title: title,
        description: description,
        image_url: image_url,
        factory_url: factory_url,
        features: features
    };

    // Enviar los datos a través de un POST (por ejemplo, con fetch)
    fetch('https://crudcrud.com/api/673f60ebcfef4920a10bff3ddb8db028/notebooks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
    .then(response => response.json())
    .then(data => {
        // Mostrar los datos enviados en la página
        displayData(productData);
    })
    .catch(error => {
        console.error('Error al enviar los datos:', error);
        document.getElementById("error-message").textContent = "Hubo un error al enviar los datos.";
    });
});

// Función para obtener las características
function getFeatures() {
    const featureElements = document.querySelectorAll(".feature");
    const features = [];

    featureElements.forEach(featureElement => {
        const name = featureElement.querySelector(".feature-name").value.trim();
        const description = featureElement.querySelector(".feature-description").value.trim();
        if (name && description) {
            features.push({ name: name, description: description });
        }
    });

    return features;
}

// Función para agregar una nueva característica
document.getElementById("addFeatureBtn").addEventListener("click", function addFeature() {
    const featuresContainer = document.getElementById("features");

    const featureDiv = document.createElement("div");
    featureDiv.classList.add("feature");
    featureDiv.innerHTML = `
        <input type="text" placeholder="Feature Name" class="feature-name">
        <input type="text" placeholder="Feature Description" class="feature-description">
    `;

    featuresContainer.appendChild(featureDiv);
});

// Función para mostrar los datos enviados
function displayData(data) {
    const dataDisplay = document.getElementById("dataDisplay");
    dataDisplay.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.description}</p>
        <img src="${data.image_url}" alt="Product Image" width="200">
        <p><a href="${data.factory_url}" target="_blank">Visit Factory</a></p>
        <h4>Features:</h4>
        <ul>
            ${data.features.map(feature => `<li><strong>${feature.name}:</strong> ${feature.description}</li>`).join('')}
        </ul>
    `;
}
