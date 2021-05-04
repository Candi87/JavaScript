/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea una función "showInfo()" a la que le pases como parámetros un nombre y una edad:
 *
 *      - La función deve devolver un string del tipo: "Eres Pablo y tienes 33 años". Recuerda
 *        que el nombre y la edad son parámetros, pueden variar en cada llamado.
 *
 *      - Muestra lo que devuelva la función por consola. Aplica lo aprendido sobre "template
 *        strings" (template literals).
 *
 *      - Llama a la función tres veces pasándole distintos valores.
 *
 */
'use strict';

const showInfo = (name, age) => `Eres ${name} y tienes ${age} años`;

console.log(showInfo('Pedro', 25));
console.log(showInfo('Fer', 37));
console.log(showInfo('Paola', 42));
