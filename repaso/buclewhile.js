/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * - Crea un bucle "while" que recorra los números del 0 al 100 saltando de 10 en 10.
 *
 * - Posteriormente crea otro bucle "while" que recorra los números del 100 al 0 de
 *   25 en 25.
 */
'use strict';

let numero1 = 0;
let numero2 = 100;

while (numero1 <= 100) {
    console.log(numero1);
    numero1 += 10;
}
while (numero2 > -1) {
    console.log(numero2);
    numero2 -= 25;
}
