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
    this.alumnoIdLogueado=0;
    this.profesorIdLogueado=0;
    this.datosPrueba();
  }

  datosPrueba() {

    var alumno1 = new Alumno("Ramael");
    var profesor1 = new Profesor("Alberto");
    this.listaProfesores.push(profesor1);
    this.listaAlumnos.push(alumno1);

  }

     cargarLeccion(nombre, descripcion, imagen, tablatura){

        alert("leccion cargada");
        var leccion = new Leccion(nombre,descripcion,imagen,tablatura,profesorIdLogueado);
        this.listaLecciones.add(leccion);

        
     }


     historial(idLeccion){

      var historial = new Historial(idLeccion, alumnoIdLogueado);
      listahistorial.add(historial);

     }
    
    


  }
