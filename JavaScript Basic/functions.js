var fullName;

function sayHello(fullName) {
    console.log('Hello '+fullName);
}

sayHello('Htin Kyaw');

function calculateAge(birthYear) {
    return 2021 - birthYear;
}

var ageKyaw = calculateAge(1999);
console.log(ageKyaw);

//function expression

var whatDoYouDo = function (job, completeName) {
    switch (job) {
        case 'full stack developer':
            return completeName+' is a full stack developer.';
            break;
        case 'teacher':
            return completeName + ' is a teacher';
            break;
        case 'driver':
            return completeName + ' is a driver';
            break;
        default:
            return completeName+' is something';
    }
}

console.log(whatDoYouDo('full stack developer','John Doe'));