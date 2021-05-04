/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Llegó el momento de poner en práctica todo lo aprendido hasta ahora para...
 * ¡¡DESACTIVAR UNA BOMBA!! Tranquilos, no tenemos que ser expertos en explosivos.
 * Se trata de crear un juego en el que damos al usuario 5 intentos para tratar de
 * desactivar la bomba.
 *
 * Estos son los pasos que debes seguir para tratar de conseguir el objetivo:
 *
 *  - Generar un nº aleatorio del 1 al 10. Existe una función en JavaScript que
 *    nos permite generar un nº al azar, ¿por qué no investigas un poco?
 *
 *  - Una vez hayamos generado el nº de desactivación daremos al usuario un total
 *    de 5 intentos para tratar de averiguar el nº en cuestión.
 *
 *  - Si acierta detenemos el bucle (con un break) y mostramos un mensaje que indica
 *    que la bomba ha sido desactivada. De lo contrario indicamos que la bomba ha explotado.
 */

'use strict';

// 1. Generar un nº entero aleatorio del 1 al 10 (la contraseña para desactivar la bomba).
let password = Math.ceil(Math.random() * 10);

// 2. Damos al usuario 5 intentos para desactivar la bomba.
for (let i = 5; i > 0; i--) {
    // 3. Permitimos al usuario insertar un nº.
    const userNumber = Number(prompt(`Intento nº ${i}. Indica un nº:`));

    // 4. Comprobamos si el nº insertado por el usuario es igual a la contraseña.
    if (userNumber === password) {
        // 5. Si es así, finalizamos el bucle y mostramos un mensaje diciendo que la bomba se ha desactivado.
        alert('¡Vives un día más!');
        break;
    } else if (i === 1) {
        // 6. Si no hay más intentos, mostramos un mensaje diciendo que la bomba ha explotado.
        alert('BOOOOOOOOM!');
    }
}
