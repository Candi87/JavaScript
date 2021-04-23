/* #################
 * ## Ejercicio 6 ##
 * #################
 *
 * Dado el array = [1, 3, 9, 14, 17, 22]
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "while" y mostrarlos en pantalla.
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "for" y mostrarlos en pantalla.
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "for of" y mostrarlos en pantalla.
 *
 *  - Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
 *
 *  - Generar otro array con todos los elementos del primer array incrementados en 1. ¿Con el método push?
 *
 *  - Calcular el promedio.
 *
 */

'use strict';
//- Iterar por todos los elementos dentro de un array utilizando "while" y mostrarlos en pantalla.
const nums = [1, 3, 9, 14, 17, 22];
let i = 0;
while (i < nums.length) {
    console.log(nums[i]) + 1;
    i++;
}

console.log(`___________________`);
// - Iterar por todos los elementos dentro de un array utilizando "for" y mostrarlos en pantalla.
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

console.log(`___________________`);
//- Iterar por todos los elementos dentro de un array utilizando "for of" y mostrarlos en pantalla.
for (const num of nums) {
    console.log(num);
}

console.log(`___________________`);
// Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
