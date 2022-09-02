
const {crearArchivo } = require('./helpers/multiplicar'); // poder acceder a la funcion que esta en el helper
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();


crearArchivo(argv.b,argv.h,argv.l)
        .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
        .catch(err => console.log(err) );



     
