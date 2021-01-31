//objects and properties

var personData = {
    firstName: 'Jack',
    lastName: 'Peter',
    fullName: 'Jack Peter',
    family: ['william', 'john', 'ashly'],
    phone: 09760635338,
    email: 'jace@gmail.com',
    birthYear: 1999,
    nowYear: 2021,
    age: 22,
    isMarrid: false,
    childName: ['kati', 'auba'],
    cityLocation: 'Santigo',
    country: 'United State',
    state: 'texis',
    salary: 22222222,
    hobbies:['hiking','sports','movies'],
    personDetails: [
        {
            facebook:'www.facebook.com/profile.php?id=3333fjzfhizsjhafweho'
        },
        {
            twitter:'www.twitter.com/@jack22'
        },
        {
            programming:'php,java,python'
        },
        {
            framework:'laravel,node,django'
        }
    ],
    calcAge: function () {
        return this.nowYear - this.birthYear;
    }
};


console.log(personData);
console.log(personData.hobbies[0]);
console.log(personData.country);
console.log(personData.personDetails[0]);
console.log(personData.calcAge());