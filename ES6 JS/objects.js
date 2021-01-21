const person = {
    firstName: 'Htin',
    lastName: 'Kyaw',
    email: 'htin@faker.com',
    age: 21,
    city: 'Pinlaung',
    state: 'Shan',
    hoppies: ['music', 'coding', 'hiking'],
    address: {
        street: 'no.2 faker',
        home: 'southen shan state',
        zipcode:12333
    }
}

console.log(person.firstName);
console.log(person.hoppies['0']);

const { firstName, lastName,address:{street} } = person;
console.log(firstName);
console.log(street);

person.job = 'web developer';
console.log(person);

/////////////////////////////////////////
/////////////////////////////////////////
const todos = [
    {
        id: 1,
        text: 'meeting boss',
        isCompleted:true
    },
    {
        id: 2,
        text: 'take a deep break',
        isCompleted:false
    },
    {
        id: 3,
        text: 'traing coding',
        isCompleted:true
    }
]

console.log(todos);
console.log(todos[1].text);

const todoJson = JSON.stringify(todos);
console.log(todoJson);

for (let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

for (let todo of todos) {
    console.log(todo.text);
}

//forEach,map,filter
todos.forEach((todo) => {
    console.log(todo.text);
});

const todoText = todos.map((todo) => {
    return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter((todo) => {
    return todo.isCompleted === true;
}).map((todo) => {
    return todo.text;
});

console.log(todoCompleted);