//create class
class Person { 
    constructor(firstName, lastName, email, age, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.dob = new Date(dob);
    }

    getBirthYear() { 
        return this.dob.getFullYear();
    };

    getFullName() { 
        return `${this.firstName} ${this.lastName}`
    };
};

//instantiate object
const person1 = new Person('john', 'peter', 'johnpeter@gmail.com', 22, '12-2-1999');
const person2 = new Person('william', 'kate', 'william@gmail.com', 21, '2-3-2000');

console.log(person1);
console.log(person2);
console.log(person1.getBirthYear());
console.log(person2.getBirthYear());
console.log(person1.getFullName());
console.log(person2.getFullName());