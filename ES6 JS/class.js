//create class
class Person{
    constructor(fristName, lastName, email, age, dob) {
        this.fristName = fristName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.fristName} ${this.lastName}`;
    }
}


//instantiate object
const person1 = new Person('Htin', 'Kyaw', 'htin@faker.com', 21, '12-3-1999');
const person2 = new Person('Min', 'Oo', 'min@faker.com', 20, '1-3-2000');
console.log(person2);
console.log(person2.getBirthYear());
console.log(person2.getFullName());