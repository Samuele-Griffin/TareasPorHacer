const writeFile = require('./crearArchivo.js');
let listadoPorHacer = [];

let deleteTarea = async(tarea) => {
    listadoPorHacer = writeFile.cargarDataJSON();

    let idx = listadoPorHacer.findIndex(busqueda => busqueda.tarea === tarea);

    if (idx >= 0) {
        listadoPorHacer.splice(idx, 1);
        writeFile.saveDataJSON();
    } else {
        listadoPorHacer = [];
    }

};

module.exports = { deleteTarea };