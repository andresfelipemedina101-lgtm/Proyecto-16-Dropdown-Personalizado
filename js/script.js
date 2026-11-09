const boton = document.getElementById("botonDesplegable");
const lista = document.getElementById("listaOpciones");
const flecha = document.getElementById("flecha");
const textoSeleccionado = document.getElementById("textoSeleccionado");

const opciones = document.querySelectorAll(".opcion");

boton.addEventListener("click", function() {

    if (lista.style.display === "block") {

        lista.style.display = "none";
        flecha.textContent = "▼";

    } else {

        lista.style.display = "block";
        flecha.textContent = "▲";

    }

});

opciones.forEach(function(opcion) {

    opcion.addEventListener("click", function() {

        textoSeleccionado.textContent = opcion.textContent;

        opciones.forEach(function(elemento) {
            elemento.classList.remove("seleccionada");
        });

        opcion.classList.add("seleccionada");

        lista.style.display = "none";
        flecha.textContent = "▼";

    });

});


// Cerrar el menu al hacer clic fuera de el
document.addEventListener("click", function(event) {

    if (!event.target.closest(".desplegable")) {

        lista.style.display = "none";
        flecha.textContent = "▼";

    }

});