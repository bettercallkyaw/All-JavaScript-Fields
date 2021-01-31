const fruits = ['apple', 'banana', 'orange'];

fruits[3] = 'patato';
console.log(fruits);

fruits.push('greenbarry');
console.log(fruits);

fruits.pop('greenbarry');
console.log(fruits);

fruits.unshift('bluebarry');
console.log(fruits);

fruits.shift('bluebarry');
console.log(fruits);


console.log(Array.isArray('Hello'));
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('orange'));