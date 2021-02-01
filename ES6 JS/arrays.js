const fruits = ['apple', 'banana', 'orange'];

console.log(fruits);
fruits[3] = 'bluebarry';
console.log(fruits);

fruits.push('redbarry');
console.log(fruits);

fruits.pop('redbarry');
console.log(fruits);

fruits.unshift('blackbarry');
console.log(fruits);

fruits.shift('blackbarry');
console.log(fruits);

console.log(Array.isArray('Hello'));
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('apple'));