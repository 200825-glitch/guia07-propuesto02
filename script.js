function agregarContacto() {

    let nombre =
        document.getElementById("nombre").value;

    let telefono =
        document.getElementById("telefono").value;

    let correo =
        document.getElementById("correo").value;

    let mensaje =
        document.getElementById("mensaje");

    if (
        nombre === "" ||
        telefono === "" ||
        correo === ""
    ) {
        mensaje.textContent =
            "Complete todos los campos";

        return;
    }

    let lista =
        document.getElementById("listaContactos");

    lista.innerHTML += `
        <div class="contacto">
            <h3>${nombre}</h3>
            <p>📞 ${telefono}</p>
            <p>✉️ ${correo}</p>

            <button onclick="eliminarContacto(this)">
                Eliminar
            </button>
        </div>
    `;

    mensaje.textContent =
        "Contacto agregado correctamente";

    document.getElementById("nombre").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("correo").value = "";

    actualizarContador();
}

function eliminarContacto(boton) {

    let confirmar =
        confirm("¿Desea eliminar este contacto?");

    if (confirmar) {

        boton.parentElement.remove();

        document.getElementById("mensaje").textContent =
            "Contacto eliminado correctamente";

        actualizarContador();
    }
}

function actualizarContador() {

    let total =
        document.querySelectorAll(".contacto").length;

    document.getElementById("contador").textContent =
        "Total contactos: " + total;
}