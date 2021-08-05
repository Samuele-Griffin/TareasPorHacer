const fs = require('fs');
const colors = require('colors');
const writeFile = require('./crearArchivo.js');
let listadoPorHacer = [];

let updateFile = (tarea) => {

    listadoPorHacer = writeFile.cargarDataJSON();

    let idx = listadoPorHacer.findIndex(busqueda => busqueda.tarea === tarea);
    console.log(idx);

    if (idx >= 0) {
        listadoPorHacer[idx].completado = true;
        writeFile.saveDataJSON();
        return true;
    } else {
        writeFile.listadoPorHacer[idx] = [];
        return false;
    }
};

module.exports = { updateFile };