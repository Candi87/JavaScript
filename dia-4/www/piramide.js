'use strict';

// variables

/**
 * ################
 * ## Pirámide 3 ##
 * ################
 *
 * Crea una función que reciba una altura y dibuje una figura
 * como la que sigue:
 *
 *    1
 *    12
 *    123
 *    1234
 *    12345
 *
 */

//  'use strict';

//  const height = 5;

//  for (let lines = 0; lines < height; lines++) {
//      let lineContent = '';

//      for (let nums = 0; nums <= lines; nums++) {
//          lineContent += nums + 1;
//      }

//      console.log(lineContent);
//  }

//  /**
//   * #######################
//   * ## Solución sencilla ##
//   * #######################
//   */

/* let lineContent = '';
 
 for (let lines = 0; lines < height; lines++) {
     lineContent += lines + 1;
     console.log(lineContent);
 } */

const height = 5;

for (let lines = 0; lines < height; lines++) {
    let lineContent = '';
    for (let spaces = height - lines - 1; spaces > 0; spaces--) {
        lineContent += '';
    }
    for (let asterisk = lines + 1; lines > 0; asterisk--) {
        lineContent += '*';
    }
    console.log(lineContent);
}
