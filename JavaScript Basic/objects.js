//objects and properties

var personData = {
    firstName: 'Htin',
    lastName: 'Kyaw',
    email: 'bettercallkyaw@gmail.com',
    job: 'full stack developer',
    age: 21,
    birthYear: 1999,
    hobbies: ['hiking', 'sports', 'coding'],
    personFamily: ['min', 'myat', 'htut'],
    cityLocation: 'Yangon',
    currentLive: 'Pinlaung,Saung Pyaung,Shan State',
    programming: [
        {
            server:'PHP,javascript,python'
        },
        {
            framework:'django,laravel,node'
        }
    ],
    calcAge: function () {
        return 2021 - this.birthYear;
    }
};

console.log(personData.email);
console.log(personData.hobbies[0]);
console.log(personData.programming[0]);
console.log(personData.calcAge());