let variables = {
    tarea: {
        desc: 'Ingrese la tarea por hacer',
        demand: true,
        default: '',
        alias: 't',
    },
    completado: {
        desc: 'Se necesita completar la tarea',
        default: false,
        alias: 'c',
    },
};

module.exports = { variables };