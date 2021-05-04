/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Utiliza el método filter para dejar pasar únicamente los nº
 * impares y mayores que 5.
 *
 */

'use strict';

const nums = [1, 5, 23, 4, 12, 45, 78, 8, 9, 10, 11];

const impares = nums.filters((value) => value > 5 && value % 2 !== 0);
console.log(impares);
