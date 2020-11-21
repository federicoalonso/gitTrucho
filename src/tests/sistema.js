const cancion = require('./cancion.js');
const leccion = require('./leccion.js');


class Sistema {


  constructor() {

    this.listaLecciones = [];
    this.listaCanciones = [];
    var autoIdLeccion = 0;
    var autoIdCancion = 0;


  }

  datosPrueba() {


  }

  crearLeccion(nombre, descripcion, cancion) {

    var retorno = true;

    if (nombre == "" || descripcion == "" || cancion == null) {
      retorno = false;
    }
    else if (nombre.length <= 5 || nombre.length > 20 ||
      descripcion.length <= 10 || descripcion.length > 200) {
      retorno = false;
    }
    else {
      var unaLeccion = new leccion.Leccion(this.autoIdLeccion, nombre, descripcion, cancion);
      this.listaLecciones.push(unaLeccion);
      this.autoIdLeccion++;
    }

    return retorno;

  }


  crearCancion(nombre, tablatura, autor, sonido) {

    var retorno = true;

    if (nombre == "" || tablatura == "" || autor == "") {
      retorno = false;
    }
    else if (nombre.length <= 5 || nombre.length > 20 ||
      tablatura.length < 1000 || tablatura.length > 5000 ||
      autor.length <= 5 || autor.length > 20) {

      retorno = false;
    }
    else {
      var unaCancion = new cancion.Cancion(this.autoIdCancion, nombre, tablatura, autor, sonido);
      this.listaCanciones.push(unaCancion);
      this.autoIdCancion++;
    }

    return retorno;


  }

  traerCancion(ids) {

    var retorno = null;
    var iter = 0;
    while (retorno == null && iter < this.listaCanciones.length) {

      if (ids == this.listaCanciones[iter].id) {
        retorno = this.listaCanciones[iter];
      }
      iter++;
    }
    return retorno;
  }

}

module.exports = {
  Sistema: Sistema,
  cancion: cancion,
  leccion: leccion
}