/**
 * #################
 * ## Ejercicio 5 ##
 * #################
 *
 * Dada la función "longestWord(wordsArray)" tome el parámetro wordsArray y devuelve la palabra
 * más larga del array.
 *
 * Si hay dos o más palabras que tienen la misma longitud, devuelve la primera palabra.
 *
 */

'use strict';
const wordsArray = ['casa', 'moto', 'mar', 'botella'];
function longestWord(wordsArray) {
    for (let i = 0; i < wordsArray.length; i++) {
        console.log(wordsArray[i].length);
    }
}
longestWord(wordsArray);

function longestWord(wordsArray) {
    return wordsArray.reduce((acc, word) => {
        if (word.length > acc.length) return (acc = word);
        else return acc;
    }, '');
}

console.log(longestWord(wordsArray));
