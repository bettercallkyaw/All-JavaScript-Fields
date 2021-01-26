//objects and properties

var personData = {
    firstName: 'Htin',
    lastName: 'Kyaw',
    fullName: 'Htin Kyaw',
    emailAddress: 'bettercallkyaw@outlook.com',
    age: 22,
    birthYear: 1999,
    job: 'no finding yet!',
    hobbies: ['hiking', 'coding', 'movies', 'swwing'],
    familyMember: ['htut', 'min', 'myat'],
    cityLocation: 'Pinlaung',
    currentLive: 'Myanmar,Sourth Shan State,Pinlaung,Saung Pyaung',
    isMarried: false,
    personDetails: [
        {
            programmingLanguage:'php,python,javascript'
        },
        {
            framework:'laravel,django,node,angular,vue,react'
        },
        {
            webDesing:'html,css,bootstrap'
        },
        {
            facebook:'www.facebook.com/profile.php?id=4ajfaija'
        },
        {
            twitter:'www.twitter.com/@htinkyaw22'
        }
    ],
    calcAge: function () {
        return 2021 - this.birthYear;
    }
};

console.log(personData);
console.log(personData.fullName);
console.log(personData.hobbies[0]);
console.log(personData.personDetails[0]);
console.log(personData.calcAge());