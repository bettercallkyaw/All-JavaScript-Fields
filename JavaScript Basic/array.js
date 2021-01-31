var fruits = ['apple', 'banana', 'orange'];
var years = new Array(1990, 2000, 2001);

console.log(fruits);
console.log(fruits.length);
console.log(fruits[2]);

//Add some array
fruits[0] = 'bluebarry';
fruits[5] = 'redbarry';
console.log(fruits);

fruits.push('patato');
console.log(fruits);

fruits.pop('patato');
console.log(fruits);

fruits.unshift('blackbarry');
console.log(fruits);

fruits.shift('blackbarry');
console.log(fruits);

console.log(fruits.splice(0,1));