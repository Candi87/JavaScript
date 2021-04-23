'use strict';

let numA = 1;
let numB = 0;
const optionSuma = '+';

switch (optionSuma) {
    case optionSuma:
        console.log(numA + numB, numB + numA);
        break;
}
const optionResta = '-';

switch (optionResta) {
    case optionResta:
        console.log(numA - numB, numB - numA);
        break;
}

const optionMultiplicar = '*';

switch (optionMultiplicar) {
    case optionMultiplicar:
        console.log(numA * numB, numB * numA);
        break;
}

const optionDividir = '/';

switch (optionDividir) {
    case optionDividir:
        console.log(numA / numB, numB / numA);
        break;
    case numB === 0:
        console.log('no se puede dividir');
        break;
}

const optionPotencia = '**';

switch (optionPotencia) {
    case optionPotencia:
        console.log(numA ** numB);
        break;
}
