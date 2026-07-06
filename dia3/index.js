import logger from 'node-color-log';
import im2 from "image-and-video-to-ascii";




// Nivel 1
logger.color('red').bgColor('white').log('     Nivel 1- operaciones basicas     ');

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(array);

console.log(array[2], array[5]);

let arrLength = array.length;
console.log(arrLength);


console.log(`Array inicial: ${array}... actualizando...`)

array.unshift(0);
array.push(11);

console.log(array);

array.splice(4, 2);

console.log(`Array sin posiciones 5 y 6: ${array}`);

let positionOf8 = array.indexOf(8);

console.log(`Indice de 8 = ${positionOf8}`);

console.log(array.reverse());

let string = array.join(',');

console.log(string);

console.log(string.split(','));



// Nivel 2
logger.color('green').bgColor('white').log('     Nivel 2- Recorrer, modificar y buscar    ');

console.log(array);

function imprime(arr) {
    arr.forEach((element, index) => {
        console.log(`${index + 1}. ${element}`)
    });
}

console.log(imprime(array));


const newArray = array.map((e) => e * 2);
console.log(newArray);


newArray.indexOf(2);

console.log(`El indice del valor 2 en el array es: ${newArray.indexOf(2)}`);

const filteredArray = newArray.filter((e) => e > 10);

console.log(filteredArray);



// Nivel 3
logger.color('blue').bgColor('white').log('     Nivel 3-  Desestructuración y Spread Syntax    ');

const colores = ['red', 'green', 'blue', 'yellow'];

const [color1, color2, color3, color4] = colores;

console.log(color1);
console.log(color2);
console.log(color3);
console.log(color4);

//Spread syntax

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));


// Combinano arrays
const masColores = ['orange', 'purple']

const newColors = [...colores,  ...masColores]
console.log(newColors)

let copiaDeColores = [...newColors];
console.log(copiaDeColores);



// Extra
logger.color('magenta').bgColor('white').log('     Extra    ');

im2.showImage("rainbow.jpg");