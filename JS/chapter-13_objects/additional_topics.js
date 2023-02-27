const obj2 = {"Aname":"A", "Bname":"B", "Cname":"C"}
const x = obj2;
console.log(obj2); // {Aname: 'A', Bname: 'B', Cname: 'C'}
console.log(x); // {Aname: 'A', Bname: 'B', Cname: 'C'}
x.Aname = "Z"; // change was made only in x object

console.log(obj2); // {Aname: 'Z', Bname: 'B', Cname: 'C'}
console.log(x); // {Aname: 'Z', Bname: 'B', Cname: 'C'}
// change reflected in both the objects


// shallow copy of object
// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too — and so, you may end up unintentionally causing changes to the source or copy that you don't expect.

const obj1 = {"Aname":"A", "Bname":"B", "Cname":"C"}
const obj1_copy = Object.assign({}, obj1);
console.log(obj1_copy); // {Aname: 'A', Bname: 'B', Cname: 'C'}
obj1.Aname = "Z";
console.log(obj1); // {Aname: 'Z', Bname: 'B', Cname: 'C'}
console.log(obj1_copy); // {Aname: 'A', Bname: 'B', Cname: 'C'}
// Doubt: shallow copy not understood, not giving the desired output


// Object.freeze method
// The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed
const obj1 = {"Aname":"A", "Bname":"B", "Cname":"C"}
Object.freeze(obj1);
console.log(obj1); // {Aname: 'A', Bname: 'B', Cname: 'C'}
obj1.Aname = "Z";
console.log(obj1); // {Aname: 'A', Bname: 'B', Cname: 'C'}
// output is same in both the cases

// Accessing object properties using iteration
const obj = new Object();
obj.name = "Dipali";
obj.surname = "Kelwade";
obj.roll_number = 101;
obj.email_id = "dipaligmail.com";
obj.state = "Maharashtra";
obj.city = "Wardha";

Object.keys(obj).map(function(key) {
    console.log(key);
   });
// returns list of all the properties
   

// Object.define() property
// It allows us to define a property in an existing object using a property descriptor.
Object.defineProperty(obj, "language", {value: "Hindi"});
console.log(obj);


// get and set methods
const fruit = {
    name: "apple",
    color: "red",
    taste: "sweet",
    getname: function (){ return this.name},
    gettaste: function(){return this.taste},
    setcolor: function(value){this.color = value}
};


fruit.gettaste(); // 'sweet'
fruit.setcolor("green");
fruit.color // 'green'


// Object.seal() method
// The Object.seal() static method seals an object. Sealing an object prevents extensions and makes existing properties non-configurable. A sealed object has a fixed set of properties. Values of existing properties can still be changed as long as they are writable. 
// seal() returns the same object that was passed in.
const obj1 = {"Aname":"A", "Bname":"B", "Cname":"C"}
Object.seal(obj1);
console.log(obj1); 
obj1.Aname = "Z";
Object.defineProperty(obj1, "Dname", {value: "D"})
console.log(obj1); 
// gives typeError: Cannot define property Dname, object is not extensible

// convert object's value to array
const obj = new Object();
obj.name = "Dipali";
obj.surname = "Kelwade";
obj.roll_number = 101;
obj.email_id = "dipaligmail.com";
obj.state = "Maharashtra";
obj.city = "Wardha";

var array = Object.keys(obj).map(function(key) {
    return obj[key];
 });
console.log(array); 


// make a property read-only
const obj1 = {"Aname":"A", "Bname":"B", "Cname":"C"}
Object.defineProperty(obj1, "Dname", {value: "D", writable: false});
console.log(obj1); 
obj1.Dname = "F";
// value will not be overwritten

// Object.keys(object)
// Object.keys(obj) returns an array of a given object's keys

// Object.values(object)
// The Object.values() method returns an array of a given object's own enumerable property values, in the sameorder as that provided by a for...in loop 
