var fruits = ['Apples', 'Banana', 'Mangos'];
var years = new Array(1999, 1888, 1777);

console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);

fruits[0] = 'RedBarry';
fruits[6] = 'GreenBarry';
console.log(fruits);

fruits.push('Patoto');
console.log(fruits);
fruits.pop('Patoto');
console.log(fruits);
fruits.unshift('BlueBarry');
console.log(fruits);
fruits.shift('BlueBarry');
console.log(fruits);
console.log(fruits.splice(0,2));