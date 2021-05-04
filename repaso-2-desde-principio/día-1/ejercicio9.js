const height = 6;

for (let lines = 0; lines < height; lines++) {
    let lineContent = '';

    // Espacios.
    for (let spaces = height - 1 - lines; spaces > 0; spaces--) {
        lineContent += ' ';
    }

    // Asteriscos.
    for (let asterisk = lines + 1; asterisk > 0; asterisk--) {
        lineContent += '*';
    }

    console.log(lineContent);
}
