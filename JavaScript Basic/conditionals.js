var fullName = 'Htin Kyaw';
var isMarried = false;
var age = 22;

//simple if//else
if (isMarried == false) {
    console.log(fullName+' is single');
} else {
    console.log(fullName+' is married');
}

//if/else if/else
if (age < 13) {
    console.log(fullName+' is a boy');
} else if (age >= 13 & age < 20) {
    console.log(fullName+' is a teengaer');
} else {
    console.log(fullName+' is a man');
}


//ternary operator

age>=18?console.log(fullName+' drinks beer'):console.log(fullName+' drinks juice');

//switch statements
var job = 'web developer';

switch (job) {
    case 'web developer':
        console.log(fullName+' is a web developer');
        break;
    case 'teacher':
        console.log(fullName+' is a teacher');
        break;
    case 'driver':
        console.log(fullName+' is a driver');
        break;
    default:
        console.log(fullName+' is something');
        break;
}