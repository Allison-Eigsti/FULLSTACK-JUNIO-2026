const logger = require('node-color-log');
let prompt = require('prompt-sync')();


// Ejercicio 1-1
logger.color('white').bgColor('green').log('     Ejercicio 1-1    ');

function oneToHundred() {
    let numbers = [];
    for (i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            numbers.push(i);
        }
    }
    return numbers.join(',');
}

console.log(oneToHundred());



// Ejercicio 1-2
logger.color('white').bgColor('green').log('     Ejercicio 1-2    ');

function sayHi() {
    let name = prompt('What is your name?');
    console.log(`Hello, ${name}`);
}

sayHi();



// Ejercicio 1-3
logger.color('white').bgColor('green').log('     Ejercicio 1-3    ');

function tablaDeMultiplicar(n) {
    for (let i = 1; i <=10; i++) {
        let result = n * i;
        console.log(`${n} * ${i} = ${result}`);
    }
    return
}

tablaDeMultiplicar(5);



// Ejercicio 1-4
logger.color('white').bgColor('green').log('     Ejercicio 1-4    ');

function saludar(nombre = 'Usuario') {
    console.log(`Hola, ${nombre}`);
}

function procesarEntradaUsuario(callback) {
    let name = prompt('What is your name? ');
    if (name === '') {
        callback();
    }
    else {
        callback(name);
    }
}

procesarEntradaUsuario(saludar);


// Ejercicio 2-1
logger.color('white').bgColor('green').log('     Ejercicio 2-1    ');

function contieneS(str) {
    if (str.includes('s')) {
        console.log('true');
    } else {
        console.log('false');
    }
}

contieneS('string');


// Ejercicio 2-2
logger.color('white').bgColor('green').log('     Ejercicio 2-3    ');

function parOImpar(n) {
    let numero = parseInt(n);
    if (numero % 2 === 0) {
        console.log(`${n} es par`);
    } else {
        console.log(`${numero} es impar`);
    }  
}

parOImpar(5);

// Ejercicio 2-3
logger.color('white').bgColor('green').log('     Ejercicio 2-3    ');

function elevar(numero) {
    let n = parseInt(numero)
    console.log(n ** n);
}

elevar(3);


// Ejercicio 2-4
logger.color('white').bgColor('green').log('     Ejercicio 2-4    ');

function areaTriangulo(ancho, alto) {
    let result = (parseFloat(ancho) * parseFloat(alto)) / 2;
    console.log(result);
}

areaTriangulo(3, 4);

// Ejercicio 2-5
logger.color('white').bgColor('green').log('     Ejercicio 2-5    ');

function areaRectangulo(ancho, alto) {
    let result = (parseFloat(ancho) * parseFloat(alto));
    console.log(result);
}

areaRectangulo(2, 4);

// Ejercicio 2-6
logger.color('white').bgColor('green').log('     Ejercicio 2-6    ');

function areaCirculo(radio) {
    let result = Math.PI * (parseFloat(radio) ** 2);
    console.log(result);
}

areaCirculo(2);



// Ejercicio 3-1
logger.color('white').bgColor('green').log('     Ejercicio 3-1    ');

function elevarAlExponente(base, exp) {
    console.log(base ** exp);
}

elevarAlExponente(2, 3);

// Ejercicio 3-2
logger.color('white').bgColor('green').log('     Ejercicio 3-2    ');

function fibonacciTen() {
    let fibonacci = [1, 1];
    while (fibonacci.length < 10) {
        fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
    }
    console.log(fibonacci);
}

fibonacciTen();