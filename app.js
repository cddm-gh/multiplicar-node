const { crearArchivo, listarTabla } = require('./multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');

//let argv2 = process.argv;
//node app --base=5
//let base = argv2[2].split('=')[1];
let base = argv.base;
let limite = argv.limite;
let comando = argv._[0];
console.log('Mi limite es: ' + limite);
switch (comando) {
    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(`Archivo creado con la tabla del ${ base } limite ${limite}`))
            .catch(e => console.log('Error: ' + e));
        break;
    case 'listar':
        listarTabla(base, limite)
            .then(tabla => console.log('--FIN\n'))
            .catch(e => console.log('Error al listar: ' + e));
        break;
    default:
        console.log('Comando no reconocido.');
        break;
}