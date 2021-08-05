const fs = require('fs');
const colors = require('colors');

let readFile = async() => {

    fs.readFile('./documents/data.json', "utf-8", (err, data) => {
        if (err) {
            throw new Error("Se ha producido un error, y no se ha leido el archivo".red);
        }
        return console.log(`\n ${data} `.green);
    })
};

module.exports = { readFile };