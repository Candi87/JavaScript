/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Escribe un programa que permita al usuario introducir elementos en un array.
 * El programa finalizará cuando el usuario introduzca el string "fin", y se
 * mostrará por consola el contenido del array.
 *
 */
let datos = [];
let acabar = '';
while (acabar !== 'fin') {
    acabar = prompt('dime la palabra');
    datos.push(acabar);
}
console.log(datos);
