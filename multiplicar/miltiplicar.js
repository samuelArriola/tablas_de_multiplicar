const fs = require('fs');
const color = require('colors');


let listarTabla = ((base, limite = 10) => {
    return new Promise((resolve, rejec) => {
        let datos = '';
        console.log('======================'.green);
        console.log(` ==tabla del ${base}==`.green);
        console.log('======================'.green);

        for (let i = 1; i <= (limite); i++) {
            datos += (`${base} * ${i} = ${base*i} \n`);
        }
        if (!datos) {
            rejec('No existen datos')
        } else {
            resolve(datos)
        }
    });
});

// module.exports.crearArchivo=... esta es otra forma de exportar 
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, rejec) => {
        if (!Number(base)) {
            rejec(`${base} no es un numero`);
            return
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                rejec(err);
            else
                resolve(`tabla -${base}`.green);
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}