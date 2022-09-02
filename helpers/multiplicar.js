const fs = require('fs');
const colors = require('colors');

// const crearArchivo = ( numero =5)=>{

//     return new Promise((resolve, reject) =>{ //promesa

//         console.log('==============');
//         console.log('la tabla del' , numero);
//         console.log('==============');
    
//         let salida = '';
//         for(let i = 1; i<=10; i++)
//         {
            
            
//             let multiplicacion = i * numero;
    
//             salida += `${numero} x ${i} = ${multiplicacion}\n`;
    
//         }
//         fs.writeFileSync(`tabla-${numero}.txt`, salida);
    
//         resolve(`tabla-${numero}.txt`);

//     })

   

// }

const crearArchivo = async( numero =5,hasta=1, listar)=>{

    try {

        
    console.log('=============='.green);
    console.log('la tabla del' , colors.red(numero));
    console.log('=============='.green);

    let salida = '';
    for(let i = 1; i<=hasta; i++)
    {
        
        
        let multiplicacion = i * numero;

        salida += `${numero} x ${i} = ${multiplicacion}\n`;

    }
    if(listar){
        
    console.log(colors.blue.underline(salida));
    }
    fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida);//ruta para la creacion del archivo txt

    return `tabla-${numero}.txt`;
        
    } catch (err) {

        throw err;
        
    }



}

module.exports = {

    crearArchivo //acceder a la funcion desde otra clase
}