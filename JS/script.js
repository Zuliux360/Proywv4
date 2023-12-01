// Sample data for the cards
const cardData = [
    {   id: 1,
        title: "Tapabocas",
        image: "/img/1..jpg",
        description: "Quirurjico",
        precio:10000,
        cantidad: 50,
        link: "#"
    },
    {   id: 2,
        title: "Bonbon bum",
        image: "/img/2..jpg",
        description: "sabor fresa",
        precio:10000,
        cantidad: 50,
        link: "#"
    },
    {   id: 3,
        title: "jumbo",
        image: "/img/3..jpg",
        description: "contienen chocolate y mani cero azucar",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 4,
        title: "speed max",
        image: "/img/4..png",
        description: "levante muerto",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 5,
        title: "cigarrillo",
        image: "/img/5..jpg",
        description: "mata pulmon",
        precio:10000,
        cantidad: 10,
        link: "#"
    },
    {   id: 6,
        title: "scott",
        image: "/img/6..jpg",
        description: "PH TRIPLE HOJA",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 7,
        title: "patojito",
        image: "/img/7..png",
        description: "limpido",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 8,
        title: "fab",
        image: "/img/8..jpg",
        description: "limpeza profunda",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 9,
        title: "cepillo",
        image: "/img/9..png",
        description: "colgate",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 10,
        title: "agua",
        image: "/img/10.jpg",
        description: "cristal",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 11,
        title: "Tapabocas",
        image: "/img/11..jpg",
        description: "Quirurjico",
        precio:10000,
        cantidad: 50,
        link: "#"
    },
    {   id: 12,
        title: "Bonbon bum",
        image: "/img/12..jpg",
        description: "sabor fresa",
        precio:10000,
        cantidad: 50,
        link: "#"
    },
    {   id: 13,
        title: "jumbo",
        image: "/img/13..png",
        description: "contienen chocolate y mani cero azucar",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 14,
        title: "speed max",
        image: "/img/14..jpg",
        description: "levante muerto",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 15,
        title: "cigarrillo",
        image: "/img/15..jpg",
        description: "mata pulmon",
        precio:10000,
        cantidad: 10,
        link: "#"
    },
    {   id: 16,
        title: "scott",
        image: "/img/16..jpg",
        description: "PH TRIPLE HOJA",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 17,
        title: "patojito",
        image: "/img/17..jpg",
        description: "limpido",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 18,
        title: "fab",
        image: "/img/18..png",
        description: "limpeza profunda",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 19,
        title: "cepillo",
        image: "/img/19..jpg",
        description: "colgate",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 20,
        title: "agua",
        image: "/img/20..jpg",
        description: "cristal",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 21,
        title: "Tapabocas",
        image: "/img/21..jpg",
        description: "Quirurjico",
        precio:10000,
        cantidad: 50,
        link: "#"
    },
    {   id: 22,
        title: "Bonbon bum",
        image: "/img/22..jpg",
        description: "sabor fresa",
        precio:10000,
        cantidad: 50,
        link: "#"
    },
    {   id: 23,
        title: "jumbo",
        image: "/img/23..jpg",
        description: "contienen chocolate y mani cero azucar",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 24,
        title: "speed max",
        image: "/img/24..jpg",
        description: "levante muerto",
        precio:10000,    
        cantidad: 1,
        link: "#"
    },
    {   id: 25,
        title: "cigarrillo",
        image: "/img/25..jpg",
        description: "mata pulmon",
        precio:10000,
        cantidad: 10,
        link: "#"
    },
    {   id: 26,
        title: "scott",
        image: "/img/26..jpg",
        description: "PH TRIPLE HOJA",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 27,
        title: "patojito",
        image: "/img/27..jpg",
        description: "limpido",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 28,
        title: "fab",
        image: "/img/28..png",
        description: "limpeza profunda",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 29,
        title: "cepillo",
        image: "/img/29..jpg",
        description: "colgate",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 30,
        title: "agua",
        image: "/img/30..jpg",
        description: "cristal",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 31,
        title: "Tapabocas",
        image: "/img/31..jpg",
        description: "Quirurjico",
        precio:10000,
        cantidad: 50,
        link: "#"
    },
    {   id: 32,
        title: "Bonbon bum",
        image: "/img/32..jpg",
        description: "sabor fresa",
        precio:10000,
        cantidad: 50,
        link: "#"
    },
    {   id: 33,
        title: "jumbo",
        image: "/img/33..jpg",
        description: "contienen chocolate y mani cero azucar",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 34,
        title: "speed max",
        image: "/img/34..png",
        description: "levante muerto",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 35,
        title: "cigarrillo",
        image: "/img/35..jpg",
        description: "mata pulmon",
        precio:10000,
        cantidad: 10,
        link: "#"
    },
    {   id: 36,
        title: "scott",
        image: "/img/36..jpg",
        description: "PH TRIPLE HOJA",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 37,
        title: "patojito",
        image: "/img/37..jpg",
        description: "limpido",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 38,
        title: "fab",
        image: "/img/38..jpg",
        description: "limpeza profunda",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 39,
        title: "cepillo",
        image: "/img/39..jpg",
        description: "colgate",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 40,
        title: "agua",
        image: "/img/40..jpg",
        description: "cristal",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 41,
        title: "Tapabocas",
        image: "/img/41..jpg",
        description: "Quirurjico",
        precio:10000,
        cantidad: 50,
        link: "#"
    },
    {   id: 42,
        title: "Bonbon bum",
        image: "/img/42..jpg",
        description: "sabor fresa",
        precio:10000,
        cantidad: 50,
        link: "#"
    },
    {   id: 43,
        title: "jumbo",
        image: "/img/43..jpeg",
        description: "contienen chocolate y mani cero azucar",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 44,
        title: "speed max",
        image: "/img/44..jpeg",
        description: "levante muerto",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 45,
        title: "cigarrillo",
        image: "/img/45..jpg",
        description: "mata pulmon",
        precio:10000,
        cantidad: 10,
        link: "#"
    },
    {   id: 46,
        title: "scott",
        image: "/img/46..png",
        description: "PH TRIPLE HOJA",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 47,
        title: "patojito",
        image: "/img/47..jpg",
        description: "limpido",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 48,
        title: "fab",
        image: "/img/48..jpg",
        description: "limpeza profunda",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 49,
        title: "cepillo",
        image: "/img/49..jpg",
        description: "colgate",
        precio:10000,
        cantidad: 1,
        link: "#"
    },
    {   id: 50,
        title: "agua",
        image: "/img/50..jpg",
        description: "cristal",
        precio:10000,
        cantidad: 1,
        link: "#"
    }
];
const itemsPerPage = 10;
let currentPage = 1;
// Function to create HTML elements for each card and append them to the container
function updateCardInContainer(id) {
    const cardElement = document.querySelector(`#cardContainer .card[data-id="${id}"]`);
    const updatedCard = cardData.find(card => card.id === id);
    

    // Update the card content
    cardElement.querySelector("img").src = updatedCard.image;
    cardElement.querySelector("img").alt = updatedCard.title;
    cardElement.querySelector("h3").textContent = updatedCard.title;
    cardElement.querySelector("p:nth-child(2)").textContent = `Descripcion: ${updatedCard.description}`;
    cardElement.querySelector("p:nth-child(3)").textContent = `Precio: ${updatedCard.precio}`;
    cardElement.querySelector("p:nth-child(4)").textContent = `Cantidad: ${updatedCard.cantidad}`;
    // Update other properties as needed
}

