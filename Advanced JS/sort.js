const people = [
    {
        name: 'htin kyaw',
        email: 'htin@faker.com',
        age: 21,
        isMarried:false
    },
    {
        name: 'zaw win htut',
        email: 'zaw@gmail.com',
        age: 24,
        isMarried:true
    },
    {
        name: 'min oo',
        email: 'min@outlook.com',
        age: 20,
        isMarried:false
    }
];

//bubble sort algorithm
for (let j = 0; j < people.length - 1; j++){
    for (let i = 0; i < people.length - 1; i++){
        if (people[i].age > people[i + 1].age) {
            const temp = people[i + 1];
            people[i + 1] = people[i];
            people[i] = temp;
        }
    }
}

const sortedByAge = people.sort((a, b) => (a.age - b.age));
console.log(sortedByAge);