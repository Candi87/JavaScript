'use strict';

/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Crea un programa que simule las tiradas de un dado:
 *
 *      - El dado debe generar en cada tirada un valor entre 1 y 6 (incluídos).
 *
 *      - Cuando el total de tiradas supere o iguale los 100 puntos muestra
 *        un mensaje indicando que se han alcanzado los 100 puntos.
 *
 */

function tirada() {
    return Math.ceil(Math.random() * 6);
}
let sumaTiradas = 0;

while (sumaTiradas < 100) {
    let dado = tirada();
    sumaTiradas += dado;
    console.log(dado);
}
console.log(`La suma de las tiradas es ${sumaTiradas}`);
