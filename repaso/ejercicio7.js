/**
 * #################
 * ## Ejercicio 7 ##
 * #################
 *
 * Crea un nuevo array con los amigos en común que tienen dos usuarios de Instagram. El ejercicio
 * debe ser resuelto sin utilizar ningún método excepto push.
 *
 */

'use strict';

const pacosFollowers = ['Manolo', 'Marta', 'Pablo', 'Kevin'];

const luciasFollowers = ['Pablo', 'Marta', 'Ana'];

let iguales = [];

for (let i = 0; i < pacosFollowers.length; i++) {
    for (let j = 0; j < luciasFollowers.length; j++) {
        if (pacosFollowers[i] === luciasFollowers[j]) iguales++;
    }
}
