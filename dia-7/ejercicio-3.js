/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Crea una función que pida una cadena de texto y la devuelva al revés.
 * Es decir, si tecleo "hola que tal" deberá mostrar "lat euq aloh".
 *
 */

'use strict';
function reves(texto) {
    const temporal = texto.split('');
    temporal.reverse();

    console.log(temporal.join(''));
}
reves('hola que tal');
