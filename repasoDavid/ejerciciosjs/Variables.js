// ==============================================================================
// ==============================================================================

console.log('---------------');
console.log('P O I N T   1.1');
console.log('---------------');

/**
 * La primera vez que queremos crear una variable en JavaScript esta debe ser declarada.
 * Existen dos palabras reservadas que nos permiten lograr ese objetivo.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # const
 *
 *    Permite declarar una constante, una variable cuyo valor no será modificado en ningún momento
 *    posterior a su declaración.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # let
 *
 *    Permite declarar una variable cuyo valor podrá cambiar en cualquier momento.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 * Lo lógico es declarar una constante cuando nuestro dato no debería ser modificado en
 * ningún momento. Por ejemplo, el nombre de una persona o el color favorito de alguien.
 *
 * Si por lo contrario sabemos que la variable puede cambiar de valor en el futuro debemos
 * declarar dicha variable con let. Por ejemplo la edad de una persona.
 *
 */

// const --> declaramos una constante.
const nombre = 'Sara';

console.log(nombre);

// let --> declaramos una variable.
let edadSara = 29;

console.log(edadSara);

// ==============================================================================
// ==============================================================================

console.log('---------------');
console.log('P O I N T   1.2');
console.log('---------------');

/**
 * En JS existen varios tipos de variables. Este lenguaje de programación es de tipado
 * dinámico, es decir, es JavaScript quien se encarga de definir el tipo de una variable.
 *
 * Tipos de datos primitivos.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # Number
 *
 *    Cualquier número positivo o negativo con o sin decimales.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # String
 *
 *    Cualquier caracter o conjunto de caracteres rodeados por comillas simples, dobles o por
 *    comilla francesa (backtip).
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # Boolean
 *
 *    Este tipo de variable solo puede tener dos estados VERDADERO (true) o FALSO (false).
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # Undefined
 *
 *    Cuando declaramos una variable y no le asignamos un valor, JavaScript le asigna por defecto
 *    el valor undefined. No debemos confundir un valor undefined con un valor vacío. Lo
 *    recomendable es dejar que sea JavaScript quien se encargue de adjudicar ese tipo de variable,
 *    es decir, debemos evitar dar dicho valor a una variable por voluntad propia.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # Null
 *
 *    Indica un valor vacío. Este es el tipo de variable que debemos adjudicar en caso de querer
 *    indicar que algo está vacío.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 * El operador "typeof" nos devuelve el tipo de una variable: typeof nombreVariable.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 */

const miNumero = 24;

console.log(typeof miNumero);

let palabra = 'Hola';

console.log(typeof palabra);

let esAdulto = false;

console.log(typeof esAdulto);

let colorFavorito;

console.log(typeof colorFavorito);

let vacio = null;

console.log(typeof vacio);

// ==============================================================================
// ==============================================================================

console.log('---------------');
console.log('P O I N T   1.3');
console.log('---------------');

/**
 * Además de los tipos de datos primitivos, existen otros tipos de variables.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # Function
 *
 *    Conjunto de instrucciones que realiza una tarea o calcula un valor. Generalmente una función
 *    recibe un valor o conjunto de valores y retorna un resultado.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # Array
 *
 *    Colección ordenada de datos. Se emplean para almacenar multiples valores en una sola variable,
 *    frente a las variables que sólo pueden almacenar un valor (por cada variable).
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # Object
 *
 *    Entidad independiente con propiedades y tipos. Compáralo con una taza, por ejemplo. Una taza
 *    es un objeto con propiedades. Una taza tiene un color, un diseño, un peso, un material del
 *    que está hecha, etc.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 */

// Declaramos una función.
function calcular() {
    return 1 + 2;
}

console.log(typeof calcular);

// Declaramos un array.
const colores = ['amarillo', 'rojo', 'azul', 'verde'];

// Si aplicamos "typeof" sobre un array no obtendremos la respuesta esperada.
console.log(typeof colores);

// Como alternativa accederemos a la propiedad "miArray.constructor.name". Esto también
// sería válido para comprobar el tipo de cualquier otra variable.
console.log(colores.constructor.name);

// Declaramos un objeto.
const Taza = {
    color: 'beis',
    diseño: 'artesanal',
    peso: 0.5,
    material: 'porcelana',
};

console.log(typeof Taza);
