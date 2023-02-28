// standard for loops
for (let i=1; i<10; i++){
    console.log(i);
}

// for..of loop
// returns keys
const persons = {fname:"John", lname:"Doe", age:25};
let text = "";
for (let x in persons) {
text += x;
} // 'fnamelnameage'


// for..in loop
// returns values
const person = {fname:"John", lname:"Doe", age:25};

let details = "";
for (let x in person) {
  details += person[x];
} // 'JohnDoe25'

// difference between for/of and for/in loop
// for..in returns a list of keys on the object being iterated, whereas for..of returns a list of values of the numeric properties of the object being iterated.


// while loop
var num = 8;
while (num > 0){
    console.log(num);
    num -= 1;
}


// continue in a loop
for (let i=1; i<10; i++){
    if (i==4){
        continue;
    }
    console.log(i); // 4 is not there in the output
}


// do while loop
var num = 10;
do{
    console.log(num)
    num -= 2;
} while(num > 0)