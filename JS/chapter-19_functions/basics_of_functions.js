// functions are defined with function keyword

// function declaration
// Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).
function sum(a,b){
    return a+b;
}

sum(5, 7) // calling the function   


// defining functions using expressions
// a function expression can be stroed in a variable na dthis variable can be used as a function
const x = function(a,b){ return a+b}
const z = x(6, 8) // using the variable instead of function name
console.log(z);
// This function is called as anonymous function i.e. function without a name


// function hoisting => Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. Hoisting applies to variable declarations and to function declarations.
// Functions defined using an expression are not hoisted.


// Arrow functions in Javascript
// Don't need: function keyword, return keyword and curly brackets
const y = (x, z) => x*z;
const product = y(50, 100)
console.log(product);

// -------------------------------------------------------------------------------------------------------------- //
// Javascript function parameters
// javascript function does not perform any checking on the parameter values.
// If a function is called with missing arguments (less than declared), the missing values are set to undefined.