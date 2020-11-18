import Sistema from '../../js/sistema.js';

document.getElementById("btn-crear-leccion").addEventListener("click", mostrarModal);
document.getElementById("btn-ocultar-modal").addEventListener("click", ocultarModal);
document.getElementById("card").addEventListener("click", function (e) {
    e.stopPropagation();
});
document.getElementById("modal").addEventListener("click", ocultarModal);
document.getElementById("imp-file").addEventListener("click", seleccionarImagen);
document.getElementById("fil-img-leccion").addEventListener("change", tomarImagen);
document.getElementById("btn-guardar").addEventListener("click", guardarLeccion);

const impSeleccionImg = document.getElementById("fil-img-leccion");
const txtSeleccionImg = document.getElementById("imagen-seleccionada");
const syst = new Sistema();

function mostrarModal() {
    document.getElementById("modal").classList.add("visible");
}

function ocultarModal() {
    document.getElementById("modal").classList.remove("visible");
}

function seleccionarImagen() {
    impSeleccionImg.click();
}

function tomarImagen() {
    if (impSeleccionImg.value) {
        txtSeleccionImg.innerHTML = impSeleccionImg.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        console.log(impSeleccionImg.value);
    } else {
        txtSeleccionImg.innerHTML = "No ha seleccionado ninguna imágen";
    }
}

function guardarLeccion() {
    let nombre = document.getElementById("txt-nombre-leccion").value;
    let descripcion = document.getElementById("txt-descripcion-leccion").value;
    let tablatura = document.getElementById("txt-tablatura-leccion").value;

    if (nombre && descripcion && tablatura && impSeleccionImg.value) {
        syst.cargarLeccion(nombre, descripcion, impSeleccionImg.value, tablatura);
        cargarTabla();

        //limpiar los datos
        //ocultar el coso
    } else {
        alert("Debe completar todos los campos");
    }
}

function cargarTabla() {
    let trs = "";
    for (var i = 0; i < syst.listaLecciones.length; i++) {
        trs += `
            <tr>
                <td>${syst.listaLecciones[i].nombre}</td>
                <td>${syst.listaLecciones[i].fecha}</td>
                <td>
                    <button><img class="icon" src="../../assets/img/zoom_in-24px.svg"
                            alt="Ver detalles clase ${i}"></button>
                    <button><img class="icon" src="../../assets/img/create-black-18dp.svg"
                            alt="Editar clase ${i}"></button>
                    <button><img class="icon" src="../../assets/img/delete-24px.svg"
                            alt="Eliminar clase ${i}"></button>
                </td>
            </tr>
        `;
    }
    document.getElementById("tablaLecciones").innerHTML = trs;
}