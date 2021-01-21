var year, yearKyaw, yearMark;
var now = 2020;
var ageKyaw = 21;
var ageMark = 22;
//math operators
yearKyaw = now - 21;
yearMark = now - 22;

console.log(yearKyaw);

console.log(now - 2);

//logical operators
var markOlder = ageMark > ageKyaw;
console.log(markOlder);

//type of operators
console.log(typeof markOlder);

//operator precedence
var year = 2020;
var yearWilliam = 1977;
var fullAge = 20;

var isFullAge = year - yearWilliam >= fullAge;
console.log(isFullAge);

//multiple assignments
var x, y;
x =y= (4 + 44) * 4 - 2;
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