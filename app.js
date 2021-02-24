const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/miltiplicar');
const color = require('colors');


let comando = argv._[0]; //escoje lo que viene de la consola : [0]: el comando se almacen en la primera posicion del argv

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(res => console.log(`archivo creado: ${res}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no existente');
        break;
}
/* 
una forma de obtener los datos por consola
let argv2 = process.argv;
console.log(argv2); */
/* let parametro = argv[2];
let base = parametro.split('=')[1];
console.log(base);

 */