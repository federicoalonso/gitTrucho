(()=>{var e={354:e=>{e.exports='class Cancion {\r\n\r\n  constructor(autoIdCancion, nombre, tablatura, autor , ruta_sonido) {\r\n\r\n    this.id = autoIdCancion;\r\n    this.nombre = nombre;\r\n    this.autor = autor;\r\n    this.tablatura = tablatura;\r\n    this.ruta_sonido = ruta_sonido;\r\n   \r\n    \r\n  }\r\n}\r\n\n\n        class Leccion {\r\n\r\n  constructor(autoIdLeccion, nombre, descripcion, cancion, ruta_imagen , desLeccion) {\r\n\r\n    var d = new Date();\r\n    \r\n    this.id = autoIdLeccion;\r\n    this.nombre = nombre;\r\n    this.descripcion = descripcion;\r\n    this.desLeccion = desLeccion;\r\n    this.fecha = d.getDay() + "/" + d.getMonth() + "/" + d.getFullYear();\r\n    this.cancion = cancion;\r\n    this.ruta_imagen = ruta_imagen;\r\n   \r\n\r\n  }\r\n}\r\n\r\n\n\n        \r\n\r\nvar autoIdLeccion = 1;\r\nvar autoIdCancion = 1; \r\n\r\nclass Sistema {\r\n\r\n  constructor() {\r\n\r\n    this.listaLecciones = [];\r\n    this.listaCanciones = [];\r\n\r\n\r\n  }\r\n\r\n  cargarCanciones() {\r\n    for (var i = 0; i < 10; i++) {\r\n      var nuevaCancion = new Cancion(autoIdCancion, "Canción de Prueba " + (i+1), tablaturaPrueba, "Autor de Canción " + (i+1), "../../../server-side/sound/cancion1.mp3");\r\n      this.listaCanciones.push(nuevaCancion);\r\n      autoIdCancion++;\r\n    }\r\n  }\r\n\r\n  cargarLecciones() {\r\n    for (var i=0; i<10; i++){\r\n      var nombre = "Lección de Prueba " + (i + 1);\r\n      var descripcion = `\r\n        En este curso de guitarra online para principiantes gratuito podrás aprender online a tocar la guitarra desde cero. Este curso de guitarra es especialmente relevante para ir a tu ritmo, donde podrás practicar desde casa totalmente gratis.\r\n      `;\r\n      var cancion = this.traerCancion(1);\r\n      var ruta = "../../../server-side/img/leccion";\r\n      var desLeccion = `\r\n        Estudiamos los fundamentos básicos del ritmo, aprendiendo a interiorizarlo y desarrollando la habilidad de ser capaz de sacar cualquier ritmo con escucharlo. Este curso lo dividimos en dos partes, en la primera aprenderemos toda la teoría, pero de manera práctica, desarrollando la técnica básica del ritmo. Después aprenderás 50 ritmos de manera progresiva, con ejemplos prácticos al estilo de canciones y progresiones muy conocidas de lo mejor de la música. Puedes descargar los PDF de cada lección además de todas las pistas de práctica.\r\n      `;\r\n      ((i%2)==0) ? ruta += "1.jpg" : ruta += "2.jpg";\r\n      var nuevaLeccion = new Leccion(autoIdLeccion, nombre, descripcion, cancion, ruta, desLeccion);\r\n      this.listaLecciones.push(nuevaLeccion);\r\n      autoIdLeccion++;\r\n    }\r\n  }\r\n\r\n  crearLeccion(nombre, descripCorta, cancion, ruta_imagen, descripLarga) {\r\n\r\n    var retorno = true;\r\n\r\n    if (nombre == "" || descripCorta == "" || cancion == null || ruta_imagen == "" || descripLarga == "") {\r\n      retorno = false;\r\n    }\r\n    else if (nombre.length < 5 || nombre.length > 20 || ruta_imagen.length > 100 ||\r\n      descripCorta.length < 10 || descripCorta.length > 250 ||\r\n      descripLarga.length < 10 || descripLarga.length > 2000) {\r\n\r\n      retorno = false;\r\n    }\r\n    else {\r\n      var unaLeccion = new Leccion(autoIdLeccion, nombre, descripCorta, cancion, ruta_imagen, descripLarga);\r\n      this.listaLecciones.push(unaLeccion);\r\n      autoIdLeccion++;\r\n    }\r\n\r\n    return retorno;\r\n\r\n  }\r\n\r\n  crearCancion(nombre, tablatura, autor, ruta_sonido) {\r\n\r\n    if (nombre == "" || tablatura == "" || autor == "" || ruta_sonido == "") {\r\n      return null;\r\n    }\r\n    if (nombre.length < 5 || nombre.length > 20 ||\r\n      tablatura.length < 1000 || tablatura.length > 5000 ||\r\n      autor.length < 5 || autor.length > 20 || ruta_sonido > 100) {\r\n      return null;\r\n    }\r\n    var unaCancion = new Cancion(autoIdCancion, nombre, tablatura, autor, ruta_sonido);\r\n    this.listaCanciones.push(unaCancion);\r\n    autoIdCancion++;\r\n    return unaCancion;\r\n  }\r\n\r\n  traerCancion(id) {\r\n\r\n    var retorno = null;\r\n    var iter = 0;\r\n\r\n    while (retorno == null && iter < this.listaCanciones.length) {\r\n\r\n      if (id == this.listaCanciones[iter].id) {\r\n        retorno = this.listaCanciones[iter];\r\n      }\r\n      iter++;\r\n    }\r\n    return retorno;\r\n  }\r\n\r\n\r\n}\r\nconst tablaturaPrueba = `\r\n<pre style="font-family: inherit; line-height: 1em; color: rgb(0, 0, 0); font-size: 13px;">Dormido está el león - Timón y Pumba\r\n\r\n\r\n\r\n(Sólo voz)\r\nDi ri di ri di diri diri di di om owim mowé\r\nDi ri di ri di diri diri di di om owim mowé\r\n\r\nDiiii ri di ri di om owim mowé\r\n\r\n<div style="height: 0.5em;"></div><a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">G</a>                    <a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">C</a>\r\nOwim mowé, owim mowé, owim mowé, owim mowé,\r\n<div style="height: 0.5em;"></div><a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">G</a>                    <a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">D</a>\r\nowim mowé, owim mowé, owim mowé, owim mowé (bis)\r\n\r\n<div style="height: 0.5em;"></div><a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">G</a>                 <a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">C</a>\r\nEn la jungla, la negra jungla,\r\n<div style="height: 0.5em;"></div>    <a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">G</a>             <a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">D</a>\r\ndormido está el león\r\n\r\n<div style="height: 0.5em;"></div><a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">G</a>                <a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">C</a>\r\nEn la jungla, calmada jungla,\r\n<div style="height: 0.5em;"></div>   <a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">G</a>              <a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">D</a>\r\nDormido está el león\r\n\r\n<div style="height: 0.5em;"></div><a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">G</a>       <a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">C</a>        <a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">G</a>            <a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">D</a></pre>\r\n`;\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n  \r\n$(function () {\r\n    // Summernote\r\n    $(\'.textarea\').summernote()\r\n});\r\n\r\ndocument.getElementById("fil-imagen").addEventListener("change", tomarImagen);\r\n\r\nfunction tomarImagen() {\r\n    if (document.getElementById("fil-imagen").value) {\r\n        document.getElementById("lbl-fil-imagen").innerHTML = document.getElementById("fil-imagen").value.match(/[\\/\\\\]([\\w\\d\\s\\.\\-\\(\\)]+)$/)[1];\r\n    } else {\r\n        document.getElementById("lbl-fil-imagen").innerHTML = "No ha seleccionado ninguna imágen";\r\n    }\r\n}\r\n\r\ndocument.getElementById("imp-sonido").addEventListener("change", tomarSonido);\r\n\r\nfunction tomarSonido() {\r\n    if (document.getElementById("imp-sonido").value) {\r\n        document.getElementById("lbl-sonido").innerHTML = document.getElementById("imp-sonido").value.match(/[\\/\\\\]([\\w\\d\\s\\.\\-\\(\\)]+)$/)[1];\r\n    } else {\r\n        document.getElementById("lbl-sonido").innerHTML = "No ha seleccionado ningun sonido";\r\n    }\r\n}\r\n\r\ndocument.getElementById("btn-togleVisible").addEventListener("click", (e) => {\r\n    e.preventDefault();\r\n    var divIzq = document.getElementById("lado-izquierdo");\r\n    var divDer = document.getElementById("lado-derecho");\r\n    var tiene = divIzq.classList.contains(\'visible\');\r\n    var boton = document.getElementById("btn-togleVisible");\r\n\r\n    if (tiene) {\r\n        divIzq.classList.remove(\'visible\');\r\n        divDer.classList.add("visible");\r\n        boton.innerText = "Seleccionar Canción Existente";\r\n        boton.classList.add("derecha");\r\n    } else {\r\n        divDer.classList.remove(\'visible\');\r\n        divIzq.classList.add("visible");\r\n        boton.innerText = "Crear Nueva Canción";\r\n        boton.classList.remove("derecha");\r\n    }\r\n})\r\n\r\nwindow.addEventListener("load", cargarSelect);\r\ndocument.getElementById("btn-guardar").addEventListener("click", (e) => {\r\n    e.preventDefault();\r\n    cargarLeccionYCancion();\r\n});\r\n\r\ndocument.getElementById("btn-guardar-cancion").addEventListener("click", (e) => {\r\n    e.preventDefault();\r\n    cargarCancion();\r\n})\r\n\r\nlet sist = new Sistema();\r\nsist.cargarCanciones();\r\n\r\nvar cancionSeleccionada = -1;\r\n\r\nfunction cargarSelect() {\r\n    var options = "<option value=\'-1\'>Seleccione una canción</option>";\r\n\r\n    for (var i = 0; i < sist.listaCanciones.length; i++) {\r\n        if (cancionSeleccionada == sist.listaCanciones[i].id) {\r\n            options += `\r\n                <option value="${sist.listaCanciones[i].id}" selected>${sist.listaCanciones[i].nombre}</option>\r\n            `;\r\n        } else {\r\n            options += `\r\n                <option value="${sist.listaCanciones[i].id}">${sist.listaCanciones[i].nombre}</option>\r\n            `;\r\n        }\r\n    }\r\n\r\n    document.getElementById("sel-canciones").innerHTML = options;\r\n}\r\n\r\nfunction cargarCancion() {\r\n    limpiarEstilos();\r\n\r\n    var nombre = document.getElementById("txt-nombre-cancion").value.trim();\r\n    var tablatura = document.getElementById("txt-tablatura").value.trim();\r\n    var autor = document.getElementById("txt-autor").value.trim();\r\n    var sonido = document.getElementById("imp-sonido").value.trim();\r\n    var cuerpoAlerta = "";\r\n    if (nombre && autor && sonido && tablatura) {\r\n        if (nombre.length < 5 || nombre.length > 20) {\r\n            document.getElementById("val-txt-nombre-cancion").classList.remove("not");\r\n            document.getElementById("txt-nombre-cancion").classList.add("is-invalid");\r\n            cuerpoAlerta += "El nombre debe poseer entre 5 y 20 caracteres";\r\n        }\r\n        if (autor.length < 5 || autor.length > 20) {\r\n            document.getElementById("val-txt-autor").classList.remove("not");\r\n            document.getElementById("txt-autor").classList.add("is-invalid");\r\n            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : \'\';\r\n            cuerpoAlerta += "El nombre debe poseer entre 5 y 20 caracteres"\r\n        }\r\n        if (!sonido.includes(".mp3")) {\r\n            document.getElementById("val-imp-sonido").classList.remove("not");\r\n            document.getElementById("imp-sonido").classList.add("is-invalid");\r\n            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : \'\';\r\n            cuerpoAlerta += "Debe seleccionar una archivo .mp3"\r\n        }\r\n        if (sonido.length > 100) {\r\n            document.getElementById("val-imp-sonido").classList.remove("not");\r\n            document.getElementById("imp-sonido").classList.add("is-invalid");\r\n            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : \'\';\r\n            cuerpoAlerta += "La ruta del sonido no puede tener más de 100 caracteres."\r\n        }\r\n        if (tablatura.length < 1000 || tablatura.length > 5000) {\r\n            console.log(tablatura.length)\r\n            document.getElementsByClassName("note-editor note-frame card")[0].classList.add("is-invalid");\r\n            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : \'\';\r\n            cuerpoAlerta += "La tablatura debe poseer entre 1000 y 5000 caracteres"\r\n        }\r\n        if (cuerpoAlerta !== "") {\r\n            volverVisible(cuerpoAlerta, "danger");\r\n            document.getElementById("btn-guardar").classList.add("disabled");\r\n            document.getElementById(\'btn-guardar\').disabled = true;\r\n        } else {\r\n            var laCancion = sist.crearCancion(nombre, tablatura, autor, sonido);\r\n            if (laCancion) {\r\n                limpiarCampos();\r\n                limpiarEstilos();\r\n                volverVisible("Canción creada con éxito!", "success");\r\n                cancionSeleccionada = laCancion.id;\r\n                cargarSelect();\r\n                document.getElementById("btn-togleVisible").click();\r\n                document.getElementById("btn-guardar").classList.remove("disabled");\r\n                document.getElementById(\'btn-guardar\').disabled = false;\r\n            } else {\r\n                volverVisible("No se pudo crear la canción", "error");\r\n                document.getElementById("btn-guardar").classList.add("disabled");\r\n                document.getElementById(\'btn-guardar\').disabled = true;\r\n            }\r\n        }\r\n    } else {\r\n        if (!nombre) {\r\n            document.getElementById("val-txt-nombre-cancion").classList.remove("not");\r\n            document.getElementById("txt-nombre-cancion").classList.add("is-invalid");\r\n            cuerpoAlerta += "Debe ingresar un nombre de canción";\r\n        }\r\n        if (!autor) {\r\n            document.getElementById("val-txt-autor").classList.remove("not");\r\n            document.getElementById("txt-autor").classList.add("is-invalid");\r\n            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : \'\';\r\n            cuerpoAlerta += "Debe ingresar un autor de canción"\r\n        }\r\n        if (!sonido) {\r\n            document.getElementById("val-imp-sonido").classList.remove("not");\r\n            document.getElementById("imp-sonido").classList.add("is-invalid");\r\n            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : \'\';\r\n            cuerpoAlerta += "Debe seleccionar una archivo de sonido"\r\n        }\r\n        if (!tablatura) {\r\n            document.getElementsByClassName("note-editor note-frame card")[0].classList.add("is-invalid");\r\n            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : \'\';\r\n            cuerpoAlerta += "Debe ingresar una tablatura de entre 1000 y 5000 caracteres"\r\n        }\r\n        document.getElementById("btn-guardar").classList.add("disabled");\r\n        document.getElementById(\'btn-guardar\').disabled = true;\r\n        volverVisible(cuerpoAlerta, "error");\r\n    }\r\n\r\n}\r\n\r\nfunction cargarLeccionYCancion() {\r\n    var cancion = document.getElementById("sel-canciones").value.trim();\r\n    var seleccionarCancion = document.getElementById("btn-togleVisible").classList.contains("derecha");\r\n    //me fijo si elige una cancion existente\r\n    if (!seleccionarCancion) {\r\n        if (cancion == -1) {\r\n            document.getElementById("val-sel-canciones").classList.remove("not");\r\n            document.getElementById("sel-canciones").classList.add("is-invalid");\r\n            volverVisible("Seleccione una canción", "error", "#sel-canciones");\r\n        } else {\r\n            crearClase(cancion);\r\n        }\r\n    } else {\r\n\r\n    }\r\n}\r\n\r\nfunction crearClase(cancion) {\r\n    limpiarEstilos()\r\n    var nombre = document.getElementById("txt-nombre-leccion").value.trim();\r\n    var descripcion = document.getElementById("txt-descripcion-leccion").value.trim();\r\n    var imagen = document.getElementById("fil-imagen").value.trim();\r\n    var leccion = document.getElementById("txt-leccion").value.trim();\r\n\r\n    if (!cancion.id) {\r\n        cancion = sist.traerCancion(cancion);\r\n    }\r\n\r\n    var cuerpoAlerta = "";\r\n\r\n    if (nombre && descripcion && imagen && leccion && cancion) {\r\n\r\n        if (nombre.length < 5 || nombre.length > 20) {\r\n            document.getElementById("val-txt-nombre-leccion").classList.remove("not");\r\n            document.getElementById("txt-nombre-leccion").classList.add("is-invalid");\r\n            cuerpoAlerta += "El nombre debe tener entre 5 y 20 caracteres";\r\n        }\r\n        if (descripcion.length < 10 || descripcion.length > 250) {\r\n            document.getElementById("val-txt-descripcion-leccion").classList.remove("not");\r\n            document.getElementById("txt-descripcion-leccion").classList.add("is-invalid");\r\n            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : \'\';\r\n            cuerpoAlerta += "La descripción corta debe tener entre 10 y 250 caracteres";\r\n        }\r\n        if (!imagen.includes(".png") && !imagen.includes(".jpg") && !imagen.includes(".jpeg")) {\r\n            document.getElementById("fil-imagen").classList.add("is-invalid");\r\n            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : \'\';\r\n            cuerpoAlerta += "Debe ingresar una imágen válida."\r\n        }\r\n        if (imagen.length > 100) {\r\n            document.getElementById("fil-imagen").classList.add("is-invalid");\r\n            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : \'\';\r\n            cuerpoAlerta += "La ruta de la imágen no puede tener más de 100 caracteres."\r\n        }\r\n        if (leccion.length < 10 || leccion.length > 2000) {\r\n            document.getElementsByClassName("note-editor note-frame card")[1].classList.add("is-invalid");\r\n            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : \'\';\r\n            cuerpoAlerta += "Debe ingresar una lección de entre 10 y 2000 caracteres"\r\n        }\r\n        if (cuerpoAlerta !== "") {\r\n            volverVisible(cuerpoAlerta, "danger");\r\n        } else {\r\n            var logrado = sist.crearLeccion(nombre, descripcion, cancion, imagen, leccion);\r\n            if (logrado) {\r\n                limpiarCampos();\r\n                volverVisible("Lección guardada con éxito!!", "success");\r\n            } else {\r\n                volverVisible("No se pudo crear la lección", "error");\r\n            }\r\n        }\r\n    } else {\r\n        if (!nombre) {\r\n            document.getElementById("val-txt-nombre-leccion").classList.remove("not");\r\n            document.getElementById("txt-nombre-leccion").classList.add("is-invalid");\r\n            cuerpoAlerta += "Debe ingresar un nombre de lección";\r\n        }\r\n        if (!descripcion) {\r\n            document.getElementById("val-txt-descripcion-leccion").classList.remove("not");\r\n            document.getElementById("txt-descripcion-leccion").classList.add("is-invalid");\r\n            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : \'\';\r\n            cuerpoAlerta += "Debe ingresar una descripción"\r\n        }\r\n        if (!imagen) {\r\n            document.getElementById("fil-imagen").classList.add("is-invalid");\r\n            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : \'\';\r\n            cuerpoAlerta += "Debe ingresar una imágen"\r\n        }\r\n        if (!leccion) {\r\n            document.getElementsByClassName("note-editor note-frame card")[1].classList.add("is-invalid");\r\n            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : \'\';\r\n            cuerpoAlerta += "Debe ingresar una lección de entre 10 y 2000 caracteres"\r\n        }\r\n\r\n        volverVisible(cuerpoAlerta, "error");\r\n    }\r\n}\r\n\r\nfunction limpiarEstilos() {\r\n\r\n    document.getElementById("val-sel-canciones").classList.add("not");\r\n    document.getElementById("sel-canciones").classList.remove("is-invalid");\r\n    document.getElementById("val-txt-nombre-cancion").classList.add("not");\r\n    document.getElementById("txt-nombre-cancion").classList.remove("is-invalid");\r\n    document.getElementById("val-txt-autor").classList.add("not");\r\n    document.getElementById("txt-autor").classList.remove("is-invalid");\r\n    document.getElementById("val-imp-sonido").classList.add("not");\r\n    document.getElementById("imp-sonido").classList.remove("is-invalid");\r\n    document.getElementsByClassName("note-editor note-frame card")[0].classList.remove("is-invalid");\r\n\r\n    document.getElementById("val-txt-nombre-leccion").classList.add("not");\r\n    document.getElementById("txt-nombre-leccion").classList.remove("is-invalid");\r\n    document.getElementById("val-txt-descripcion-leccion").classList.add("not");\r\n    document.getElementById("txt-descripcion-leccion").classList.remove("is-invalid");\r\n    document.getElementById("fil-imagen").classList.remove("is-invalid");\r\n    document.getElementsByClassName("note-editor note-frame card")[1].classList.remove("is-invalid");\r\n    document.getElementById("alerta").classList.remove(\'success\');\r\n    document.getElementById("alerta").classList.remove(\'danger\');\r\n    document.getElementById("alerta").classList.remove(\'error\');\r\n}\r\n\r\nfunction limpiarCampos() {\r\n    document.getElementById("txt-nombre-leccion").value = "";\r\n    document.getElementById("txt-descripcion-leccion").value = "";\r\n    document.getElementById("fil-imagen").value = "";\r\n    document.getElementById("lbl-sonido").innerHTML = "Seleccione el Archivo .mp3";\r\n    document.getElementById("txt-nombre-cancion").value = "";\r\n    document.getElementById("txt-autor").value = "";\r\n    document.getElementById("imp-sonido").value = "";\r\n    document.getElementById("lbl-fil-imagen").innerHTML = "Seleccione el Archivo .png o .jpg";\r\n    limpiarEstilos();\r\n\r\n    var elements = document.getElementsByClassName("note-editable card-block");\r\n    for (var i = 0; i < elements.length; i++) elements[i].innerHTML = "";\r\n    cargarSelect();\r\n}\r\n\r\nfunction volverVisible(cuerpo, clase) {\r\n    setTimeout(function () {\r\n        document.getElementById("cont-alerta").classList.add("vis");\r\n        document.getElementById("alerta").classList.add(clase);\r\n        document.getElementById("alerta").classList.add("vis");\r\n        document.getElementById("alerta").innerHTML = `\r\n            ${cuerpo}\r\n            <span id="close-alert">\r\n                <i class="ml-auto">&times;</i>\r\n            </span>\r\n        `;\r\n        document.getElementById("close-alert").addEventListener("click", () => {\r\n            document.getElementById("alerta").classList.remove("vis");\r\n            document.getElementById("alerta").classList.remove(clase);\r\n        });\r\n    }, 200);\r\n}\r\n\r\n'},685:e=>{e.exports=function(e){function n(e){"undefined"!=typeof console&&(console.error||console.log)("[Script Loader]",e)}try{"undefined"!=typeof execScript&&"undefined"!=typeof attachEvent&&"undefined"==typeof addEventListener?execScript(e):"undefined"!=typeof eval?eval.call(null,e):n("EvalError: No eval function available")}catch(e){n(e)}}}},n={};function r(i){if(n[i])return n[i].exports;var t=n[i]={exports:{}};return e[i](t,t.exports,r),t.exports}r(685)(r(354))})();