/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Dado el array [3, 4, 13, 5, 6, 8], muestra por consola qué numeros son pares
 * y qué números son impares.
 *
 * Haz lo mismo pero en este caso indica qué números son primos y cuales no.
 *
 * Por último, crea un nuevo array en el que los valores sean el doble del array
 * original.
 *
 */

'use strict';

const nums = [3, 4, 13, 5, 6, 8];

for (const num of nums) {
    if (num % 2 === 0) {
        console.alert(`${num} es par`);
    } else {
        console.alert(`${num} es impar`);
    }
}

console.log('#############');

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (const num of nums) {
    if (isPrime(num)) {
        console.warn(`${num} es primo`);
    } else {
        console.error(`${num} no es primo`);
    }
}

console.log('#############');

const double = [];

for (const num of nums) {
    double.push(num * 2);
}

console.log(double);
