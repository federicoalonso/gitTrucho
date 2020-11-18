import Alumno from './alumno.js';
import Profesor from './profesor.js';
import Leccion from './leccion.js';
import Historial from './historial.js';

export default class Sistema {
    
    constructor() {
      
      this.listaProfesores = new ArrayList();
      this.listaAlumnos = new ArrayList();
      this.listaLecciones = new ArrayList();
      this.listaHistorial = new ArrayList();

    }


     datosPrueba(){ 

      var alumno1 = new Alumno("Ramael");
      var profesor1 = new Profesor("Alberto");
      this.listaProfesores.add(profesor1);
      this.listaAlumnos.add(alumno1);
        
    }


     cargarLeccion(nombre, descripcion, imagen, tablatura, autor){

        alert("leccion cargada");
        var leccion = new Leccion(nombre,descripcion,imagen,tablatura,autor);
        this.listaLecciones.add(leccion);

        
     }


    
    


  }