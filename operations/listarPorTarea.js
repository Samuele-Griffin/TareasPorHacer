const colors = require('colors');
let dataJSON = [];

let readJSON = async() => {
    try {
        dataJSON = require('./../documents/data.json')
        return dataJSON;
    } catch (err) {
        throw new Error('Error al ejecutar la solicutd'.red);
    }
}

let describirTareas = () => {
    for (let data of dataJSON) {
        console.log(data);
    }
};

module.exports = { readJSON, describirTareas };