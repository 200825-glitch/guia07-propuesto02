function agregarContacto() {

    let nombre =
        document.getElementById("nombre").value;

    let lista =
        document.getElementById("listaContactos");

    lista.innerHTML += `
        <p>${nombre}</p>
    `;
}