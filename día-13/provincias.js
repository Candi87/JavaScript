/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Dada la siguiente API, obtén un array con el nombre de todos los municipios de la
 * provincia de Lugo.
 *
 * Además, el nombre de los municipios debe estar ordenado por orden alfabético inverso.
 *
 * - Resuélvelo con then & catch.
 *
 * - Resuélvelo con async / await.
 *
 * API: https://www.el-tiempo.net/api
 *
 */

/* 'use strict';
fetch('https://www.el-tiempo.net/api/json/v2/municipios')
    .then((response) => response.json())
    .then((municipios) => {
        const municipios = municipios
            .filters((municipio) => {
            return municipio.NOMBRE_PROVINCIA === 'Lugo')
        })
        .map((municipio)=> municipio.NOMBRE);
    }
    .catch((error) => console.log(error));
 */
