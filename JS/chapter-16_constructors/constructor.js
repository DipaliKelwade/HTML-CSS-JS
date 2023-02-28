// The constructor method is a special method of a class for creating and initializing an object instance of that class.
// It is considered good practice to name constructor functions with an upper-case first letter.

class Shape{
    constructor(shape, sides){
        this.name = shape;
        this.sides = sides;
    }
}

const shape1 = new Shape("Triangle", 3); //Creating a new object of Shape class 
console.log(shape1.name); //Triangle
const shape2 = new Shape("Square", 4); //Creating a new object of Shape class 
console.log(shape2.name); //Square


// objects created by constructor function can be checked using instanceof operator 
shape1 instanceof Shape // true