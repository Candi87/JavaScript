/**
 * #################
 * ## Ejercicio 5 ##
 * #################
 *
 * Dada la función "alphabetSoup(string)" tome el parámetro string y devuelve la cadena con las
 * letras en orden alfabético (es decir, "hola" se convierte en "ehllo").
 *
 */

'use strict';
const string = 'zyax';

function alphabetSoup(string) {
    return string.split('').sort().join('');
}

console.log(alphabetSoup(string));
