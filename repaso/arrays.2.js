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
    console.log(nums[i]);
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
for (const num of nums) {
    console.log(num + 1);
}
//*  - Generar otro array con todos los elementos del primer array incrementados en 1. ¿Con el método push?
console.log(`____________________`);
const mas1 = [];

//- Generar otro array con todos los elementos del primer array incrementados en 1. ¿Con el método push?

for (const num of nums) {
    mas1.push(num + 1);
}
console.log(mas1);
//- Calcular el promedio.
let total = 0;

for (const num of nums) {
    total += num;
}
console.log(total / mas1.length);
