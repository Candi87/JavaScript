/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * - Crea un bucle "for" que recorra los números del 0 al 100 saltando de 10 en 10.
 *
 * - Posteriormente crea otro bucle "for" que recorra los números del 100 al 0 de
 *   25 en 25.
 */
'use strict';

const numM = 100;
const numMe = 0;

for (let i = 0; i <= 100; i += 10) {
    console.log(i);
}

for (let i = 100; i >= 0; i -= 25) {
    console.log(i);
}
