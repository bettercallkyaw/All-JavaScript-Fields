const fruits = ['Apples', 'Banana', 'Grapse'];

fruits[3] = 'Pears';
console.log(fruits);
fruits.push('Mangos');
console.log(fruits);

fruits.unshift('RedBarry');
console.log(fruits);

fruits.pop('');
console.log(fruits);

fruits.shift('');
console.log(fruits);

console.log(Array.isArray('Hello'));
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('Apples'));