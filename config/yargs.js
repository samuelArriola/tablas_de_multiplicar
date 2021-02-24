const objs = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', objs)
    .command('crear', 'Crea las  tablas de multiplicar', objs)
    .help()
    .argv;

module.exports = {
    argv
}