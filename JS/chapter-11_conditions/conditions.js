// ternary operator -> alternative to if-else statement
var day1 = new Date().getDay();
console.log(day1); // 2
var day2 = day1 + 1;
console.log(day2); // 3
var result = day1 == day2 ? "Day is same" : "Day is different";
console.log(result); // Day is different

var day2 = day1;

var result = day1 == day2 ? "Day is same" : "Day is different";
console.log(result); // Day is same

// using alert 
var result = day1 == day2 ? alert("Day is same") : alert("Day is different");

// using warning
var result = day1 == day2 ? console.warn("Day is same") : console.warn("Day is different");


// switch statement
switch (value) {
    case 1:
        console.log('This is first case');
        break;
    case 2:
        console.log('This is second case');
        break;
    case 3:
        console.log('This is third case');
        break;
    default:
        console.log('This is default case');
        break;
   }

// if, else-if
var day1 = new Date().getDay();
console.log(day1); // 2
var day2 = day1 + 1;
console.log(day2); // 3

if (day1 == day2){
    console.log("Day is same");
}
else{
    console.log("Day is different");
}


// Using || and && short circuiting
var x = 10
x == 10 && alert("x is 10")
x == 10 || alert("x is not 10")