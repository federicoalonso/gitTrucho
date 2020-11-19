const sistema = require('../src/js/sistema.js');

test('primero', () => {
    var sis = new sistema.Sistema();
    expect(sis.cargarLeccion('asdas', 'asdasdad', 'asdadasdas')).toBe(true);
});