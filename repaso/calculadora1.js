'use strict';
/*
 * Crea una calculadora con "if" que opere con dos números. La calculadora
 * utilizará la variable "option" para decidir el tipo de operación a realizar.
 * Debe poder sumar, restar, multiplicar y dividir. A mayores debe permitir
 * elevar el nº A a la potencia de B.
 *
 * Bonus point: no se puede dividir entre 0.
 */

if (option === '+') {
    console.log(num_A + num_B);
} else if (option === '-') {
    console.log(num_A - num_B);
} else if (option === '*') {
    console.log(num_A * num_B);
} else if (option === '/') {
    if (num_B === 0) {
        throw new Error('No se puede dividir entre 0');
    } else {
        console.log(num_A / num_B);
    }
} else if (option === '^') {
    console.log(num_A ** num_B);
} else {
    throw new Error('Tipo de operación incorrecto.');
}
