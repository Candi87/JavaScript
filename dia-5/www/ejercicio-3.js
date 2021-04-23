'use strict';

/**
 * #################
 * ## Ejercicio 5 ##
 * #################
 *
 * Crea una función que imprima X resultados aleatorios de una
 * quiniela 1 X 2. Ejemplo, si le decimos que imprima 14 resultados:
 *
 *      Resultado 1: 1
 *      Resultado 2: X
 *      Resultado 3: 2
 *      (...)
 *      Resultado 14: 2
 *
 */

const getRandomResult = function() {

    const randomNumber =Math.floor(Math.random()* 3);
    if(randomNumber===0){
        return "X";
        return randomNumber;
    }


function getQuiniela(limit) {
    for(let i = 0; i < limit; i++) 