const cancion = require('./cancion.js');

var autoIdLeccion = 0;

class Leccion {

  constructor(nombre, descripcion, cancion) {

    var d = new Date();
    
    this.id = autoIdLeccion;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fecha = d.getDay() + "/" + d.getMonth() + "/" + d.getFullYear();
    this.cancion = cancion;
    
    autoIdLeccion++;

  }
}

module.exports.Leccion = Leccion;