var fullName = 'Htin Kyaw';
var isMarried = false;
var age = 21;

if (isMarried == false) {
    console.log('Htin Kyaw is not married yet!😂😂');
} else {
    console.log('Htin Kyaw is married yet 😎😎');
}

if (age < 13) {
    console.log(fullName+' is a boy');
} else if (age >= 13 && age < 20) {
    console.log(fullName+' is a teenager');
} else {
    console.log(fullName+' is a young man');
}

//ternary operator
age >= 18 ? console.log(fullName + ' drinks beer') : console.log(fullName + ' drinks juice');

//switch statements
var job = 'web developer';
switch (job) {
    case 'web developer':
        console.log(fullName+' is a web developer');
        break;
    case 'teacher':
        console.log(fullName + ' is a teacher');
        break;
    case 'driver':
        console.log(fullName+' is a texi driver');
    default:
        console.log(fullName+' is a something');
       
}