'use strict';

// ==============================================================================
// ==============================================================================

console.log('---------------');
console.log('P O I N T   3.1');
console.log('---------------');

/**
 * Coerción de tipos 1:
 *
 * Podemos entender por coerción de tipos el hecho de forzar el cambio de un tipo
 * de variable a otro (de Number a String, por ejemplo).
 *
 * En JavaScript el operador (+) tiene dos funciones: suma y concatenación. Sin
 * embargo, esta segunda función tiene prioridad. Concatenar es lo mismo que unir
 * una o más cadenas de texto (strings).
 *
 * Imaginemos la operación "42" + 8. Estamos tratando de sumar un nº de tipo String
 * con un nº de tipo Number. JavaScript tiene claro que lo prioritario es concatenar
 * por lo que hará todo lo posible para lograr la concatenación. En este caso tomará
 * el valor 8 y lo convertirá a String de forma automática. Finalmente concatenara
 * ambos strings dando como resultado "428", algo inesperado en un principio.
 *
 * Siempre que queramos operar con dos valores debemos asegurarnos de que ambos sean
 * de tipo Number. Para ello podemos aplicar dos de los métodos de la clase Number que
 * vimos en el apartado anterior:
 *
 *  # Number.parseInt(string, base)
 *
 *  # Number.parseFloat(valor)
 *
 */

let num_A = '42';

let num_B = 8;

let num_C = '2.55';

console.log(num_A + num_B); // "428"

// Convertimos el String a Number entero.
num_A = Number.parseInt(num_A);

console.log(num_A + num_B); // 50

console.log(num_B + num_C); // "82.55"

// Convertimos el String a Number con decimales.
num_C = Number.parseFloat(num_C);

console.log(num_B + num_C); // "10.55"

// ==============================================================================
// ==============================================================================

console.log('---------------');
console.log('P O I N T   3.2');
console.log('---------------');

/**
 * Coerción de tipos 2:
 *
 * La coerción de tipos puede resultar muy útil cuando queremos personalizar un string
 * con valores introducidos en variables.
 *
 */

const parte_1 = 'Hola, me llamo';

const nombre = 'Pablo.';

const parte_2 = 'Tengo';

const edad = 32;

const parte_3 = 'años.';

// Fíjate en el resultado de esta concatenación.
console.log(parte_1 + nombre);

// Para evitar que se junten las palabras "llamo" y "Pablo" agregamos un espacio.
console.log(parte_1 + ' ' + nombre);

// Aplicamos la misma lógica agregando espacios entre uniones. Fíjate como gracias a
// la coerción de tipos la constante "edadPablo" de tipo Number se convierte a String.
console.log(parte_2 + ' ' + edad + ' ' + parte_3);

// Unimos todo en un mismo string.
const fraseCompleta =
    parte_1 + ' ' + nombre + ' ' + parte_2 + ' ' + edad + ' ' + parte_3;

console.log(fraseCompleta);

// ==============================================================================
// ==============================================================================

console.log('---------------');
console.log('P O I N T   3.3');
console.log('---------------');

/**
 * Template literals ~ Template strings:
 *
 * Los template literals (o template strings) son una muy buena solución al problema que teníamos
 * en el punto anterior al unir varios strings que nos obligaba a introducir un espacio entre la
 * unión de dos strings para evitar que se juntaran dos palabras distintas.
 *
 *  # console.log('Hola, me llamo' + 'Pablo.'); --> "Hola me llamoPablo."
 *
 * Para solucionarlo agregábamos un espacio entre ambos strings:
 *
 *  # console.log('Hola, me llamo' + ' ' + 'Pablo.'); --> "Hola me llamo Pablo."
 *
 * Utilizando los template strings podemos evitar tener que andar agregando espacios entre cada
 * string. Para poder utilizarlos debemos hacer uso OBLIGATORIAMENTE de la comilla francesa o
 * backtip: `Mi texto`;
 *
 * Si nuestro teclado tiene la distribución en español podemos encontrar este acento a la derecha
 * de la tecla (P) por norma general. El template literal comienza por símbolo de dolar ($) seguido
 * de una llave de apertura (}) y otra de cierre (}) dentro de la cual va el nombre de la variable
 * que queremos incluír: `Mi texto ${miVariable_1}, sigo escribiendo ${miVariable_2}.`;
 *
 */

const miNombre = 'Raquel';

