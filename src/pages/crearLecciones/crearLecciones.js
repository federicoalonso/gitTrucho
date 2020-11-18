document.getElementById("btn-crear-leccion").addEventListener("click", mostrarModal);
document.getElementById("btn-ocultar-modal").addEventListener("click", ocultarModal);
document.getElementById("card").addEventListener("click", function(e) {
    e.stopPropagation();
});
document.getElementById("modal").addEventListener("click", ocultarModal);
document.getElementById("imp-file").addEventListener("click", seleccionarImagen);
document.getElementById("fil-img-leccion").addEventListener("change", tomarImagen);

const impSeleccionImg = document.getElementById("fil-img-leccion");
const txtSeleccionImg = document.getElementById("imagen-seleccionada");

function mostrarModal(){
    document.getElementById("modal").classList.add("visible");
}

function ocultarModal(){
    document.getElementById("modal").classList.remove("visible");
}

function seleccionarImagen(){
    impSeleccionImg.click();
}

function tomarImagen(){
    if(impSeleccionImg.value){
        txtSeleccionImg.innerHTML = impSeleccionImg.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    } else {
        txtSeleccionImg.innerHTML = "No ha seleccionado ninguna imágen";
    }
}