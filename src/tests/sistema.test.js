const sistema = require('./sistema.js');

var sis;
beforeEach(()=>{
    sis = new sistema.Sistema();
});


test('crear una canción correctamente', () => {
       
    var canc = new sistema.cancion.Cancion();
    expect(sis.crearLeccion('nombre', 'descripción', canc)).toBeTruthy();
});

test('crear una canción sin cancion', () => {
       
    var canc = null;
    
    expect(sis.crearLeccion('nombre', 'descripción', canc)).toBeFalsy();
});

test('crear una canción con nombre vacío', () => {
       
    var canc = new sistema.cancion.Cancion();
    
    expect(sis.crearLeccion('', 'descripción', canc)).toBeFalsy();
});

test('crear una canción con descripción vacía', () => {
   
    
    var canc = new sistema.cancion.Cancion();
    
    expect(sis.crearLeccion('nombre', '', canc)).toBeFalsy();
});

test('crear una leccion con nombre menos de 5 caracteres', () => {
   
    
    var canc = new sistema.cancion.Cancion();
    
    expect(sis.crearLeccion('abcd', 'descripción', canc)).toBeFalsy();
});

test('crear una leccion con nombre más de 20 caracteres', () => {
   
    
    var canc = new sistema.cancion.Cancion();
    var nombre = "";
    
    for(var i = 1; i<=21 ; i++){

        nombre+="a";

    }
    
    expect(sis.crearLeccion(nombre, 'descripción', canc)).toBeFalsy();
});


test('crear una leccion con descripcion menos de 10 caracteres', () => {
   
    
    var canc = new sistema.cancion.Cancion();
    var descripcion = "";
    
    for(var i = 1; i<=9 ; i++){

        descripcion+="a";

    }
    
    expect(sis.crearLeccion("nombre", descripcion, canc)).toBeFalsy();
});

test('crear una leccion con descripcion más de 200 caracteres', () => {
   
    
    var canc = new sistema.cancion.Cancion();
    var descripcion = "";
    
    for(var i = 1; i<=201 ; i++){

        descripcion+="a";

    }
    
    expect(sis.crearLeccion("nombre", descripcion, canc)).toBeFalsy();
});


/* FUNCION CREAR CANCION */

test('crear una canción correctamente', () => {
   
    

    var tablatura = "";
    
    for(var i = 1; i<=1000 ; i++){

        tablatura+="a";

    }
        
    expect(sis.crearCancion('nombre', tablatura, 'autor1' , 'ruta_sonido')).toBeTruthy();
});


test('crear una canción con nombre menos de 5 caracteres', () => {
   
    

    var tablatura = "";
    
    for(var i = 1; i<=1000 ; i++){

        tablatura+="a";

    }
        
    expect(sis.crearCancion('abcd', tablatura, 'autor1' , 'ruta_sonido')).toBeFalsy();
});

test('crear una canción con nombre vacío', () => {
   
    

    var tablatura = "";
    
    for(var i = 1; i<=1000 ; i++){

        tablatura+="a";

    }
        
    expect(sis.crearCancion('', tablatura, 'autor1' , 'ruta_sonido')).toBeFalsy();
});

test('crear una canción con nombre mayor de 20 caracteres', () => {
   
    

    var tablatura = "";
    var nombre = "";
    
    for(var i = 1; i<=1000 ; i++){

        tablatura+="a";

    }

    for(var j = 1; i<=21 ; j++){

        nombre+="a";

    }
        
    expect(sis.crearCancion(nombre, tablatura, 'autor1' , 'ruta_sonido')).toBeFalsy();
});

test('crear una canción tablatura menor a 1000 caracteres', () => {
   
    

    var tablatura = "";
    
    for(var i = 1; i<=999 ; i++){

        tablatura+="a";

    }
        
    expect(sis.crearCancion('abcd', tablatura, 'autor1' , 'ruta_sonido')).toBeFalsy();
});

test('crear una canción tablatura mayor a 5000 caracteres', () => {
   
    

    var tablatura = "";
    
    for(var i = 1; i<=5000 ; i++){

        tablatura+="a";

    }
        
    expect(sis.crearCancion('abcd', tablatura, 'autor1' , 'ruta_sonido')).toBeFalsy();
});

test('crear una canción tablatura vacía', () => {
   
    

    var tablatura = "";
            
    expect(sis.crearCancion('abcd', tablatura, 'autor1' , 'ruta_sonido')).toBeFalsy();
});


test('crear una canción con autor menos de 5 caracteres', () => {
   
    

    var tablatura = "";
    
    for(var i = 1; i<=1000 ; i++){

        tablatura+="a";

    }
        
    expect(sis.crearCancion('nombre', tablatura, 'autor' , 'ruta_sonido')).toBeFalsy();
});

test('crear una canción con autor vacío', () => {
   
    

    var tablatura = "";
    
    for(var i = 1; i<=1000 ; i++){

        tablatura+="a";

    }
        
    expect(sis.crearCancion('nombre', tablatura, '' , 'ruta_sonido')).toBeFalsy();
});

test('crear una canción con autor mayor a 20 caracteres', () => {
   
    

    var tablatura = "";
    var autor = "";
    
    for(var i = 1; i<=1000 ; i++){

        tablatura+="a";

    }

    for(var j = 1; i<=21 ; i++){

        autor+="a";

    }
        
    expect(sis.crearCancion('nombre', tablatura, '' , 'ruta_sonido')).toBeFalsy();
});


/* Traer Canción */


test('traigo una canción inexistente de la lista de canciones del sistema', () => {
   
        expect(sis.traerCancion(1)).toBeNull();
}); 

test('traigo una canción existente de la lista de canciones del sistema', () => {
       

    var tablatura = "";
        
    for(var i = 1; i<=1000 ; i++){

        tablatura+="a";

    }

    sis.crearCancion('nombre', tablatura, "autor1", "ruta_sonido");
    
    expect(sis.traerCancion(0)).toBeNull();
});


