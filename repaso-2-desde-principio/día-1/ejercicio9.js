'use strcict';

// let edad = prompt(`introduce tu edad`);

// if (edad >= 18) {
//     alert(`Puedes conducir`);
// } else {
//     alert(`no puedes conducir`);
// }

// const nota = prompt(`inserta tu nota`);

// // if (nota < 3) {
// //     alert(`muy deficiente`);
// // } else if (nota < 5) {
// //     alert(`insuficiente`);
// // } else if (nota < 6) {
// //     alert(`suficiente`);
// // } else if (nota < 7) {
// //     alert(`bien`);
// // } else if (nota < 9) {
// //     alert(`notable`);
// // } else if (nota <= 10) {
// //     alert(`sobresaliente`);
// // } else {
// //     nota < 0 && nota > 10;
// //     alert(`la nopta introducida no es correcta`);
// // }

// let resultado = '';

// let cadena = prompt('Introduce una cadena');

// if (resultado === '') {
//     resultado = resultado + cadena;
// } else {
//     resultado = resultado + '-' + cadena;

// if (confirm('desea seguir?'));
// console.log(resultado);
// }

// function letraDni(num) {
//     let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
//     let letra = '';

//     if (num > 9999999 && num < 100000000) {
//         let indice = num % 23;

//         letra = letras[indice];
//     }
//     return letra;
// }

// let num = Number(prompt('Introduce tu dni'));

// let letra = letraDni(num);
// if (letra != '') {
//     alert('La letra es ' + letra);
// } else {
//     alert('Número erróneo');
// }

// 4. Realiza un script que pida números hasta que se pulse “cancelar”.
// Si no es un número deberá indicarse con un «alert» y seguir pidiendo.
// Al salir con “cancelar” deberá indicarse la suma total de los números
//introducidos.

// function calculate(a, b, operation) {
//     if ((operation = '+')) return a + b;
// }
// console.log(calculate(2, 4, '+'));

// function esPrimo(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
// console.log(esPrimo(8));

// const showInfo = (name, edad) => `Eres ${name} y tienes ${edad}`;

// console.log(showInfo('caca', 13));

/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Tenemos 3 equipos de baloncesto. Estos son los resultados de cada equipo
 * en los últimos 4 partidos:
 *
 *      - Equipo A: 35, 46, 29, 58
 *      - Equipo B: 46, 72, 26, 36
 *      - Equipo C: 38, 62, 47, 44
 *
 * Muestra por consola el equipo con la mejor media en estos cuatro partidos.
 * Debes mostrar el nombre del equipo y la media de dicho equipo.
 *
 */

// const equipo_A = 35 + 46 + 29 + 58;

// const equipo_B = 46 + 72 + 26 + 36;

// const equipo_C = 38 + 62 + 47 + 44;

// const media = (totalPuntos, partidosJugados) => totalPuntos / partidosJugados;

// const mediaEquipo_A = equipo_A / 4;

// const mediaEquipo_B = equipo_B / 4;

// const mediaEquipo_C = equipo_C / 4;

// if (mediaEquipo_A > mediaEquipo_B && mediaEquipo_A > mediaEquipo_C) {
//     console.log(`Equipo A tiene la mejor media con ${mediaEquipo_A} puntos`);
// } else if (mediaEquipo_B > mediaEquipo_C) {
//     console.log(`Equipo B tiene la mejor media  con ${mediaEquipo_B} puntos`);
// } else {
//     console.log(`Equipo C tiene la mejor media con ${mediaEquipo_C} puntos`);
// }

// const getResultadoAleatorio = function () {
//     const numeroAleatorio = Math.floor(Math.random() * 3);
//     if (numeroAleatorio === 0) return 'X';
//     return numeroAleatorio;
// };

// function getQuiniela(columnas) {
//     for (let i = 1; i <= columnas; i++) {
//         console.log(`${i} : ${getResultadoAleatorio()}`);
//     }
// }
// getQuiniela(14);

/* #################
 * ## Ejercicio 6 ##
 * #################
 *
 * Dado el array = [1, 3, 9, 14, 17, 22]
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "while" y mostrarlos en pantalla.
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "for" y mostrarlos en pantalla.
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "for of" y mostrarlos en pantalla.
 *
 *  - Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
 *
 *  - Generar otro array con todos los elementos del primer array incrementados en 1. ¿Con el método push?
 *
 *  - Calcular el promedio.
 *
 */

const numbers = [1, 3, 9, 14, 17, 22];

// let index = 0;

// while (index < numbers.length) {
//     console.log(numbers[index]);
//     index++;
// }

// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index]);
// }

// for (const numb of numbers) {
//     console.log(numb + 1);
// }
// const numbersMas1 = [];

// for (const num of numbers) {
//     numbersMas1.push(num + 1);
// }

let suma = 0;

for (const num of numbers) {
    suma += num;
}
console.log(suma / numbers.length);
