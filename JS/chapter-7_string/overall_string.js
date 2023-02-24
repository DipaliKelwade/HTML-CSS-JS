// defining string
var string1 = "Hello";
var string2 = "World";

// defining string using template literals (backticks) -> we can perform interpolation on template literals
var string1 = `Hello`;
var string2 = `${string1} World`;
console.log(string2);


// concatenating strings
var str1 = "Hello";
var str2 = "World";
var final = str1 + str2;
console.log(final); // output: HelloWorld
console.log(str1 + " " + str2); // output: Hello World

// concatenating strings with non-string variables
var str1 = "Hello";
var sum = 100;
console.log(str1 + " " + sum); // output: Hello 100
// internally the non-string value will be converted into string and then will be concatenated


// Reverse a string
function ReverseString(str) {
    return str.split('').reverse().join('')
    };
console.log(ReverseString("String to be reversed"));


// accessing characters at a particular index
var name = "Dipali";
console.log(name.charAt(4)); // a
console.log(name[0]); // D


// escaping quotes
var quote = 'I\'m Dipali Kelwade'
console.log(quote);


// trim whitespace
// from the starting and ending of the string
var str1 = "     %cHello, World !!         ";
console.log(str1, "background-color: yellow"); // string with whitespaces will be printed
console.log(str1.trim(), "background-color: yellow"); // starting and ending whitespace will be removed

var str1 = "    Hello, World !!         ";
// trimming whitespace from the start of the string
console.log(str1.trimLeft());

// trimming whitespace from the end of the string
console.log(str1.trimRight());


// splitting a string into an array
var fruits = "apple,banana,orange,mango,kiwi"
console.log(fruits.split(",")); //['apple', ' banana', ' orange', ' mango', ' kiwi']
// joining to get back the string
console.log(fruits.split(",").join("--")); // apple-- banana-- orange-- mango-- kiwi


// substrings with slice
var str = "dipalikelwade595@gmail.com";
console.log("Name: ", str.slice(0, 7));
console.log("Surname", str.slice(7, 13));
console.log("Email Id: ", str.slice(13, ));


// retrieving character code
// unicode character: The Unicode Standard provides a unique number for every character, no matter what platform, device, application or language.
console.log("A".charCodeAt());
console.log(",".charCodeAt());
console.log("\"".charCodeAt());


// string representation of numbers
var integer = 12;
var hexadecimal = integer.toString(16); // conversion to hexadecimal
console.log(integer.toString(8)); // conversion to octal


// find and replace functions in string
// -1 -> if not present
var str1 = "Dipali Kelwade";
console.log(str1.indexOf("D")); // 0
console.log(str1.lastIndexOf("i")); //12
console.log(str1.indexOf(" ")); //7

var str1 = "Dipali Kelwade Kelwade Dipali";
console.log(str1.indexOf("ade ")); // gives the starting index of the first occurence of the expression
console.log(str1.lastIndexOf("ade")); // gives the starting index of the last occurence of the expression

// includes() function -> returns boolean value for the presence of string
var str2 = "Kelwade Dipali";
console.log(str2.includes("ip")); //true
console.log(str2.includes("lik")); //false

// replacing a substring with another string
var string1 = "Hello World!";
console.log(string1.replace("World", "Aliens")); // Hello Aliens

// Find index of substring inside a string
var str1 = "Dipali Kelwade Kelwade Dipali";
console.log(str1.indexOf("dia", 10)); // the integer specifies from wehere to start looking for 

// converting string to uppercase
var str = "dipali";
console.log(str.toUpperCase()); //DiPALI

// converting string to lowercase
var str = "DiPALI";
console.log(str.toLowerCase()); // dipali

// repeat a string
var dash = "--";
console.log(dash.repeat(10)); // --------------------
Footer