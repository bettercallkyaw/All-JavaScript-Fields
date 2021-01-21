var yearKyaw, yearMark, year;
var now = 2021;
var ageKyaw = 22;
var ageMark = 25;

//math operators

yearKyaw = now - 22;
yearMark = now - 25;
console.log(yearKyaw);

console.log(now - 2);

//logical operators
markOlder = ageMark > ageKyaw;
console.log(markOlder);

//type of operators
console.log(typeof markOlder);

//operator precedence
var year = 2021;
var williamYear = 2000;
var fullAge = 19;

var isFullAge = year - williamYear >= fullAge;
console.log(isFullAge);

//multiple assignments
var x, y;
x = y = (44 + 222) - 44 - 2;
console.log(x);

x *= 2;
console.log(x);

x -= 20;
console.log(x);

x += 20;
console.log(x);

x /= 2;
console.log(x);

x++;
console.log(x);

x--;
console.log(x);