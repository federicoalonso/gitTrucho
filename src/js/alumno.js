var autoIdAlumnos = 0;

class Alumno {
  constructor(nombre) {

    this.id = autoIdAlumnos;
    this.nombre = nombre;

    autoIdAlumnos++;

  }
}

module.exports.Alumno = Alumno;