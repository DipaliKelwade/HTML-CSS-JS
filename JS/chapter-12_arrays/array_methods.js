const cars = new Array("BMW", "Volvo", "Audi");
console.log(cars);

// converting array to string of comma separated values 
// using toString() method
console.log(cars.toString()); //BMW,Volvo,Audi

// using join method
console.log(cars.join()); // not specified => separated by comma
console.log(cars.join(" ")); // separated by whitespace
console.log(cars.join("*")); // separated by *

// removing last element of array using pop
cars.pop();
console.log(cars);

// adding element to array using push method
cars.push("Verna", "ABC");
console.log(cars);

// shift array element i.e. pop the first element of the array
var fruits = new Array("Apple", "Mango", "Banana", "Kiwi");
console.log(fruits);
fruits.shift(); // return the element that is removed; output: Apple

// adding new element at the beginning using unshift method
fruits.unshift("Papaya");
console.log(fruits);

// concatenating two arrays using concat() -> can take any no of arguments
const arr1 = new Array(1, 2, 3, 4, 5)
const arr2 = [11, 12, 13, 14, 15]
let concatenated_array = arr1.concat(arr2);
console.log(concatenated_array); // [1, 2, 3, 4, 5, 11, 12, 13, 14, 15]

// concatenating three arrays
const arr3 = [21, 22, 23, 24, 25];
concatenated_array = arr1.concat(arr2, arr3);
console.log(concatenated_array); // [1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 21, 22, 23, 24, 25]

// adding new items to array using splice method
const fruits = new Array("Apple", "Mango", "Banana", "Kiwi");
fruits.splice(0, 0, "Lemon", "Tomato"); // first parameter -> position where element should be added; second parameter -> no of elements to be removed
// jis location p element add krna hai waha se element delete hoga
console.log(fruits);

// removing elements from array using splice method
fruits.splice(3, 2); // index from which elements need to be deleted and number of elements to be deleted
console.log(fruits);

// slicing javascript array using slice method
// does not remove element; it creates a new array
const fruits = new Array("Apple", "Mango", "Banana", "Kiwi");
const fav = fruits.slice(2); // contains elements starting from the 2nd index
console.log(fav);

// sorting arrays in alphabetical order
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort()); 
// sort function will produce incorrect result in case of number array

// reversing an array
fruits.sort();
fruits.reverse();
console.log(fruits);

// sorting an integer array
const numbers = [1, 2, 3, 4, 54, 0, 23, 45, 43];
numbers.sort();
console.log(numbers); // [0, 1, 2, 23, 3, 4, 43, 45, 54] ====> wrong output
numbers.sort(function(a, b){return a-b});
console.log(numbers); // ascending order

numbers.sort(function(a, b){return b-a});
console.log(numbers); // descending order


// finding the highest or lowest array value
// step1: sort the array
// arr[0]: lowest value
// arr[arr.length-1]: highest value
var arr = new Array(1, 34, 21, 9, 54, 22, 12)
arr.sort(function(a,b){return a-b});
console.log(arr)
console.log("Min value: ", arr[0]);
console.log("Max Value: ", arr[arr.length - 1]);