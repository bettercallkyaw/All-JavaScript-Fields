const numbers = [5, 10, 20, 22];

// const sum = 0;
// for (let i = 0; i < numbers.length - 1; i++){
//     const number = numbers[i];
//     sum += number;
// }

const sum = numbers.reduce((oldSum, current) => (oldSum + current));

console.log(sum);

