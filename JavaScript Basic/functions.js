function sayHello() {
    console.log('Hello Htin Kyaw!How are you?');
}

sayHello();

function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageKyaw = calculateAge(1999);
console.log(ageKyaw);

//function expression
var whatDoYouDo = function (job, fullName) {
    switch (job) {
        case 'web developer':
            return fullName + ' is a web developer';
            break;
        case 'teacher':
            return fullName + ' is a teacher';
            break;
        case 'driver':
            return fullName + ' is a texi driver';
        default:
            return fullName + ' is a something';
    }
}

console.log(whatDoYouDo('web developer','Htin Kyaw'));