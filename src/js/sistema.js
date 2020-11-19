const alumno = require('./alumno.js');
const profesor = require('./profesor.js');
const leccion = require('./leccion.js');
const historial = require('./historial.js');

class Sistema {


  constructor() {
    this.listaProfesores = [];
    this.listaAlumnos = [];
    this.listaLecciones = [];
    this.listaHistorial = [];
    this.alumnoIdLogueado = 0;
    this.profesorIdLogueado = 0;
    //this.datosPrueba();
  }

  datosPrueba() {

    var alumno1 = new alumno.Alumno("Ramael");
    var profesor1 = new profesor.Profesor("Alberto");

    for(var i=0; i<90; i++){
      var unaLeccion = new leccion.Leccion("Lección Num: " + (i+1), "Descripción de la lección número " + (i+1), "Tablatura de la lección " + (i+1), profesor1);
      this.listaLecciones.push(unaLeccion);
    }

    this.listaProfesores.push(profesor1);
    this.listaAlumnos.push(alumno1);
  }

  cargarLeccion(nombre, descripcion, tablatura) {

    var unaLeccion = new leccion.Leccion(nombre, descripcion, tablatura, this.profesorIdLogueado);
    this.listaLecciones.push(unaLeccion);
    return true;

  }


  historial(idLeccion) {

    var hist = new historial.Historial(idLeccion, alumnoIdLogueado);
    listahistorial.push(hist);

  }




}

module.exports.Sistema = Sistema;