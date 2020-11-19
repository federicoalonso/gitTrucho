var autoIdAlumnos = 0;

export default class Alumno {
    constructor(nombre) {
      
      this.id = autoIdAlumnos;
      this.nombre = nombre;
      
      autoIdAlumnos++;

    }
  }  