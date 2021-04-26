/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea una función que reciba una cadena de texto y la muestre poniendo
 * el signo – entre cada carácter sin usar el método replace ni replaceAll.
 *
 * Por ejemplo, si tecleo "hola qué tal", deberá salir "h-o-l-a- -q-u-e- -t-a-l".
 *
 */

'use strict';

const ejemplo = 'hola que tal';
const temporal = [];
function text(cadena) {
    for (const letra of cadena) {
        temporal.push(letra);
        temporal.push('-');
    }

    temporal.pop();
    console.log(temporal.join(''));
}
text(ejemplo);