let miEdad = 19;

// Fíjate que ya no es necesario insertar espacios como lo hacíamos antes.
console.log(`Hola, me llamo ${miNombre}. Tengo ${miEdad} años.`);

// ==============================================================================
// ==============================================================================

console.log('---------------');
console.log('P O I N T   3.4');
console.log('---------------');

/**
 * Clase String
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 *
 */

console.log(String);

console.log(String.prototype);

// ==============================================================================
// ==============================================================================

console.log('---------------');
console.log('P O I N T   3.5');
console.log('---------------');

/**
 * Métodos estáticos de la clase String
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # String.fromCharCode(valor)
 *
 *    Retorna un string creado desde una secuencia de valores UTF-16.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 * UTF-16: http://cssimplified.com/wp-content/uploads/2014/09/ascii_code.jpg
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 *
 */

console.log(String.fromCharCode(63)); // "?"

console.log(String.fromCharCode(72, 101, 108, 108, 111, 33)); // "Hello!"

// ==============================================================================
// ==============================================================================

console.log('---------------');
console.log('P O I N T   3.6');
console.log('---------------');

/**
 * Propiedades de la instancia de String
 *
 * Las propiedades son como variables ligadas al objeto en cuestión. En este caso la
 * propiedad por excelencia de los strings es "length".
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # miString.length
 *
 *    Muestra la longitud numérica del string en cuestión.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 *
 */

const miFrase = '¡Hola Manolo!';

// La propiedad "length" cuenta TODOS los caracteres. Los espacios también son un caracter.
console.log(miFrase.length); // 13

// ==============================================================================
// ==============================================================================

console.log('---------------');
console.log('P O I N T   3.7');
console.log('---------------');

/**
 * Métodos de la instancia de String
 *
 * Antes de continuar has de saber que cada caracter de un string ocupa una posición en concreto.
 * El primer caracter de un string siempre se encontrará en la posición 0, la siguiente posición
 * será la 1, luego la 2, la 3, y así sucesivamene.
 *
 * ¡Ojo! Ninguno de estos métodos modifica el array original.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # miString.charAt(posicion)
 *
 *    Retorna el caracter ubicado en la posición indicada. Si no existe retorna un string vacío: ''
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # miString.charCodeAt(posicion)
 *
 *    Retorna el valor UTF-16 del caracter ubicado en la posición indicada.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # miString.concat(string_1, string_n...)
 *
 *    Concatena el string sobre el cuál aplicamos el método "concat" con los strings que le pasemos.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # miString.includes(string, startPosition)
 *
 *    Retorna true si el string que le pasamos se encuentra en miString. Adicionalmente podemos
 *    decirle desde qué posición queremos partir.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # miString.indexOf(string, startPosition)
 *
 *    Retorna la posición del string dentro de miString. Podemos indicar una posición de partida.
 *    Este método recorre el array de principio a fin. Si no encuentra el string retorna -1. Si
 *    hubiese varias coincidencias ÚNICAMENTE retorna la posición de la primera coincidencia.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # miString.lastIndexOf(string, startPosition)
 *
 *    Lo mismo que "indexOf" pero recorriendo miString de izquierda a derecha.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # miString.localeCompare(string, region)
 *
 *    Este método comprueba si miString es anterior (-1), equivalente (0) o posterior (1) a la
 *    cadena pasada como parámetro en el orden lexicográfico.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # miString.repeat(numero)
 *
 *    Retorna un string en el que se repite miString el nº de veces que se especifique.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # miString.slice(posicionInicial, posicionFinal)
 *
 *    Retorna una parte de miString. La posición final es opcional.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # miString.substring(posicionInicial, posicionFinal)
 *
 *    Funciona igual que "slice". Si tienes curiosidad por conocer las diferencias:
 *    https://www.shorturl.at/fhiQ0
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # miString.toUpperCase()
 *
 *    Retorna miString en mayúscula. Como alternativa tenemos el método "toLocaleUpperCase" al
 *    cuál podemos pasarle una región.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # miString.toLowerCase()
 *
 *    Retorna miString en minúscula. Como alternativa tenemos el método "toLocaleLowerCase" al
 *    cuál podemos pasarle una región.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # miString.replace(stringABuscar, stringReemplazo)
 *
 *    Busca un string en miString y, si existe una coincidencia la reemplaza por el string de
 *    reemplazo. SOLO reemplaza la primera coincidencia que se encuentre. Devuelve un nuevo
 *    string con el elemento reemplazado.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # miString.replaceAll(stringABuscar, stringReemplazo)
 *
 *    Funciona igual que el anterior pero reemplaza TODAS las coincidencias.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # miString.split(separador, limite)
 *
 *    Divide el string en substrings generando y retornando un array. El separador es un string
 *    que indica cómo queremos realizar la división. Si no pasamos un separador se nos devolverá
 *    un array con un único elemento, miString al completo. Se suele utilizar como separador un
 *    string vacío "" en cuyo caso se generará un nuevo array en el que caracter de miString
 *    se convertirá en una posición del array retornado. A mayores, podemos pasar un límite
 *    que indicará el máximo de divisiones que tendrán lugar.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # miString.trim()
 *
 *    Elimina los espacios en blanco que haya al inicio y al final del string. No elimina los
 *    espacios en blanco que puedan existir de por medio.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 *
 */

