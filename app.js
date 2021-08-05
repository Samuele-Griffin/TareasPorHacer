const argv = require('./config/yargs.js').argv;
const colors = require('colors');
const crear = require('./operations/crearArchivo.js');
const listar = require('./operations/listarArchivo.js');
const listar2 = require('./operations/listarPorTarea.js');
const actualizar = require('./operations/actualizarArchivo.js');
const borrar = require('./operations/deleteArchivo.js');

let parametro = argv._[0];

switch (parametro) {
    case 'crear':
        console.log(colors.yellow("Creando tarea por hacer"));
        console.log('Tarea Ingresada:'.blue, colors.white(argv.t));
        crear.createArray(argv.t);
        crear.saveDataJSON();
        break;
    case 'listar':
        console.log(colors.yellow("Listando todas las tareas por hacer registradas en el sistema"));
        listar2.readJSON();
        listar2.describirTareas();
        break;
    case 'actualizar':
        console.log(colors.yellow("Actualizando todas las tareas por hacer registradas en el sistema"));
        actualizar.updateFile(argv.t);
        break;
    case 'borrar':
        console.log(colors.yellow("Borrando tarea seleccionada en el sistema"));
        borrar.deleteTarea(argv.t);
        break;
    default:
        console.log("Comando no valido".error);
        break;
}