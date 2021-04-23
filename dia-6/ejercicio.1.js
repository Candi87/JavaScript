'use strict';

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
        console.log(`el ${num} es par`);
    } else {
        console.log(`el ${num} es impar`);
    }
}
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
}
