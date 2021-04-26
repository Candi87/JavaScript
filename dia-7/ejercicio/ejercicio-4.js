/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Crea un programa que compruebe si un string es palíndromo, es decir, que se lee igual
 * del derecho que del revés. Por ejemplo, "Arriba la birra" es un palíndromo.
 *
 */

'use strict';

const myText = 'Arriba la birra';

function reves(texto) {
    const temporal = texto.split('');
    temporal.reves();

    console.log(temporal.join(''));
}
myText = myText.toLowerCase().replaceAll(' ', '');
const reverseText = reves(myText);

console.log(myText === reverseText);
