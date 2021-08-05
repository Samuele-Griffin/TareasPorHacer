const variables = require('./variables.js');
const argv = require("yargs")
    .command('crear', 'Se crea la tarea especifica', variables)
    .command('listar', 'Se listam las tareas registradas', variables)
    .command('actualizar', 'Se actualizan las tareas registradas', variables)
    .command('borrar', 'Se eliminar las tareas registradas', variables)
    .help()
    .argv;

module.exports = { argv };