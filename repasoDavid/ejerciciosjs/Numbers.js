// ==============================================================================
// ==============================================================================

console.log('---------------');
console.log('P O I N T   2.1');
console.log('---------------');

/**
 * Operadores aritméticos:
 *
 *   a + b    |   Suma
 *   a - b    |   Resta
 *   a * b    |   Multiplicación
 *   a / b    |   División
 *   a % b    |   Residuo --> Devuelve el resto entero de dividir los dos operandos.
 *   a ** b   |   Exponenciación --> Eleva el "a" a la potencia de "b".
 *   a++      |   Incremento --> Incrementa el "a" en una unidad.
 *   a--      |   Decremento --> Decrementa el "a" en una unidad.
 *   a += b   |   Asignación de adición --> Lo mismo que "a = a + b ".
 *   a -= b   |   Asignación de sustracción --> Lo mismo que "a = a - b ".
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
 *
 */

console.log(4 + 2); // 6

console.log(4 - 2); // 2

console.log(4 * 2); // 8

console.log(4 / 2); // 2

console.log(4 % 2); // 0

console.log(4 ** 2); // 16

let miNumero = 1;

miNumero++;

console.log(miNumero); // 2

miNumero--;
miNumero--;

console.log(miNumero); // 0

let num_A = 10;

let num_B = 16;

console.log((num_A += 5)); // "num_A = 10 + 5" --> 15

console.log((num_B -= 8)); // "num_B = 16 - 8" --> 8

// ==============================================================================
// ==============================================================================

console.log('---------------');
console.log('P O I N T   2.2');
console.log('---------------');

/**
 * Operadores de comparación.
 *
 * Comprueban si se cumple la condición. Devuelven true o false:
 *
 *   a === b   |   Igualdad estricta
 *   a !== b   |   Desigualdad estricta
 *   a < b     |   Menor que
 *   a <= b    |   Menor o igual que
 *   a > b     |   Mayor que
 *   a >= b    |   Mayor o igual que
 *
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
 *
 */

console.log(2 === '2'); // false

console.log(2 !== '2'); // true

console.log(2 < 3); // true

console.log(2 <= 3); // true

console.log(2 > 3); // false

console.log(2 >= 2); // true

// ==============================================================================
// ==============================================================================

console.log('---------------');
console.log('P O I N T   2.3');
console.log('---------------');

/**
 * Operadores lógicos.
 *
 * Comprueban si se cumple la condición. Devuelven true o false:
 *
 *   a && b   |   AND --> Devuelve true ÚNICAMENTE si las condiciones "a" y "b" se cumplen.
 *            |
 *   a || b   |   OR --> Devuelve true si una de las dos condiciones se cumple, es decir,
 *            |          no es necesario que se cumplan las dos.
 *            |
 *   !a       |   NOT --> Devuelve false si la condición se cumple. Si la condición no se
 *            |           cumple devuelve true. Digamos que le da la vuelta a la tortilla.
 *
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
 *
 */

console.log(5 > 1 && 3 <= 2); // false

console.log(5 > 1 || 3 <= 2); // true

console.log(!(5 > 1 || 3 <= 2)); // false

console.log(!(5 > 1)); // false

// ==============================================================================
// ==============================================================================

console.log('---------------');
console.log('P O I N T   2.4');
console.log('---------------');

/**
 * Clase Number
 *
 * Las clases son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript.
 * Estas proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.
 * Podemos pensar en una clase como si se trataran de "funciones especiales" que nos permitirán,
 * a partir de una plantilla, crear una nueva instancia de esa clase.
 *
 * Por así decirlo, todos los coches tienen características comunes pero, en función de la marca y
 * el modelo, estas características podrían variar. Podríamos tener una clase coche con todas esas
 * características en común y, siempre que queramos crear un nuevo modelo concreto, podríamos hacer
 * que el nuevo coche en cuestión heredara todas las propiedades de la clase coche "padre".
 *
 * No te preocupes si todavía no lo has comprendido. Lo que sí es importante que entiendas es que
 * todos los tipos de datos en JavaScript tienen una clase "padre". Cuando creamos una variable de
 * tipo número, esta nueva variable hereda todas las propiedades de la clase Number sin que nos
 * percatemos. Estamos creando una nueva instancia de Number sin ser conscientes de ello.
 *
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 *
 */

