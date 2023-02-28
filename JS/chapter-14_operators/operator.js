// remainder or modulus
console.log(24%3);

// checking whether a number is even or odd using modulus operator
var num = 50;
if (num%2 ==0){
    console.log("Number is Even");
}
else{
    console.log("Number is Odd");
}


// rounding
var a = Math.round(2.3);
var b = Math.round(2.6);
var c = Math.round(-2.3);
var d = Math.round(-2.6);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(Math.floor(2.3));
console.log(Math.ceil(2.4));


// trigonometry
// will give answers in radians
console.log(Math.sin(90));
console.log(Math.asin(90)); // reverse of sine
console.log(Math.cos(90));

// Bitwise Operators
// Numbers with more than 32 bits discard their most significant bits. For example, the following integer with more
// than 32 bits is converted to a 32-bit integer:
var a = 101
var b = 110
console.log(a | b);
console.log(a & b);
console.log(~ b);
console.log(a ^ b);
console.log(b << 1);
console.log(b >> 1);


// Exponentiation
console.log(Math.pow(2,3));


// Random integers and floats
console.log(Math.random()); // gives a random value in floating number


// Get minimum and maximum value
console.log(Math.min(1, 100));
console.log(Math.min(-1000, 100));

console.log(Math.max(1, 100));
console.log(Math.max(-1000, 100));


// getting roots of a number
console.log(Math.sqrt(1024));