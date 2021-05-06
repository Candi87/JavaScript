'use strict';

async function getSeries() {
    try {
        let series = [];
        for (let index = 1; index <= 5; index++) {
            const response = await (
                await fetch(
                    `https://www.episodate.com/api/most-popular?page=${index}`
                )
            ).json();
            const pageSeries = response.tv_shows.map((serie) => serie.name);
            for (const value of pageSeries) {
                series.push(value);
            }
        }
        console.log(series);
    } catch (error) {
        console.log(error);
    }
}

getSeries();

/* ('use strict');

async function getSeries() {
    try {
        let series = [];
        for (let index = 1; index <= 5; index++) {
            const response = await (
                await fetch(
                    `https://www.episodate.com/api/most-popular?page=${index}`
                )
            ).json();
            // const pageSeries = response.tv_shows.map((serie) => serie.name);
            for (const value of response.tv_shows) {
                series.push(value.name);
            }
        }
        console.log(series);
    } catch (error) {
        console.log(error);
    }
}

getSeries();
 */

async function getCharacter(estatus, especie) {
    try {
        let resultado = [];
        const response = await (
            await fetch(
                `https://rickandmortyapi.com/api/character?status=${estatus}&species=${especie}`
            )
        ).json();
        resultado = response.results.map((nombre) => nombre.name);
        console.log(resultado);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
getCharacter('Alive', 'Human');
