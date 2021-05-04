'use strict';

let numA = 3;
let numB = 10;
const optionSuma = '+';

if (optionSuma) {
    console.log(numA + numB, numB + numA);
}

const optionResta = '-';
if (optionResta) {
    console.log(numA - numB, numB - numA);
}

const optionMultiplicar = '*';
if (optionMultiplicar) {
    console.log(numA * numB, numB * numA);
}

const optionDividir = '/';
if (optionDividir) {
    console.log(numA / numB, numB / numA);
}
if (numB === 0) {
    console.log('no se puede dividir entre 0');
}

const optionPotencia = '**';
if (optionPotencia) {
    console.log(numA ** numB);
}
