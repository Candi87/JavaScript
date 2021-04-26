'use strict';

const num = Number('1234r');

if (Number.isNaN(num)) throw new Error('no es un nº');
