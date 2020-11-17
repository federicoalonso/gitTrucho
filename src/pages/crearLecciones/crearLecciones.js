document.getElementById("btn-crear-leccion").addEventListener("click", mostrarModal);
document.getElementById("btn-ocultar-modal").addEventListener("click", ocultarModal);

function mostrarModal(){
    document.getElementById("modal").classList.add("visible");
}

function ocultarModal(){
    document.getElementById("modal").classList.remove("visible");
}