var autoIdProfesores = 0;

class Profesor {
  constructor(nombre) {

    this.id = autoIdProfesores;
    this.nombre = nombre;
    this.cantLecciones = 0;

  }
}  

module.exports.Profesor = Profesor;