'use strict';

function calculadora(a, b, operacion) {
    if (operacion === '+') {
        return a + b;
    } else if (operacion === '-') {
        return a - b;
    } else if (operacion === '/') {
        return a / b;
    } else if (operacion === '*') {
        return a * b;
    } else if (operacion === '**') {
        return a ** b;
    } else b === 0;
    throw new Error('No se puede dividir entre 0');
}

console.log(calculadora(2, 0, '*'));
