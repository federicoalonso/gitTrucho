import Alumno from './alumno.js';
import Profesor from './profesor.js';
import Leccion from './leccion.js';
import Historial from './historial.js';

export default class Sistema {

  var alumnoIdLogueado = 0;
  var profesorIdLogueado = 0;

    
    constructor() {
      
      this.listaProfesores = new ArrayList();
      this.listaAlumnos = new ArrayList();
      this.listaLecciones = new ArrayList();
      this.listaHistorial = new ArrayList();

      datosPrueba();

    }


     datosPrueba(){ 

      var alumno1 = new Alumno("Ramael");
      var profesor1 = new Profesor("Alberto");
      this.listaProfesores.add(profesor1);
      this.listaAlumnos.add(alumno1);
        
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