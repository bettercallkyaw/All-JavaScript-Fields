var fullName;

function sayHello(fullName) {
    console.log('Hello '+fullName);
}

sayHello('Htin Kyaw');

function calculateAge(birthYear) {
    return 2021 - birthYear;
}

var age = calculateAge(1999);
console.log(age);

//function expression
var whatDoYouDo = function (job, completeName) {
    switch (job) {
        case 'web developer':
            return completeName + ' is a web developer';
            break;
        case 'teacher':
            return completeName + ' teaches kids how code';
            break;
        case 'driver':
            return completeName + ' is a texi driver';
            break;
        default:
            return completeName + ' is something';
            break;
    }
}

console.log(whatDoYouDo('web developer','john doe'));
