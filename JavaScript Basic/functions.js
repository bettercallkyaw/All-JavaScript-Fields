var fullName;

function sayHello(fullName) {
    console.log('Hello '+fullName);
}

sayHello('William Jack');


function calculateAge(birthYear) {
    return 2021 - birthYear;
}

var age = calculateAge(1999);
console.log(age);

//function expression

var whatDoYouDo = function (job, name) {
    switch (job) {
        case 'web developer':
        return name+' is a web developer';
        break;
    case 'teacher':
        return name+' is a teacher';
        break;
    case 'driver':
        return name+' is a driver';
        break;
    default:
        return name+' is something';
        break;
    }
}

console.log(whatDoYouDo('web developer','Htin Kyaw'));