const argv = require('yargs')
                .option('b',{
                   alias: 'numero',
                   type: 'number' ,
                   demandOption:true,
                   describe: 'es el numero base de la tabla de multiplicar'   
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number' ,
                    demandOption:true,
                    describe: 'es el numero hasta donde se hace la multiplicacion'   
                 })
                .option('l',{
                     alias:'listar',
                     type : 'boolean',
                      default : false,
                      describe:'Muestra la tabla en la consola'
                })
                .check( (argv,options) => {
                        if ( isNaN(argv.b) ) {
                               throw 'el numero debe ser un entero'; 
                        }
                        if ( isNaN(argv.h) ) {
                            throw 'el numero debe ser un entero'; 
                     }
                        return true;
                })                       
                .argv;

module.exports = argv;