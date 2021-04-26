/* #################
 * ## Ejercicio 5 ##
 * #################
 *
 * - Cuenta el número de letras "r" en el siguiente fragmento de texto:
 *   "Tres tristes tigres tragan trigo en un trigal."
 *
 * - Ahora cuenta las "t". Debes contar las mayúsculas y las minúsculas.
 *
 * - Sustituye todas las "e" por "i".
 *
 */

'use strict';
let r = 'Tres tristes tigres tragan trigo en un trigal.';
const letra = 't';
let sumaR = 0;
r = r.toLowerCase();

for (let i = 0; i < r.length; i++) {
    if (r[i] === letra) {
        sumaR++;
    }
}
console.log(sumaR);

// [i]me da la posicion

const letraE = 'Tres tristes tigres tragan trigo en un trigal.';
const letraI = letraE.replaceAll('e', 'i');
console.log(letraI);
