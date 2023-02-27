// comparing date values
var date1 = new Date();
var date2 = new Date();
date1 == date2 //false
date1 === date2 //false
date1.getDay() == date2.getDay(); //true
date1.getDay() === date2.getDay(); //true
date1.getTime() === date2.getTime(); //false
date1.getTime() < date2.getTime() //true
date1.getTime() > date2.getTime() //false

// calculating difference between dates
var curr = new Date();
console.log(curr);
console.log(curr.valueOf());
var curr2 = new Date();
console.log(curr2.valueOf());
console.log(curr2.valueOf() - curr.valueOf()); //36100
console.log(curr2.getTime() - curr.getTime());// 36100