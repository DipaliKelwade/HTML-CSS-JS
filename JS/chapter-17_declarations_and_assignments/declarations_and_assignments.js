// declaring and initializing constants
// ways of declaring a constant
// The var keyword creates a function-scope variable.
// The let keyword creates a block-scope variable.
// The const keyword creates a block-scope variable that cannot be reassigned.
// A bare declaration creates a global variable.

var count;
typeof count; //'undefined'
var count=10;
count = 11; // value can be chaged

const abc  = 10;
console.log(abc); // 10
abc = 15 // Uncaught TypeError: Assignment to constant variable.
let variable  =44;
variable = 55; // value can be changed


const foo = "Highhtt"; 
// "Uncaught SyntaxError: Missing initializer in const declaration if not declared"
// You must declare and initialize a constant in the same statement.

// undefined
// Declared variable without a value will have the value undefined
var a;
typeof a; // undefined