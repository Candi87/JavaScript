'use strict';

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

function showInfo(nombre, edad) {
    nombre;
    edad;
    console.log('Hola mi nombre es ' + nombre + ' y tengo ' + edad + ' años');
}
showInfo('Candi', 34);
showInfo('Pablo', 45);
showInfo('Pedro, 22');
