// creating an array
const fruits = ["Apple", "Mango", "Orange", "Apple", "Banana"];
console.log(fruits);

// creating array using Javascript new keyword
const cars = new Array("BMW", "Volvo", "Audi");
console.log(cars);

// changing an array element
cars[0] = "Ford";
console.log(cars);

// accessing the array and showing it in the HTML document
// The innerHTML property returns: The text content of the element, including all spacing and inner HTML tags.
document.getElementById("para").innerHTML = cars;

// arrays are a type of object
console.log(typeof cars); // returns an object

// array properties and methods
console.log(cars.length()); // 3; length is not a function, it is a property
console.log(cars.sort())// sorts in alphabetical order; sort is a function
console.log(cars[0]); // accessing first element of array
console.log(cars[cars.length() - 1]); // bcoz array indexing starts from 0

// looping through array elements using for loop
for (let i=0; i < cars.length; i++){
    console.log(cars[i]);
}
// output
// Audi
// Ford
// Volvo


// Adding array elements
cars.push("Ferrari"); // using push method
console.log(cars);
cars[cars.length] = "Brezza"; // using length property

// Note: Objects use names to access its members. Array in JS is also an object but it does not support accessing elements using named indexes. It only allows for nubered indexes to access an array element

// how to recognise an array bcoz typeof returns an array as an object.
// using Array.isArray
Array.isArray(cars); //true