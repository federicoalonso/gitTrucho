const cancion = require('./cancion.js');
const leccion = require('./leccion.js');
var autoIdLeccion = 0;
var autoIdCancion = 0; 

class Sistema {

  

  constructor() {
    
    this.listaLecciones = [];
    this.listaCanciones= [];
      
  }

  datosPrueba() {

  
  }

  crearLeccion(nombre, descripCorta, cancion, ruta_imagen, descripLarga) {

    var retorno = true;

    if(nombre == "" || descripCorta == "" || cancion == null || ruta_imagen == "" || descripLarga == "") {
       retorno = false;
    }
    else if (nombre.length < 5 || nombre.length >20 || ruta_imagen.length > 100 ||
             descripCorta.length < 10 || descripCorta.length >200 ||
             descripLarga.length < 10 || descripLarga.length >2000)
             
            {

                retorno = false;
            }
    else {
          var unaLeccion = new leccion.Leccion(autoIdLeccion, nombre, descripCorta, cancion, ruta_imagen, descripLarga);
          this.listaLecciones.push(unaLeccion);
          autoIdLeccion++;
    }
   
    return retorno;

  }


  crearCancion(nombre, tablatura, autor, ruta_sonido){

    var retorno = true;
    
    if(nombre == "" || tablatura == "" || autor == "" || ruta_sonido == "") {
       retorno = false;
   
    }
    else if (nombre.length < 5 || nombre.length >20 ||
             tablatura.length < 1000 || tablatura.length >5000 ||
             autor.length < 5 || autor.length >20 || ruta_sonido > 100)
        
         {
      
             retorno = false;
           


         }
    else {
          var unaCancion = new cancion.Cancion(autoIdCancion , nombre, tablatura, autor, ruta_sonido);
          this.listaCanciones.push(unaCancion);
          autoIdCancion++;
    }
   
    return retorno;


  }

  traerCancion(id){

    var iter = 0;
    var retorno;

    while(iter < this.listaCanciones.length && retorno == undefined) {

      if(this.listaCanciones[iter].id == id) {

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