const miTexto = 'Tres tristes tigres.';

const otroTexto = 'Tragan trigo en un trigal.';

// El caracter ubicado en la posición 0.
console.log(miTexto.charAt(0)); // "T"

// El caracter ubicado en la posición 3.
console.log(miTexto.charAt(3)); // "s"

// No existe la posición 25 en el string.
console.log(miTexto.charAt(25)); // ""

// El valor UTF-16 del caracter ubicado en la posición 0.
console.log(miTexto.charCodeAt(0)); // 84

// El valor UTF-16 del caracter ubicado en la posición 4.
console.log(miTexto.charCodeAt(4)); // 32

// El valor UTF-16 del caracter ubicado en la posición 25. No existe esta posición.
console.log(miTexto.charCodeAt(25)); // NaN

console.log(miTexto.concat(' ', otroTexto, ' Blablabla...')); // "Tres tristes tigres. Tragan trigo en un trigal. Blablabla..."

console.log(miTexto.includes('r')); // true

// En este caso le ordeno empezar a buscar a partir de la posición 17, que en este caso equivaldría a
// la última "e". Como a la derecha de dicha "e" no hay más "r" nos devuelve false.
console.log(miTexto.includes('r', 17)); // false

// La letra "a" va antes que la letra "c", por tal motivo obtenemos un -1.
console.log('a'.localeCompare('c')); // -1

// Lexicográficamente la palabra "mundo" va después de "hola", por lo que obtenemos un valor postivo.
console.log('mundo'.localeCompare('hola')); // 1

// "a" y "a" son equivalentes por lo que obtenemos un 0.
console.log('a'.localeCompare('a')); // 0

console.log('hola'.repeat(3)); // "holaholahola"

// Al no indicar posición final me retorna el contenido de "miTexto" desde la posición 5 incluída
// (letra t) hasta el final del string.
console.log(miTexto.slice(5)); // "tristes tigres."

// Retorna el fragmento de texto desde la posición 5 (incluída) hasta la posición 12 (NO incluída).
console.log(miTexto.slice(5, 12)); // "tristes"

const miAnimal = 'ArAñA';

console.log(miAnimal.toUpperCase()); // "ARAÑA"

console.log(miAnimal.toLowerCase()); // "araña"

// Reemplaza la primera coincidencia.
console.log(miAnimal.replace('A', 'O')); // "OrAñA"

// Reemplaza TODAS las coincidencias.
console.log(miAnimal.replaceAll('A', 'O')); // "OrOñO"

// Generamos un nuevo array en el que caracter pasa a ser una posición del array.
console.log(miAnimal.split('')); // ["A", "r", "A", "ñ", "A"]

// Generamos un nuevo array en el que caracter pasa a ser una posición del array.
// Limito el nuevo array a 3 posiciones.
console.log(miAnimal.split('', 3)); // ["A", "r", "A"]

// Generamos un nuevo array utilizando como divisor un espacio en blanco.
console.log(miTexto.split(' ')); // ["Tres", "tristes", "tigres."]

const espaciosTexto = '    ¡Hola ola caracola!     ';

// Eliminamos los espacios en blanco que haya al inicio y al final del string. Los espacios
// intermedios entre "Hola ola" y "ola caracola" no son eliminados.
console.log(espaciosTexto.trim()); // "¡Hola ola caracola!"

// ==============================================================================
// ==============================================================================
