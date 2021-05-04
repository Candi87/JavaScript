/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Dada la función "primerFactorial(num)" toma el parámetro num y devuelve el factorial del mismo.
 *
 * Por ejemplo: si num = 4, entonces tu programa debería devolver (4 * 3 * 2 * 1) = 24.
 *
 */

'use strict';
const num = 4;

function primerFactorial(num) {
    let resultado = num;
    for (let i = num - 1; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
}

console.log(primerFactorial(num));
