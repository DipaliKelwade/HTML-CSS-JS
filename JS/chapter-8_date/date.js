// creating a new date object
var curr_date = new Date(); // current date and time
console.log(curr_date);
curr_date == "Tue Feb 21 2023 17:02:28 GMT+0530 (India Standard Time)" //
curr_date === "Tue Feb 21 2023 17:02:28 GMT+0530 (India Standard Time)" //false bcoz one is object and one is string
typeof curr_date; //object

// converting a date to string format
var today = new Date();
console.log(today.toString());
console.log(today.toDateString());
console.log(today.toTimeString());
console.log(today.toGMTString());
console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());
console.log(today.toUTCString());

// creating a date object from UTC (Coordinated Universal Time)
var utcDate = new Date(Date.UTC(2000,0,31,12));
console.log(utcDate);


// get the number of milliseconds elapsed since 1 jan 1970 UTC -> Any time since that date is calculated based on the number of seconds elapsed.
console.log(Date.now()); // using static method now
console.log((new Date()).getTime()); //using getTime method of Date object


// get the current date and time
console.log(Date.get);
var currDate = new Date();
console.log(currDate);
console.log(currDate.getDate());
console.log(currDate.getDay());
console.log(currDate.getHours());
console.log(currDate.getMonth()); // 1 bcoz month starts with 0


// increment a date object
var today = new Date();
var tomorrow = today.getDate() + 1;
console.log(tomorrow); //22
var nextMonth = today.getMonth() + 1;
console.log(nextMonth); //2 i.e march

// convert to JSON
console.log(new Date());
console.log(new Date().toJSON()); //1 2023-02-21T12:25:52.313Z