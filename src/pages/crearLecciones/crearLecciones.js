import Sistema from '../../js/sistema.js';

document.getElementById("btn-crear-leccion").addEventListener("click", mostrarModal);
document.getElementById("btn-ocultar-modal").addEventListener("click", ocultarModal);
document.getElementById("card").addEventListener("click", function(e) {
    e.stopPropagation();
});
document.getElementById("modal").addEventListener("click", ocultarModal);
document.getElementById("imp-file").addEventListener("click", seleccionarImagen);
document.getElementById("fil-img-leccion").addEventListener("change", tomarImagen);
document.getElementById("btn-guardar").addEventListener("click", guardarLeccion);

const impSeleccionImg = document.getElementById("fil-img-leccion");
const txtSeleccionImg = document.getElementById("imagen-seleccionada");
const syst = new Sistema();

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

function guardarLeccion(){
    let nombre = document.getElementById("txt-nombre-leccion").value;
    let descripcion = document.getElementById("txt-descripcion-leccion").value;
    let tablatura = document.getElementById("txt-tablatura-leccion").value;

    if(nombre && descripcion && tablatura && impSeleccionImg.value){
        syst.cargarLeccion(nombre,descripcion,impSeleccionImg.value,tablatura, 1);
        alert("hola");
    } else {
        alert("Debe completar todos los campos");
    }
}