// ... (existing code)

function aplicarFiltro() {
    const filtroTitulo = document.getElementById("filtroTitulo").value.toLowerCase();
    const filtroDescripcion = document.getElementById("filtroDescripcion").value.toLowerCase();

    const filteredData = cardData.filter(card => {
        const tituloLowerCase = card.title.toLowerCase();
        const descripcionLowerCase = card.description.toLowerCase();

        return tituloLowerCase.includes(filtroTitulo) && descripcionLowerCase.includes(filtroDescripcion);
    });

    // Update cardData with the filtered data
    cardData.length = 0;
    Array.prototype.push.apply(cardData, filteredData);

    // Reset the current page to 1 and recreate the cards
    currentPage = 1;
    createCards();
}

function limpiarFiltro() {
    document.getElementById("filtroTitulo").value = "";
    document.getElementById("filtroDescripcion").value = "";

    // Restore the original cardData
    cardData.length = 0;
    Array.prototype.push.apply(cardData, originalCardData);

    // Reset the current page to 1 and recreate the cards without filters
    currentPage = 1;
    createCards();

     // Redirigir a la página principal
     window.location.href = "main.html";
}




function createCards() {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    for (let i = startIndex; i < endIndex && i < cardData.length; i++) {
        const card = cardData[i];
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.setAttribute("data-id", card.id);

        cardElement.innerHTML = `
            <figure>
                <img src="${card.image}" alt="${card.title}">
            </figure>
            <div class="contenido-card">
                <h3>Titulo:${card.title}</h3>
                <p>Descripcion: ${card.description}</p>
                <p>Precio: ${card.precio}</p>
                <p>Cantidad: ${card.cantidad}</p>
                <button class="ver-detalle-btn" onclick="verDetalle(${card.id})">Ver Detalle</button>
                <a href="${card.link}">Leer Más</a>
            </div>
        `;
        cardContainer.appendChild(cardElement);
    }

    updatePagination(); // Now, call this function after creating the cards
}
function updatePagination() {
    const totalPages = Math.ceil(cardData.length / itemsPerPage);
    const currentPageElement = document.getElementById("currentPage");
    currentPageElement.textContent = currentPage;

    const totalItemsElement = document.getElementById("totalItems");
    totalItemsElement.textContent = cardData.length;

    const itemsRemainingElement = document.getElementById("itemsRemaining");
    const remainingItems = cardData.length - (currentPage - 1) * itemsPerPage;
    itemsRemainingElement.textContent = Math.max(0, remainingItems);

    const prevPageButton = document.getElementById("prevPage");
    const nextPageButton = document.getElementById("nextPage");

    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === totalPages;
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        createCards();
    }
}

