// gives list of all the javascript console functions.
console.dir(console);

// measuring time
console.time('response in');
alert('Click to continue');
console.timeEnd('response in');
//  once we click on OK on the alert window, time required to complete the task is returned.


// formatting console output using c-like formatting i.e. using % tokens
console.log("%s has %d points", "Sam", 100);
console.log("First number is %d", 200);
console.log("Second number is %d", 300);
console.log("Result is %d", 200+300);

// advanced styling using %c
// %c -> Applies CSS style rules to the output string as specified by the second parameter
console.log("%cHello, World!", "color: red; font-size: xx-large; background-color: yellow");

// each string followed by %c has a CSS styling specified (can have CSS styling or can be empty).
// Hello -> red color;  World -> blue color; !->purple color.
console.log("%cHello, %cWorld%c!", "color: red", "color: blue", "color: purple");
console.log("%cHello, %cWorld%c!", "color: red", "color: blue"); // here ! will not be styled

// Printing to browser's debugging console
console.log("This message will be printed in the debugging console");
console.log("['Apple', 'Banana', 'Orange']"); // Printing an array in console.log
console.log("{1: 'Apple', 2: 'Banana', 3: 'Orange'}"); // Printing a dictionary in console.log


// tabulating values
// console.table() is used to display objects and arrays in tabular format
console.table(['Dipali', 'Kelwade']); // output will be printed with by-default index i.e. 0 and 1 (as list)
console.table({1: 'Dipali', 2: 'Kelwade'}); // output will be printed with the specified keys and corresponding values (dictionary)
// displaying student details using console.table()
var student_list = [
   {"Name": "ABC",
     "Age": "21",
    "Email Id": "abc@gmail.com"
   },
   {
       "Name": "XYZ",
     "Age": "21",
    "Email Id": "xyz@gmail.com"
   },
   {
       "Name": "MNO",
     "Age": "21",
    "Email Id": "mno@gmail.com"
   }
]; 
console.log(student_list);// table will be printed with by-default index
console.table(student_list, ['Email Id', 'Name']); // table with email-id and name having by-default index

// clearing the console
console.clear();


// debugging with assertions
console.assert(1==1); // returns nothing
console.assert('one'==1); // return Assertion failed error