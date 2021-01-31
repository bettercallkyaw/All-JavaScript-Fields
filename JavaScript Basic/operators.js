var yearJohn, yearMark, year;

var now = 2021;
var ageJohn = 22;
var ageMark = 21;


//math operators
yearJohn = now - 22;
yearMark = now - 21;
console.log(yearJohn);
console.log(yearMark);


//logical operators
johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//type of operators
console.log(typeof johnOlder);

//operator precedence
var year = 2021;
var williamBirthYear = 2000;
var fullAge = 21;

var isFullAge = year - williamBirthYear >= fullAge;
console.log(isFullAge);

//multiple assignments

var x, y;
x = y = (44 + 55) - 2 * 3;
console.log(x);

x += 2;
console.log(x);

x -= 2;
console.log(x);

x /= 2;
console.log(x);

x %= 2;
console.log(x);

x *= 2;
console.log(x);

x++;
console.log(x);

++x;
console.log(x);