var fruits = ['apple', 'banana', 'mango'];
var years = new Array(1999, 2020, 2002);

console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);

//Add some array
fruits[0] = 'redbarry';
fruits[6] = 'greenbarry';
console.log(fruits);

fruits.push('patato');
console.log(fruits);

fruits.pop('patato');
console.log(fruits);

fruits.unshift('bluebarry');
console.log(fruits);

fruits.shift('bluebarry');
console.log(fruits);

console.log(fruits.splice(0,3));