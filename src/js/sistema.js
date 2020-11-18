import Alumno from './alumno.js';
import Profesor from './profesor.js';
import Leccion from './leccion.js';
//import Historial from './historial.js';

export default class Sistema {

  constructor() {

    this.listaProfesores = [];
    this.listaAlumnos = [];
    this.listaLecciones = [];
    this.listaHistorial = [];
    this.datosPrueba();
  }

  datosPrueba() {

    var alumno1 = new Alumno("Ramael");
    var profesor1 = new Profesor("Alberto");
    this.listaProfesores.push(profesor1);
    this.listaAlumnos.push(alumno1);

  }

  cargarLeccion(nombre, descripcion, imagen, tablatura, autor) {

    alert("leccion cargada");
    var leccion = new Leccion(nombre, descripcion, imagen, tablatura, autor);
    this.listaLecciones.add(leccion);
  }

}