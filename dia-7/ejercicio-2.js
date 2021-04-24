/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Crea una función que interprete el contenido entre paréntisis de
 * un string dado.
 *
 *      - El programa debe devolver el texto rodeando por paréntisis.
 *
 *      - Si no hay paréntisis se devolverá un string vacío.
 *
 *      - Si existe paréntisis de apertura pero no de cierre se devolverá
 *        el contenido desde el primer paréntisis hasta el final del string.
 *
 *      - Si existe paréntisis de cierre pero no de apertura se devolverá
 *        el contenido desde el inicio hasta el paréntisis de cierre.
 *
 * Por ejemplo, si el string fuera "Hola (que) tal" se mostrará el "que".
 *
 * Si fuera "Hola (que tal" se devolvería "que tal".
 *
 */

'use strict';

function interpretar(texto) {
    let inicio = texto.indexOf('(');
    let final = texto.indexOf(')');

    if (final === -1) {
        final = texto.length;
    }
    if (inicio === -1) {
        inicio = 0;
    } else {
        inicio += 1;
    }

    console.log(inicio);
    console.log(final);
    console.log(texto.slice(inicio, final));
}

interpretar('Hola (que) tal');
