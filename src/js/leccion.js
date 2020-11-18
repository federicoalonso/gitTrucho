var autoIdLeccion = 0;

export default class Leccion {
    
    constructor(nombre, descripcion, imagen, tablatura, autor) {
      
      this.id = autoIdLeccion;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.imagen = imagen;
      this.tablatura = tablatura;
      this.autor = autor;

      autoIdLeccion++;
    
    }
  }