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
'use strict';
const equipo_A = 35 + 46 + 29 + 58;
const equipo_B = 46 + 72 + 26 + 36;
const equipo_C = 38 + 62 + 47 + 44;

const media = (totalPuntos, totalPartidos) => totalPuntos / totalPartidos;

const media_A = (equipo_A, 4);
const media_B = (equipo_B, 4);
const media_C = (equipo_C, 4);

if (media_A > media_B && media_A > media_C) {
    console.log('el equipo A tiene mejor media (${media_A} puntos');
} else if (media_B > media_C) {
    console.log('el equipo B tiene mejor media (${media_B} puntos');
} else {
    console.log('el equipo C tiene mejor media (${media_C}) puntos');
}
