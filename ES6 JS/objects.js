const person = {
    fullName: 'htin kyaw',
    email: 'bettercallkyaw@gmail.com',
    age: 22,
    hobbies: ['hiking', 'sports', 'movies'],
    isMarried: true,
    child: ['kyaw angela', 'angela kyaw'],
    parents: ['daw', 'yee'],
    city: 'pinlaung',
    country: 'Myanmar',
    address: {
        street: 'Ma 3C',
        phone: 3345333409,
        zip:345678
    },
    social: [
        {
            facebook:'www.facebook.com/profile.id?id=4r8uiaj444'
        },
        {
            twitter:'www.twitter.com/@htinkyaw'
        }
    ]
};

console.log(person);
console.log(person.country);
console.log(person.hobbies[1]);
console.log(person.address.zip);
console.log(person.social[1]);

const { fullName, address :{ phone } } = person;
console.log(fullName);
console.log(phone);

person.partener = 'angela yu';
console.log(person);

//forEach,map,filter
const todos = [
    {
        id: 1,
        text: 'meeting with boss',
        isCompleted:true
    },
    {
        id: 2,
        text: 'walking with girl',
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