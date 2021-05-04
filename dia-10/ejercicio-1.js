/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea el objeto persona con las propiedades name y age. A mayores, crea un método que reciba un
 * array de animales y genere una nueva propiedad favoriteAnimals que almacene dicho array.
 *
 * Crea un segundo método que permita modificar cualquier propiedad del objeto. Este método debe
 * recibir dos argumentos, el nombre de la propiedad en formato string, y el valor que queremos
 * meter en la misma.
 *
 */

'use strict';
const Person = {
    name: 'Candi',
    age: 34,
    animales: function (array) {
        Person.favoriteAnimals = array;
    },
    edit: function (propiedad, valor) {
        this[propiedad] = valor; //propiedad va entre corchetes xq va a ser un string
    },
};

Person.animales(['perro , gato']);
console.log(Person);

Person.edit('age', 27);
