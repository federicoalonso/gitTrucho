import Sistema from "../../js/sistema.js";

window.addEventListener("load", cargarSelect);
document.getElementById("btn-guardar").addEventListener("click", (e)=>{
    e.preventDefault();
    cargarLeccionYCancion();
})

let sis = new Sistema ();
sis.cargarCanciones();

function cargarSelect(){
    var options = "<option value='-1'>Seleccione una canción</option>";

    for(var i = 0; i<sis.listaCanciones.length; i++){
        options += `
            <option value="${sis.listaCanciones[i].id}">${sis.listaCanciones[i].nombre}</option>
        `;
    }

    document.getElementById("sel-canciones").innerHTML = options;
}

function cargarLeccionYCancion(){
    var cancion = document.getElementById("sel-canciones").value;
    var nombre = document.getElementById("txt-nombre-cancion").value;
    var tablatura = document.getElementById("txt-tablatura").value;
    var autor = document.getElementById("txt-autor").value;
    var sonido = document.getElementById("imp-sonido").value;

    //me fijo si elige una cancion existente
    if(cancion != -1){
        crearClase(cancion);
    }else{
        if(nombre && autor && sonido && tablatura){
            var laCancion = sis.crearCancion(nombre, tablatura, autor, sonido);
            (laCancion) ? crearClase(laCancion) : alert("no");
        }else{
            alert("Complete los campos de canción");
        }
    }
}

function crearClase(cancion){
    var nombre = document.getElementById("txt-nombre-leccion").value;
    var descripcion = document.getElementById("txt-descripcion-leccion").value;
    var imagen = document.getElementById("fil-imagen").value;
    var leccion = document.getElementById("txt-leccion").value;

    if(!cancion.id){
        cancion = sis.traerCancion(cancion);
    }
    
    if(nombre && descripcion && imagen && leccion && cancion){
        var logrado = sis.crearLeccion(nombre, descripcion, cancion, imagen, leccion);
        if (logrado) {
            limpiarCampos();
            alert("Lección Guardada")
        } else {
            alert("No se pudo guardar la lección");
        }
    }else{
        alert("Complete los campos de leccion");
    }
}

function limpiarCampos(){
    document.getElementById("txt-nombre-leccion").value = "";
    document.getElementById("txt-descripcion-leccion").value = "";
    document.getElementById("fil-imagen").value = "";
    document.getElementById("lbl-sonido").innerHTML = "Seleccione el Archivo .mp3";
    document.getElementById("txt-nombre-cancion").value = "";
    document.getElementById("txt-autor").value = "";
    document.getElementById("imp-sonido").value = "";
    document.getElementById("lbl-fil-imagen").innerHTML = "Seleccione el Archivo .png o .jpg";

    var elements = document.getElementsByClassName("note-editable card-block");
    for(var i=0; i<elements.length; i++) elements[i].innerHTML="";
    cargarSelect();
}