const person = {
    fullName: 'Htin Kyaw',
    email: 'bettercallkyaw@gmail.com',
    city: 'Pinlaung',
    age: 22,
    job: 'full stack developer',
    state: 'Shan',
    hobbies: ['hiking', 'sports', 'movies'],
    address: {
        street: 'PA 34',
        zipcode: 334567,
        home_number:34
    }
};

console.log(person);
console.log(person.fullName);
console.log(person.hobbies[0]);
console.log(person.address.street);

const { fullName, address: { home_number } } = person;
console.log(fullName);
console.log(home_number);

person.isMarried = true;
console.log(person);
/////////////////////////////////////////
/////////////////////////////////////////
const todos = [
    {
        id: 1,
        text: 'meeting with boss',
        isCompleted:true
    },
    {
        id: 2,
        text: 'walking with boot',
        isCompleted:false
    },
    {
        id: 3,
        text: 'talking with family',
        isCompleted:true
    }
];

console.log(todos);
console.log(todos[1].text);

const todoJson = JSON.stringify(todos);
console.log(todoJson);


for (let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

for (let todo of todos) {
    console.log(todo.isCompleted);
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
    return todo.isCompleted == false;
}).map((todo) => {
    return todo.text;
});

console.log(todoCompleted);