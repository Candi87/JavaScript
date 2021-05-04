// const myTymeout11 = setTimeout(() => {
//     console.log('9');
// }, 1000);

// const myTymeout12 = setTimeout(() => {
//     console.log('8');
// }, 2000);

// const myTymeout13 = setTimeout(() => {
//     console.log('7');
// }, 3000);

// const myTymeout14 = setTimeout(() => {
//     console.log('6');
// }, 4000);

// const myTymeout15 = setTimeout(() => {
//     console.log('5');
// }, 5000);

// const myTymeout16 = setTimeout(() => {
//     console.log('4');
// }, 6000);

// const myTymeout17 = setTimeout(() => {
//     console.log('3');
// }, 7000);

// const myTymeout18 = setTimeout(() => {
//     console.log('2');
// }, 8000);

// const myTymeout9 = setTimeout(() => {
//     console.log('1');
// }, 9000);

// const myTimeout10 = setTimeout(() => {
//     console.log('alarma');
// }, 10000);

function alarm(seconds) {
    const interval = setInterval(() => {
        if (seconds > 0) {
            console.log(seconds);
            seconds--;
        } else {
            console.log('Alarma');
            clearInterval(interval);
        }
    }, 1000);
}
alarm(10);
