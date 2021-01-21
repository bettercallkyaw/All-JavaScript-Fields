const since = [2000, 2003, 2010, 2019];

//const yearsPassed = [];

// for (let i = 0; i < since.length - 1; i++){
//     const sinceYear = since[i];
//     yearsPassed.push(2020 - sinceYear);
// }

const yearsPassed = since.map(year => 2020 - year);
console.log(yearsPassed);