// Como hemos mencionado, podemos imaginarnos una clase como una función especial. En este caso
// la clase Number es código nativo de JavaScript.
console.log(Number);

// Podemos obtener más info de esta clase accediendo a su propiedad "prototype". No te preocupes
// si lo que muestra el console.log te suena a chino, es simplemente para que eches un ojo.
console.log(Number.prototype);

// ==============================================================================
// ==============================================================================

console.log('---------------');
console.log('P O I N T   2.5');
console.log('---------------');

/**
 * Métodos estáticos de la clase Number
 *
 * ¿Qué es un método? Un método es una función asociada a un objeto o una clase. Por
 * norma general para acceder a un método debemos nombrar al objeto o clase en el que
 * se encuentra y, a continuación, nombrar al método en cuestión:
 *
 *  # nombreObjeto.nombreMétodo();
 *
 * ¿Qué es un método estático? No es más que una función asociada a una clase. Para
 * llamar a un método estático no es necesario instanciar una clase. Recuerda que
 * cuando creamos una nueva variable de tipo número lo que estamos creando realmente
 * es una nueva instancia de la clase Number. Pues bien, a la hora de llamar a un
 * método estático de Number debemos llamar a la clase en cuestión seguido del nombre
 * del método estático:
 *
 *  # Number.nombreMetodoEstatico();
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # Number.isNaN(valor)
 *
 *    Este método recibe un valor (un nº, un string...) y nos devuelve true si el valor NO es de
 *    tipo número. De ahí viene la expresión NaN: Not a Number (no es un número).
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # Number.isInteger(valor)
 *
 *    Este método recibe un valor (un nº, un string...) y nos devuelve true si el valor es un nº
 *    entero.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # Number.parseInt(string, base)
 *
 *    Este método recibe un string numérico y lo transforma en un nº entero. Opcionalmente se
 *    puede indicar la base del nº en cuestión.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # Number.parseFloat(valor)
 *
 *    Este método recibe un string numérico y lo transforma en un nº decimal.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 *
 */

console.log(Number.isNaN(0 / 0)); // true

console.log(Number.isNaN('Pablo')); // false

console.log(Number.isNaN(2)); // false

console.log(Number.isInteger(5.0)); // true

console.log(Number.isInteger(5.45)); // false

console.log(Number.parseInt('5')); // 5

// Si queremos convertir el nº binario 1110 a nº decimal podemos hacerlo de este modo.
console.log(Number.parseInt('1110', 2)); // 14

console.log(Number.parseFloat('5.45')); // 5.45

// ==============================================================================
// ==============================================================================

console.log('---------------');
console.log('P O I N T   2.6');
console.log('---------------');

/**
 * Métodos de la instancia de Number
 *
 * Este tipo de métodos requieren que una nueva instancia de Number sea declarada. Como
 * hemos mencionado con anterioridad, esto sucede de forma automática cuando guardamos
 * un nº en una variable. Por tanto, para utilizar un método de la instancia debemos
 * nombrar a la variable numérica en cuestión seguido del nombre del método:
 *
 *  # variableNumerica.nombreMetodo();
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # variableNumerica.toFixed(numeroDecimales)
 *
 *    Retorna un string con el nº de decimales que hayamos definido.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # variableNumerica.toLocaleString(region)
 *
 *    Retorna un string con el nº en el sistema de numeración del país definido en la región.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # variableNumerica.toString(base)
 *
 *    Retorna un string con el nº cuestión. También sería posible cambiar la base del nº si se
 *    lo indicamos.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 *
 */

let numero = 5.5605;

console.log(numero.toFixed(2)); // "5.56"

console.log(numero.toFixed(1)); // "5.6"

console.log(numero.toLocaleString('es-ES')); // En español --> "5,561"

console.log(numero.toLocaleString('ar-EG')); // En árabe --> "٥٫٥٦١"

console.log(numero.toLocaleString('zh-Hans-CN-u-nu-hanidec')); // En chino --> 五.五六一

console.log(numero.toString()); // "5.5605"

// Cambiamos el nº para evitar decimales. Ahora vamos a utilizar el método toString()
// para modificar la base.
numero = 14;

// Si queremos obtener el nº 14 en binario:
console.log(numero.toString(2)); // "1110"

// Si queremos obtener el nº 14 en hexadecimal:
console.log(numero.toString(16)); // "e"

// ==============================================================================
// ==============================================================================
