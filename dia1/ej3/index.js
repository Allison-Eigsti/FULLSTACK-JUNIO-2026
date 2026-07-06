let prompt = require('prompt-sync')();
//
// get input from the user.
//
let n1 = prompt('Ingrese un numero? ');
let n2 = prompt('Ingrese otro numero? ');

console.log('La suma de', n1, 'y', n2, 'es', parseInt(n1) + parseInt(n2));