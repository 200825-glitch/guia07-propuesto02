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
        <p>
            ${nombre} - ${telefono} - ${correo}
        </p>
    `;

    mensaje.textContent =
        "Contacto agregado correctamente";

    document.getElementById("nombre").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("correo").value = "";
}