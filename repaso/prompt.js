/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Solicita a un usuario su nombre y su primer apellido. Posteriormente
 * pregúntale si le apetece un café.
 *
 *  - Si el usuario acepta mostraremos un mensaje del tipo: "¡Bienvenid@
 *    Juan Campos! En breves recibirá su café calentito en casa."
 *
 *  - Si el usuario no acepta: "¡Bienvenid@ Juan Campos! Para el que no quiere
 *    tengo yo mucho."
 *
 */
'use strict';

const name = prompt(`Escriba su nombre`);
const surname = prompt(`ahora escriba su apellido`);

if (confirm(`${name} ${surname}, ¿le apetece un café?`)) {
    alert(
        `¡Bienvenid@ ${name} ${surname}! En breves recibirá su café calentito en casa.`
    );
} else {
    alert(
        `¡Bienvenid@ ${name} ${surname}! Para el que no quiere tengo yo mucho.`
    );
}
