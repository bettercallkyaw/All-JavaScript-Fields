//objects and properties

var kyaw = {
    firstName: 'Htin',
    lastName: 'Kyaw',
    email: 'htin@faker.com',
    age: 21,
    birthYear: 1999,
    family: ['Mya', 'Min', 'Zaw'],
    city: 'Pinlaung',
    village: 'Saung Pyaung',
    calcAge: function () {
        return 2020 - this.birthYear;
    }
};

console.log(kyaw.village);
console.log(kyaw['age']);
console.log(kyaw.calcAge());