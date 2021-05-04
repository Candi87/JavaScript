/**
 * #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Dada la función "timeConvert(minutes)" toma el parámetro minutes y devuelve el número
 * de horas y minutos a los que el parámetro se convierte (es decir, si minutes = 63 entonces
 * la salida debería ser 1:03). Separe el número de horas y minutos con dos puntos.
 *
 */

'use strict';
'use strict';

function timeConvert(minutes) {
    let horas = Math.floor(minutes / 60);
    let minutos = minutes % 60;

    if (minutos < 10) {
        return `${horas}:0${minutos}`;
    } else {
        return `${horas}:${minutos}`;
    }
}
console.log(timeConvert(264));
