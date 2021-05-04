/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Define una función a la que le pases como parámetro un número y nos diga
 * si dicho número es primo (true) o no (false).
 *
 * [Opcional]: crea una segunda función a la que le pases como parámetro un nº
 * máximo y nos muestre por consola todos los nº primos del 2 al nº que hemos
 * pasado como parámetro. La función que creaste al principio comprueba si un
 * número es primo o no, quizás puedas hacer uso de ella.
 *
 */

function esPrimo(num) {
    for (let i = 2; i <= num; i++) {
        if (num % i === 0);
        return false;
    }
    return true;
}
console.log(num);
