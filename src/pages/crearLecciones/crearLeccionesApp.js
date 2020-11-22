import Sistema from "../../js/sistema.js";

window.addEventListener("load", cargarSelect);
document.getElementById("btn-guardar").addEventListener("click", (e) => {
    e.preventDefault();
    cargarLeccionYCancion();
})

let sis = new Sistema();
sis.cargarCanciones();

function cargarSelect() {
    var options = "<option value='-1'>Seleccione una canción</option>";

    for (var i = 0; i < sis.listaCanciones.length; i++) {
        options += `
            <option value="${sis.listaCanciones[i].id}">${sis.listaCanciones[i].nombre}</option>
        `;
    }

    document.getElementById("sel-canciones").innerHTML = options;
}

function cargarLeccionYCancion() {
    limpiarEstilos();
    var cancion = document.getElementById("sel-canciones").value.trim();
    var nombre = document.getElementById("txt-nombre-cancion").value.trim();
    var tablatura = document.getElementById("txt-tablatura").value.trim();
    var autor = document.getElementById("txt-autor").value.trim();
    var sonido = document.getElementById("imp-sonido").value.trim();
    var seleccionarCancion = document.getElementById("btn-togleVisible").classList.contains("derecha");
    //me fijo si elige una cancion existente
    if (!seleccionarCancion) {
        if (cancion == -1) {
            document.getElementById("val-sel-canciones").classList.remove("not");
            document.getElementById("sel-canciones").classList.add("is-invalid");
            volverVisible("Seleccione una canción", "error", "#sel-canciones");
        } else {
            crearClase(cancion);
        }
    } else {
        var cuerpoAlerta = "";
        if (nombre && autor && sonido && tablatura) {
            if (nombre.length < 5 || nombre.length > 20) {
                document.getElementById("val-txt-nombre-cancion").classList.remove("not");
                document.getElementById("txt-nombre-cancion").classList.add("is-invalid");
                cuerpoAlerta += "El nombre debe poseer entre 5 y 20 caracteres";
            }
            if (autor.length < 5 || autor.length > 20) {
                document.getElementById("val-txt-autor").classList.remove("not");
                document.getElementById("txt-autor").classList.add("is-invalid");
                (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
                cuerpoAlerta += "El nombre debe poseer entre 5 y 20 caracteres"
            }
            if (!sonido.includes(".mp3")) {
                document.getElementById("val-imp-sonido").classList.remove("not");
                document.getElementById("imp-sonido").classList.add("is-invalid");
                (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
                cuerpoAlerta += "Debe seleccionar una archivo .mp3"
            }
            if (tablatura.length < 1000 || tablatura.length > 5000) {
                document.getElementsByClassName("note-editor note-frame card")[0].classList.add("is-invalid");
                (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
                cuerpoAlerta += "La tablatura debe poseer entre 1000 y 5000 caracteres"
            }
            if (cuerpoAlerta !== "") {
                volverVisible(cuerpoAlerta, "danger");
            } else {
                var laCancion = sis.crearCancion(nombre, tablatura, autor, sonido);
                if (laCancion) {
                    crearClase(laCancion)
                } else {
                    volverVisible("No se pudo crear la canción", "error");
                }
            }
        } else {
            if (!nombre) {
                document.getElementById("val-txt-nombre-cancion").classList.remove("not");
                document.getElementById("txt-nombre-cancion").classList.add("is-invalid");
                cuerpoAlerta += "Debe ingresar un nombre de canción";
            }
            if (!autor) {
                document.getElementById("val-txt-autor").classList.remove("not");
                document.getElementById("txt-autor").classList.add("is-invalid");
                (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
                cuerpoAlerta += "Debe ingresar un autor de canción"
            }
            if (!sonido) {
                document.getElementById("val-imp-sonido").classList.remove("not");
                document.getElementById("imp-sonido").classList.add("is-invalid");
                (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
                cuerpoAlerta += "Debe seleccionar una archivo de sonido"
            }
            if (!tablatura) {
                document.getElementsByClassName("note-editor note-frame card")[0].classList.add("is-invalid");
                (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
                cuerpoAlerta += "Debe ingresar una tablatura de entre 1000 y 5000 caracteres"
            }

            volverVisible(cuerpoAlerta, "error");
        }
    }
}

function crearClase(cancion) {
    limpiarEstilos()
    var nombre = document.getElementById("txt-nombre-leccion").value.trim();
    var descripcion = document.getElementById("txt-descripcion-leccion").value.trim();
    var imagen = document.getElementById("fil-imagen").value.trim();
    var leccion = document.getElementById("txt-leccion").value.trim();

    if (!cancion.id) {
        cancion = sis.traerCancion(cancion);
    }

    var cuerpoAlerta = "";

    if (nombre && descripcion && imagen && leccion && cancion) {

        if (nombre.length < 5 || nombre.length > 20) {
            document.getElementById("val-txt-nombre-leccion").classList.remove("not");
            document.getElementById("txt-nombre-leccion").classList.add("is-invalid");
            cuerpoAlerta += "El nombre debe tener entre 5 y 20 caracteres";
        }
        if (descripcion.length < 10 || descripcion.length > 250) {
            document.getElementById("val-txt-descripcion-leccion").classList.remove("not");
            document.getElementById("txt-descripcion-leccion").classList.add("is-invalid");
            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
            cuerpoAlerta += "La descripción corta debe tener entre 10 y 250 caracteres";
        }
        if (!imagen.includes(".png") && !imagen.includes(".jpg") && !imagen.includes(".jpeg")) {
            document.getElementById("fil-imagen").classList.add("is-invalid");
            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
            cuerpoAlerta += "Debe ingresar una imágen válida."
        }
        if (leccion.length < 10 || leccion.length > 2000) {
            document.getElementsByClassName("note-editor note-frame card")[1].classList.add("is-invalid");
            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
            cuerpoAlerta += "Debe ingresar una lección de entre 10 y 2000 caracteres"
        }
        if (cuerpoAlerta !== "") {
            volverVisible(cuerpoAlerta, "danger");
        } else {
            var logrado = sis.crearLeccion(nombre, descripcion, cancion, imagen, leccion);
            if (logrado) {
                limpiarCampos();
                volverVisible("Lección guardada con éxito!!", "success");
            } else {
                volverVisible("No se pudo crear la lección", "error");
            }
        }
    } else {
        if (!nombre) {
            document.getElementById("val-txt-nombre-leccion").classList.remove("not");
            document.getElementById("txt-nombre-leccion").classList.add("is-invalid");
            cuerpoAlerta += "Debe ingresar un nombre de lección";
        }
        if (!descripcion) {
            document.getElementById("val-txt-descripcion-leccion").classList.remove("not");
            document.getElementById("txt-descripcion-leccion").classList.add("is-invalid");
            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
            cuerpoAlerta += "Debe ingresar una descripción"
        }
        if (!imagen) {
            document.getElementById("fil-imagen").classList.add("is-invalid");
            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
            cuerpoAlerta += "Debe ingresar una imágen"
        }
        if (!leccion) {
            document.getElementsByClassName("note-editor note-frame card")[1].classList.add("is-invalid");
            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
            cuerpoAlerta += "Debe ingresar una lección de entre 10 y 2000 caracteres"
        }

        volverVisible(cuerpoAlerta, "error");
    }
}

function limpiarEstilos() {

    document.getElementById("val-sel-canciones").classList.add("not");
    document.getElementById("sel-canciones").classList.remove("is-invalid");
    document.getElementById("val-txt-nombre-cancion").classList.add("not");
    document.getElementById("txt-nombre-cancion").classList.remove("is-invalid");
    document.getElementById("val-txt-autor").classList.add("not");
    document.getElementById("txt-autor").classList.remove("is-invalid");
    document.getElementById("val-imp-sonido").classList.add("not");
    document.getElementById("imp-sonido").classList.remove("is-invalid");
    document.getElementsByClassName("note-editor note-frame card")[0].classList.remove("is-invalid");

    document.getElementById("val-txt-nombre-leccion").classList.add("not");
    document.getElementById("txt-nombre-leccion").classList.remove("is-invalid");
    document.getElementById("val-txt-descripcion-leccion").classList.add("not");
    document.getElementById("txt-descripcion-leccion").classList.remove("is-invalid");
    document.getElementById("fil-imagen").classList.remove("is-invalid");
    document.getElementsByClassName("note-editor note-frame card")[1].classList.remove("is-invalid");
}

function limpiarCampos() {
    document.getElementById("txt-nombre-leccion").value = "";
    document.getElementById("txt-descripcion-leccion").value = "";
    document.getElementById("fil-imagen").value = "";
    document.getElementById("lbl-sonido").innerHTML = "Seleccione el Archivo .mp3";
    document.getElementById("txt-nombre-cancion").value = "";
    document.getElementById("txt-autor").value = "";
    document.getElementById("imp-sonido").value = "";
    document.getElementById("lbl-fil-imagen").innerHTML = "Seleccione el Archivo .png o .jpg";
    limpiarEstilos();

    var elements = document.getElementsByClassName("note-editable card-block");
    for (var i = 0; i < elements.length; i++) elements[i].innerHTML = "";
    cargarSelect();
}

function volverVisible(cuerpo, clase) {
    setTimeout(function () {
        document.getElementById("cont-alerta").classList.add("vis");
        document.getElementById("alerta").classList.add(clase);
        document.getElementById("alerta").classList.add("vis");
        document.getElementById("alerta").innerHTML = `
            ${cuerpo}
            <span id="close-alert">
                <i class="ml-auto">&times;</i>
            </span>
        `;
        document.getElementById("close-alert").addEventListener("click", () => {
            document.getElementById("alerta").classList.remove("vis");
            document.getElementById("alerta").classList.remove(clase);
        });
    }, 200);
}

