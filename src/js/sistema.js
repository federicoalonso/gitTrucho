import Alumno from './alumno.js';
import Profesor from './profesor.js';
import Leccion from './leccion.js';
import Historial from './historial.js';

export default class Sistema {


  constructor() {

    this.listaProfesores = [];
    this.listaAlumnos = [];
    this.listaLecciones = [];
    this.listaHistorial = [];
    this.alumnoIdLogueado = 0;
    this.profesorIdLogueado = 0;
    this.datosPrueba();
  }

  datosPrueba() {

    var alumno1 = new Alumno("Ramael");
    var profesor1 = new Profesor("Alberto");

    for(var i=0; i<90; i++){
      var leccion = new Leccion("Lección Num: " + (i+1), "Descripción de la lección número " + (i+1), "Tablatura de la lección " + (i+1), profesor1);
      this.listaLecciones.push(leccion);
    }

    this.listaProfesores.push(profesor1);
    this.listaAlumnos.push(alumno1);
  }

  cargarLeccion(nombre, descripcion, tablatura) {

    var leccion = new Leccion(nombre, descripcion, tablatura, this.profesorIdLogueado);
    this.listaLecciones.push(leccion);


  }


  historial(idLeccion) {

    var historial = new Historial(idLeccion, alumnoIdLogueado);
    listahistorial.push(historial);

  }




}
