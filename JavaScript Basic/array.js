var fruits = ['apples', 'mangos', 'banana'];
var years = new Array(1999, 2000, 2021);

console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);

//Add some array
fruits[0] = 'redbuarry';
fruits[6] = 'greenbuarry';
console.log(fruits);

fruits.push('patato');
console.log(fruits);

fruits.pop('patato');
console.log(fruits);

fruits.unshift('blackbuarry');
console.log(fruits);

fruits.shift('blackbarry');
console.log(fruits);

console.log(fruits.splice(0,2));