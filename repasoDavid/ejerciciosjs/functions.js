// ==============================================================================
// ==============================================================================

console.log('---------------');
console.log('P O I N T   4.1');
console.log('---------------');

/**
 * Declaración de función:
 *
 * Una función es un conjunto de instrucciones que se encargan de ejecutar una tarea
 * determinada. Dichas funciones pueden recibir ninguno, uno o múltiples valores
 * y, por norma general, retornan un resultado.
 *
 * Siempre que tengamos un fragmento en nuestro código que se repita lo más razonable
 * sería crear una función que ejecute una y otra vez dicho fragmento de código. Por
 * ejemplo, podríamos necesitar una función que opere con dos valores y nos devuelva
 * un resultado.
 *
 * En JavaScript tenemos tres formas de declarar funciones. La primera de ellas se
 * denomina declaración de función, valga la redundancia, y sigue la siguiente
 * estructuta.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *      function nombreDeMiFuncion (parametros) {
 *
 *          // Instrucciones.
 *
 *          return elValorQueRetorna;
 *
 *      }
 *
 *  1. Palabra reservada function.
 *
 *  2. Nombre de la función.
 *
 *  3. Parámetros entre paréntisis.
 *
 *  4. Apertura y cierre de llaves.
 *
 *  5. Las instrucciones irían dentro de las llaves.
 *
 *  6. Dentro de las instrucciones es importante retornar un valor.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # Parámetros
 *
 *    Existe la posibilidad de que nuestra función no requiera ningún parámetro. En cualquier caso
 *    lo recomendable es no introducir más de tres parámetros. Los parámetros son como variables
 *    que no necesitan ser declaradas. El valor de dichos parámetros se asignará en lo que se
 *    conoce como llamado a la función.
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # Llamado de función.
 *
 *    El código que se encuentra en el interior de la función no es interpretado a menos que
 *    llamemos a la función. Para llamar a una función simplemente mencionamos el nombre de la
 *    misma y le pasamos el valor a los parámetros.
 *
 *      nombreDeMiFuncion(pasamosElValorAlParametro1, pasamosElValorAlParametro2);
 *
 *    En este caso vamos a suponer que la función en cuestión tiene dos parámetros. Debemos
 *    pasarle los valores que querramos que adquieran dichos parámetros en este llamado.
 *
 *    Una función puede llamarse tantas veces como necesitemos. En cada llamado podemos pasar
 *    valores distintos a los parámetros.
 *
 */

function sumar(a, b) {
    return a + b;
}

// Una función por norma general retorna un valor pero no lo muestra por consola. Si queremos
// mostrar por consola el valor que retorna debemos meter el llamado a la función dentro de un
// "console.log".
console.log(sumar(2, 2)); // 4

console.log(sumar(4, 6)); // 10

const num_A = 3;

const num_B = 10;

// Otra opción es almacenar el retorno de la función en una variable y mostrarla posteriormente.
const resultadoSuma = sumar(num_A, num_B);

console.log(resultadoSuma); // 13

// ==============================================================================
// ==============================================================================

console.log('---------------');
console.log('P O I N T   4.2');
console.log('---------------');

/**
 * Expresión de función:
 *
 * La expresión de función es lo mismo que declarar una constante a la cuál le asignamos
 * una declaración de función anónima (que no tiene nombre).
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *      const nombreDeMiFuncion = function (parametros) {
 *
 *          // Instrucciones.
 *
 *          return elValorQueRetorna;
 *
 *      }
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # Principal diferencia
 *
 *    En la declaración de función no importa el lugar de nuestro código donde realizamos el
 *    llamado, es decir, puedo llamar a una función declarada en la linea 100 desde la línea
 *    10. Sin embargo, esto no funciona con la expresión de función ni con las arrow function.
 *
 */

const restar = function (a, b) {
    return a - b;
};

console.log(restar(2, 2)); // 0

console.log(restar(4, 6)); // -2

const num_C = 10;

const num_D = 5;

const resultadoResta = restar(num_C, num_D);

console.log(resultadoResta); // 5

// ==============================================================================
// ==============================================================================

console.log('---------------');
console.log('P O I N T   4.3');
console.log('---------------');

/**
 * Arrow function o función flecha:
 *
 * Similar a la expresión de función pero sustituyendo la palabra "function" por una flecha (=>).
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *      const nombreDeMiFuncion = (parametros) => {
 *
 *          // Instrucciones.
 *
 *          return elValorQueRetorna;
 *
 *      }
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # Principal diferencia
 *
 *    La principal diferencia respecto a las anteriores es que esta función nos permite omitir el
 *    uso de llaves siempre y cuando la instrucción interna sea muy sencilla. Si omitimos las
 *    las llaves es muy importante tener en cuenta que el "return" pasa a ser implícito, es decir,
 *    el retorno es automático y NO debemos definirlo.
 *
 *      const nombreDeMiFuncion = (parametros) => elValorQueRetorna;
 *
 * ---------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------
 *
 *  # Palabra reservada "this"
 *
 *    Otra diferecia es que dentro del Arrow function se pierde la referencia de la palabra clave
 *    "this". Explicaremos esto más adelante.
 *
 */

// Si ponemos llaves debemos indicar el return.
const multiplicar = (a, b) => {
    return a * b;
};

console.log(multiplicar(2, 2)); // 4

console.log(multiplicar(4, 3)); // 12

const num_E = 5;

const num_F = 5;

const resultadoMultiplicacion = multiplicar(num_E, num_F);

console.log(resultadoMultiplicacion); // 25

// Si quitamos llaves el return es implícito. Esto es muy útil cuando tenemos instrucciones muy
// simples que se solventan en una sola línea de código.
const dividir = (a, b) => a / b;

console.log(dividir(2, 2)); // 1

console.log(dividir(20, 2)); // 10

const resultadoDivision = dividir(num_E, num_F);

console.log(resultadoDivision); // 1

// ==============================================================================
// ==============================================================================

console.log('---------------');
console.log('P O I N T   4.4');
console.log('---------------');

/**
 * ¡OJO!
 *
 * Es muy importante entender la diferencia entre estas dos acciones:
 *
 *      const a = nombreDeMiFuncion;
 *
 *      const b = nombreDeMiFuncion();
 *
 *
 *
 */

const elevar = (a, b) => a ** b;

// En este caso estamos asignando a la constante "resultado" el resultado de 2 elevado a
// 4. Fíjate como llamamos a "elevar" y le pasamos los valores entre paréntisis.
const resultado_1 = elevar(2, 4);

console.log(resultado_1);

// Si no llamamos a "elevar" (si no ponemos los paréntisis) lo que estamos haciendo es
// generar una copia de la función.
const copiaDeElevar = elevar;

console.log(copiaDeElevar);

// Por tal motivo no es dificil imaginar que a partir de ahora podamos utilizar "copiaDeElevar"
// como una función que eleva el nº A a la potencia de B.
const resultado_2 = copiaDeElevar(3, 2);

console.log(resultado_2);

// ==============================================================================
// ==============================================================================

console.log('---------------');
console.log('P O I N T   4.5');
console.log('---------------');

/**
 * Callbakcs
 *
 * Un callback es una función que pasamos como parámetro a otra función.
 *
 */

// ==============================================================================
// ==============================================================================

console.log('---------------');
console.log('P O I N T   4.6');
console.log('---------------');

// ==============================================================================
// ==============================================================================
