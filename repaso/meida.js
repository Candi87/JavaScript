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

const equipo_a = 35 + 46 + 29 + 58;
const equipo_b = 46 + 72 + 26 + 36;
const equipo_c = 38 + 62 + 47 + 44;

getMedia = (puntos, partidos) => puntos / partidos;

const media_a = getMedia(equipo_a, 4);
const media_b = getMedia(equipo_b, 4);
const media_c = getMedia(equipo_c, 4);
if (media_a > media_b && media_a > media_c) {
    console.log(`el equipo a tiene la mejor media`);
} else if (media_b > media_c) {
    console.log(`el equipo b tiene la mejor media`);
} else {
    console.log(`el equipo c tiene la mejor media`);
}
