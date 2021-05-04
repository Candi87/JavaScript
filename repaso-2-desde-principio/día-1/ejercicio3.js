/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Crea una calculadora con "if" que opere con dos números. La calculadora
 * utilizará la variable "option" para decidir el tipo de operación a realizar.
 * Debe poder sumar, restar, multiplicar y dividir. A mayores debe permitir
 * elevar el nº A a la potencia de B.
 *
 * Bonus point: no se puede dividir entre 0.
 */

const num_a = 5;
const num_b = 2;
let option = '+';

if (option === '+') {
    console.log(num_a + num_b);
} else if (option === '-') {
    console.log(num_a - num_b);
}
