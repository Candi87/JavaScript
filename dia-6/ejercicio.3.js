/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Dados el siguiente array: [true, false, false, false, true, false, false, false, true]
 *
 *  - Los valores positivos son infectados.
 *
 *  - Los infectados transmiten su enfermedad a los no infectados que tienen a los lados.
 *
 * En este caso el resultado debería ser: [true, true, false, true, true, true, false, true, true];
 *
 */

'use strict';

const infectados = [true, false, false, false, true, false, false, false, true];

const result = [true, false, false, false, true, false, false, false, true];

for (let i = 0; i < infectedos.length; i++) {
    if (infectados[i]) {
        if (i < 0) {
            result[i - 1] = true;
        }
        if (i < infectados.length - 1) {
            result[i + 1] = true;
        }
    }
}
console.log(result);
