// IN javascript, almost everything is an object
// Booleans can be objects (if defined with the new keyword)
// Numbers can be objects (if defined with the new keyword)
// Strings can be objects (if defined with the new keyword)
// Dates are always objects
// Maths are always objects
// Regular expressions are always objects
// Arrays are always objects
// Functions are always objects
// Objects are always objects

// Objects are variables too. But objects can contain many values.
// Object values are written as name:value pairs (name and value separated by a colon).

// creating an object in JavaScript

// declaring and defining an object in single statement i.e using object literal ==> list of name:value pairs inside curly braces
const person = {"first_name": "Dipali", "last_name": "Kelwade", "mobile_number": 1111111111};
typeof person;

// creating a empty javascript object and then adding properties
const human = {};
human.fname = "ABC";
human.lname = "MBO";
human.email_id = "abc@gmail.com";
console.log(human);
// output: {fname: 'ABC', lname: 'MBO', email_id: 'abc@gmail.com'}

// creating a javascript object using new keyword
const animal = new Object();
animal.name = "Cat";
animal.no_of_legs = 4;

// Objects are mutable: They are addressed by reference, not by value. Objects are addressed by refrence and not value
const x = person; //will not create a copy of the person; both refer to the same

// accessing properties of an object
console.log(animal.name);
console.log(animal["no_of_legs"]);

// adding new property to an object
animal.type = "Domestic";
console.log(animal);

// deleting property of an object
delete animal.name;
console.log(animal);


// nested objects
const student = {};
student.name = "ABC";
student.age = "MNO";
student.address = {
    street : "A street",
    city : "Wardha",
    state : "Maharashtra"
}

console.log(student.name);
console.log(student.age);
console.log(student.address);
console.log(student.address.city);
console.log(student.address["street"]);
console.log(student["address"]["state"]);






// In JavaScript, the this keyword refers to an object.

const persons = {
    fname : "ABC",
    lname : "CBA",
    age : 12,
    name : function(){
        return this.fname + " " + this.lname;
    } 
}

persons.name();
persons.name; // returns function definition


// learning about getters and setter i.e. get methods and set methods
const fruit = {
    name: "apple",
    color: "red",
    taste: "sweet",
    get_name(){ return this.name},
    get_taste(){return this.taste},
    set_color(value){this.color = value}
};

fruit.get_taste();
fruit.set_color("green");
fruit.color