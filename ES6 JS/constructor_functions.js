
//constructor functions
function Person(firstName, lastName, email, age,dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    //this.dob = dob;
    this.dob = new Date(dob);

    this.getBirthYear = () => {
        return this.dob.getFullYear();
    }

    this.getFullName = () => {
        return `${this.firstName} ${this.lastName}`
    }

    // Person.prototype.getBirthYear = () => {
    //     return this.dob.getFullYear();
    // }

    // Person.prototype.getFullName = () => {
    //     return `${this.firstName} ${this.lastName}`
    // }


}

//instantiate object
const person1 = new Person('Htin', 'Kyaw', 'htin@faker.com', 21, '12-3-1999');
const person2 = new Person('Min', 'Oo', 'min@faker.com',20,'1-3-2000');
console.log(person1);
console.log(person2.dob);
console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());

console.log(person2.getFullName());