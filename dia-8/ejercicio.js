'use strict';

const coche = {
    modelo: 'Golf',
    marca: 'volswagen',
    color: 'negro',
};

coche.color = 'rojo';
coche.año = '2010';

console.log(coche);

const show = confirm(
    'si aceptas se muestran las propiedas del coche que estás buscando'
);

if (show) {
    console.log(Object.keys(coche));
} else {
    console.log(Object.value(coche));
}