function nextPage() {
    const totalPages = Math.ceil(cardData.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        createCards();
    }
}

function verDetalle(id) {
    const tarjetaDetalle = document.getElementById("tarjetaDetalle");
    const loadingMessage = "Cargando...";

    tarjetaDetalle.innerHTML = `<p>${loadingMessage}</p>`;
    tarjetaDetalle.style.display = "block";

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    delay(1500)
        .then(() => {
            const selectedCard = cardData.find(card => card.id === id);
            tarjetaDetalle.innerHTML = `
                <img src="${selectedCard.image}" alt="${selectedCard.title}">
                <div class="contenido-detalle">
                    <h3>${selectedCard.title}</h3>
                    <p>Descripcion: <span id="descripcionDetalle">${selectedCard.description}</span></p>
                    <p>Precio: <span id="PrecioDetalle">${selectedCard.precio}</span></p>
                    <p>Cantidad: <span id="cantidadDetalle">${selectedCard.cantidad}</span></p>
                    <button class="ver-detalle-btn" onclick="editarDetalle(${selectedCard.id})">Editar</button>
                    <button  class="ver-detalle-btn" onclick="volverAInicio()">Salir</button>
                </div>
            `;
        })
        .catch(error => {
            // Handle errors if necessary
            console.error("Error:", error);
            tarjetaDetalle.innerHTML = `<p>Error al cargar los detalles</p>`;
        });
}


