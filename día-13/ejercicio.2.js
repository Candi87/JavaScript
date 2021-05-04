/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Obtener un array con todas las provincias
 *
 * API: https://www.el-tiempo.net/api
 *
 */
'use strict';

fetch('https://www.el-tiempo.net/api/json/v1/provincias')
    .then((response) => response.json())
    .then((array) =>
        console.log(
            array.map((provincias) => {
                return provincias.NOMBRE_PROVINCIA;
            })
        )
    )
    .catch((error) => console.log(error));
