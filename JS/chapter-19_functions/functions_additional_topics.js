// function scoping => Everything defined within the function is not accessible by code outside the function.

function num(){
    var a = 100;
    console.log(a);
}

console.log(a) // gives error => a is not defined


// Currying: It is a technique in functional programming, transformation of the function of multiple arguments into several functions of a single argument in sequence. 
// normal function to calculate volume of a cube/ cuboid
const calculateVolume = function(l, b, h){return l*b*h}
const vol = calculateVolume(10,5,6);
console.log(vol);

// Calculating volume of a function using currying technique
function calculateVolume(length) {
    return function (breadth) {
        return function (height) {
            return length * breadth * height;
        }
    }
}
console.log(calculateVolume(10)(5)(6));


// functions with unknown number of arguments
// Method 1: using arguments.length
function printElements(){
    for (var i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
} 
const ele = printElements([1, 2, 3, 4,5]) // [1, 2, 3, 4, 5]

// Method 2: using rest(...values) operator
function printArrayElements(...values){
    for (const value of values){
        console.log(value);
    }
}
const elements = printArrayElements([1, 2, 3, 4,5, 7, ,8, 0]); //  [1, 2, 3, 4, 5, 7, empty, 8, 0]


// anonymous functions
const multiplication = function(a,b){return a*b};
console.log(multiplication(9, 9));


// partial application => used to reduce the number of arguments passed to a function. Unlike currying, the number need not go down by one


// Recursive function in Javascript
function Factorial(num){
    if (num == 0){
        return 1;
    }
    else if(num==1){
        return 1;
    }
    else{return num * Factorial(num -1);} 
}

const fact = Factorial(5);
console.log(fact);