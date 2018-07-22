const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject('La base no es un numero');
            return;
        }

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base*index}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt ha sido creado`);
        });
    });
}

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject('La base y el limite deben ser numeros');
            return;
        }

        console.log('==================='.yellow);
        console.log(`Tabla de multiplicar del ${base} con limite ${limite}`.blue.bold);
        console.log('==================='.red);
        for (let index = 1; index <= limite; index++) {
            console.log(`${base}x${index}=` + base * index + '\n');
        }
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}