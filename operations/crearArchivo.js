const fs = require('fs');
const colors = require('colors');
let listadoPorHacer = [];

let cargarDataJSON = () => {
    try {
        return listadoPorHacer = require('./../documents/data.json');
    } catch (err) {
        listadoPorHacer = [];
        throw new Error("Ha ocurrido un error al leer el archivo JSON");
    }
};

let createArray = async(tarea) => {

    cargarDataJSON();

    let buscarTarea = listadoPorHacer.find(tarea1 => tarea1.tarea === tarea);

    if (tarea === buscarTarea) {
        throw new Error("El dato ya se encuentra almacenado en el arreglo intente con otra descripcion de la tarea");
    } else {
        let PorHacer = {
            tarea: tarea,
            completado: false,
        };

        listadoPorHacer.push(PorHacer);
        return listadoPorHacer;
    }
};

let saveDataJSON = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./documents/data.json', data, (err) => {
        if (err) {
            throw new Error("Ocurrio un error al crear el archivo JSON".red);
        }
        console.log("Operacion con exito".green);
    });
}


module.exports = { createArray, saveDataJSON, listadoPorHacer, cargarDataJSON };