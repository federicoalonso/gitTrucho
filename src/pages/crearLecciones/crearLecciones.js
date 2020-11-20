import Sistema from '../../js/sistema.js';

window.addEventListener("load", () => { cargarTabla(0) });
document.getElementById("btn-crear-leccion").addEventListener("click", mostrarModal);
document.getElementById("cosas").addEventListener("click", alerta);
document.getElementById("btn-ocultar-modal").addEventListener("click", ocultarModal);
document.getElementById("card").addEventListener("click", function (e) {
    e.stopPropagation();
});
document.getElementById("modal").addEventListener("click", ocultarModal);
document.getElementById("btn-guardar").addEventListener("click", guardarLeccion);

const syst = new Sistema();
let paginaActual = 0;

function alerta(){
    alert("Hola")
}
function mostrarModal() {
    document.getElementById("modal").classList.add("visible");
}

function ocultarModal() {
    document.getElementById("modal").classList.remove("visible");
}

function guardarLeccion() {
    let nombre = document.getElementById("txt-nombre-leccion").value;
    let descripcion = document.getElementById("txt-descripcion-leccion").value;
    let tablatura = document.getElementById("txt-tablatura-leccion").value;

    if (nombre && descripcion && tablatura) {
        syst.cargarLeccion(nombre, descripcion, tablatura);
        cargarTabla(paginaActual);
        document.getElementById("txt-nombre-leccion").value = "";
        document.getElementById("txt-descripcion-leccion").value = "";
        document.getElementById("txt-tablatura-leccion").value = "";
        ocultarModal();
    } else {
        alert("Debe completar todos los campos");
    }
}

function cargarTabla(pagina) {

    cargarCuerpo(pagina);
    cargarPaginador(pagina);

}

function cargarCuerpo(pagina) {
    let trs = "";
    if (syst.listaLecciones.length === 0) {
        trs = "No hay lecciones disponibles"
    } else {
        var i = pagina * 10;
        for (i; i < syst.listaLecciones.length && i < (pagina * 10) + 10; i++) {
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
        paginaActual = pagina;
    }
    document.getElementById("tablaLecciones").innerHTML = trs;
}

function cargarPaginador(pagina) {
    var pagsTotales = syst.listaLecciones.length / 10;
    if (pagsTotales !== Math.floor(pagsTotales)) pagsTotales = Math.floor(pagsTotales + 1);

    var pag = '<ul class="pagination">';
    (pagina === 0 || syst.listaLecciones.length === 0) ? pag += '<li><a href="" class="disabled nav" nav="back">«</a></li>' : pag += '<li><a href="" class="nav" nav="back">«</a></li>';
    if (pagsTotales > 5) {
        // al final ...
        if(pagina < 3){
            for (var j = 0; j < 4; j++) {
                (j !== pagina) ? pag += `<li><a href="" class="nav" nav="${j + 1}">${j + 1}</a></li>` : pag += `<li><a class="active nav" nav="${j + 1}" href="">${j + 1}</a></li>`;
            }
            pag += '<li><a href="" class="nav" nav="..>">...</a></li>'
        }else if(pagsTotales - pagina < 3){
            // ... al principio
            pag += '<li><a href="" class="nav" nav="<..">...</a></li>'
            for (var j = pagsTotales - 4; j < pagsTotales; j++) {
                (j !== pagina) ? pag += `<li><a href="" class="nav" nav="${j + 1}">${j + 1}</a></li>` : pag += `<li><a class="active nav" nav="${j + 1}" href="">${j + 1}</a></li>`;
            }
        }else{
            // ... en el medio ...
            pag += '<li><a href="" class="nav" nav="<..">...</a></li>'
            for (var j = pagina - 1; j < pagina + 2; j++) {
                (j !== pagina) ? pag += `<li><a href="" class="nav" nav="${j + 1}">${j + 1}</a></li>` : pag += `<li><a class="active nav" nav="${j + 1}" href="">${j + 1}</a></li>`;
            }
            pag += '<li><a href="" class="nav" nav="..>">...</a></li>'
        }
    } else {
        for (var j = 0; j < pagsTotales; j++) {
            (j !== pagina) ? pag += `<li><a href="" class="nav" nav="${j + 1}">${j + 1}</a></li>` : pag += `<li><a class="active nav" nav="${j + 1}" href="">${j + 1}</a></li>`;
        }
    }
    (pagina === (pagsTotales - 1) || syst.listaLecciones.length === 0) ? pag += '<li><a href="" class="disabled nav" nav="foward">»</a></li>' : pag += '<li><a href="" class="nav" nav="foward">»</a></li>';

    document.getElementById("paginator").innerHTML = pag;

    eventosAlPaginador(pagsTotales);
}

function eventosAlPaginador(pagsTotales) {
    var navs = document.getElementsByClassName("nav");

    for (var j = 0; j < navs.length; j++) {
        navs[j].addEventListener("click", function (e) {
            e.preventDefault();
            var attr = this.getAttribute("nav");
            var disabled = this.classList.contains('disabled');
            cargarConPaginacion(attr, disabled, pagsTotales);
        });
    }
}

function cargarConPaginacion(attr, disabled, pagsTotales) {
    if (!disabled) {
        if (attr != "foward" && attr != "back" && attr != "..>" && attr != "<..") {
            paginaActual = attr - 1;
            cargarTabla(paginaActual);
        }else if(attr == "foward"){
            paginaActual = pagsTotales - 1;
            cargarTabla(paginaActual);
        }else if(attr == "..>"){
            paginaActual = paginaActual + 2;
            cargarTabla(paginaActual);
        }else if(attr == "<.."){
            paginaActual = paginaActual - 2;
            cargarTabla(paginaActual);
        }else{
            cargarTabla(0);
            paginaActual = 0;
        }
    }
}