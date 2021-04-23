'use strict';

function primos(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return numero !== 1;
}
function todosPrimos(numero) {
    for (let i = 2; i <= numero; i++) {
        if (primos(i)) console.log(`el número ${i} es primo`);
    }
}
todosPrimos(20);
