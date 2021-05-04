'use strict';
fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((characters) => console.log(characters))
    .catch((error) => console.log(error));
