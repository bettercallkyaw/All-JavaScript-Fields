var yearKyaw, yearMark, year;
var now = 2021;
var ageKyaw = 22;
var ageMark = 21;

//math operators
yearKyaw = now - 22;
yearMark = now - 21;
console.log(yearKyaw);


//logical operators
kyawOlder = ageKyaw > ageMark;
console.log(kyawOlder);

//type of operators
console.log(typeof kyawOlder);

//operator precedence
var year = 2021;
var williamYear = 2000;
var fullAge = 20;

var isFullAge = year - williamYear >= fullAge;
console.log(isFullAge);

//multiple assignments
var x, y;
x = y = (45 + 4) - 2 * 3;
console.log(x);

x *= 2;
console.log(x);

x -= 2;
console.log(x);

x += 2;
console.log(x);

x /= 2;
console.log(x);

x %= 2;
console.log(x);

x++;
console.log(x);

x--;
console.log(x);