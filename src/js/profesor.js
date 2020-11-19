var autoIdProfesores = 0;

export default class Profesor {
    constructor(nombre) {
      
      this.id = autoIdProfesores;
      this.nombre = nombre;
      this.cantLecciones =0;

    }
  }  