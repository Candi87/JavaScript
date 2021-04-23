'use strict';

const nMin = 1;
const nMax = 10;
let aleatorio = Math.ceil(Math.random() * 10);
let intentos = 0;
const nombre = prompt(
    `Bienvenido al juego de la bomba, ingrese su nombre para continuar`
);
var numero;

for (intentos; intentos < 5; intentos++) {
    numero = Number(
        prompt(
            nombre + ` ,ingresa un número entre el ` + nMin + ` y el ` + nMax
        )
    );

    if (numero >= nMin && numero <= nMax) {
        if (numero !== aleatorio) {
            alert(`Tú número no es el correcto,ten cuidado que esto explota`);
        } else if (numero === aleatorio) break;
    } else {
        alert(`Debe ingresar un número entre  ` + nMin + ` y ` + nMax);
    }
}

if (numero === aleatorio) {
    alert(`Felicidades estás a salvo,la bomba ha sido descativada`);
} else {
    alert(`YOU DEAD`);
}