function volverAInicio() {
    const tarjetaDetalle = document.getElementById("tarjetaDetalle");
    // Reset the content of tarjetaDetalle
    tarjetaDetalle.innerHTML = "";
    // Hide tarjetaDetalle
    tarjetaDetalle.style.display = "none";
}
function editarDetalle(id) {
    const descripcionDetalle = document.getElementById("descripcionDetalle");
    const PrecioDetalle = document.getElementById("PrecioDetalle");
    const cantidadDetalle = document.getElementById("cantidadDetalle");

    // Save the original values for potential cancellation
    const originalDescripcion = descripcionDetalle.innerText.trim();
    const originalPrecio = PrecioDetalle.innerText.trim();
    const originalCantidad = cantidadDetalle.innerText.trim();

    // Create and append input fields if not already added
    if (descripcionDetalle.children.length === 0) {
        const descripcionInput = document.createElement("input");
        descripcionInput.type = "text";
        descripcionInput.value = originalDescripcion;
        descripcionDetalle.innerHTML = "";
        descripcionDetalle.appendChild(descripcionInput);

        const cantidadInput = document.createElement("input");
        cantidadInput.type = "text";
        cantidadInput.value = originalCantidad;
        cantidadDetalle.innerHTML = "";
        cantidadDetalle.appendChild(cantidadInput);

        const precioInput = document.createElement("input");
        precioInput.type = "text";
        precioInput.value = originalPrecio;
        PrecioDetalle.innerHTML = "";  // Fix variable name
        PrecioDetalle.appendChild(precioInput);

        const editarButton = document.querySelector("button[onclick*='editarDetalle']");
        editarButton.innerText = "Guardar";
        editarButton.removeEventListener("click", editarDetalle);
        editarButton.addEventListener("click", function() {
            guardarCambios(id, descripcionInput.value, cantidadInput.value, precioInput.value);
        });

        // Add a cancel button for reverting changes
        const cancelarButton = document.createElement("button");
        cancelarButton.innerText = "Cancelar";
        cancelarButton.addEventListener("click", function() {
            // Restore original values and reset the view
            descripcionDetalle.innerHTML = `<span>${originalDescripcion}</span>`;
            cantidadDetalle.innerHTML = `<span>${originalCantidad}</span>`;
            PrecioDetalle.innerHTML = `<span>${originalPrecio}</span>`;
            editarButton.innerText = "Editar";
            editarButton.removeEventListener("click", guardarCambios);
            editarButton.addEventListener("click", function() {
                editarDetalle(id);
            });
        });
        cantidadDetalle.appendChild(cancelarButton);
    }
}


function guardarCambios(id, nuevaDescripcion, nuevaCantidad, nuevoPrecio) {
    const editedCard = cardData.find(card => card.id === id);
    editedCard.description = nuevaDescripcion;
    editedCard.cantidad = nuevaCantidad;
    editedCard.precio = nuevoPrecio;

    // Update the details view immediately
    const tarjetaDetalle = document.getElementById("tarjetaDetalle");
    const selectedCard = cardData.find(card => card.id === id);
    tarjetaDetalle.innerHTML = `
        <img src="${selectedCard.image}" alt="${selectedCard.title}">
        <div class="contenido-detalle">
            <h3>${selectedCard.title}</h3>
            <p>Descripcion: <span id="descripcionDetalle">${selectedCard.description}</span></p>
            <p>Precio: <span id="precioDetalle">${selectedCard.precio}</span></p>
            <p>Cantidad: <span id="cantidadDetalle">${selectedCard.cantidad}</span></p>
            <button class="ver-detalle-btn" onclick="editarDetalle(${selectedCard.id})">Editar</button>
            <button class="ver-detalle-btn" onclick="volverAInicio()">Salir</button>
        </div>
    `;

    // Update the specific card in the cardContainer
    updateCardInContainer(id); // This line was missing in your original code
}



// Call the function to create the cards when the page loads
window.onload = createCards;
