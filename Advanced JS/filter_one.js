const people = [
    {
        name: 'zaw win htut',
        age:24
    },
    {
        name: 'htin kyaw',
        age:21
    },
    {
        name: 'min oo',
        age:20
    },
    {
        name: 'myat aka win',
        age:11
    }
];

// const overagedPeople = [];
// for (let i = 0; i < people.length - 1; i++){
//     const person = people[i];
//     if (person.age >= 18) {
//         overagedPeople.push(person);
//         //console.log(overagedPeople);
//     }
// }

const overagedPeople = people.filter(person => person.age >= 18);
console.log(overagedPeople);