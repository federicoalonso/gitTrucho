
class Cancion {

  constructor(autoIdCancion, nombre, tablatura, autor , sonido, imagen) {

    this.id = autoIdCancion;
    this.nombre = nombre;
    this.autor = autor;
    this.tablatura = tablatura;
    this.sonido = sonido;
    this.imagen = imagen;
    
  }
}

module.exports.Cancion = Cancion;