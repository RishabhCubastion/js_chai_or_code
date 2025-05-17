//Dates

let myDate = new Date() //we have create the object and an instance
console.log(myDate); //2025-05-17T12:03:00.900Z

//Let's convert the date to string
console.log(myDate.toString()); //Sat May 17 2025 12:03:41 GMT+000 (Coordinated Universal Time)


console.log(myDate.toDateString()) //Sat May 17 2025
console.log(myDate.toLocaleString()) //  05/17/2025, 12:04:46 PM

console.log(typeof myDate) //object;

let myCreatedDate = new Date(2023,0,23,5,3) // Note: month is starting from 0 in JS
console.log(myCreatedDate); // 2023-01-23T00:00:00.000Z
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023
console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 5:03:00 AM


//Specifically in format
let myNextDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString); //1/14/2023, 12:00:00 AM

let myNexttDate = new Date("01-14-2023")
console.log(myNextDate.toLocaleString()); // 1/14/2023, 12:00:00 AM



let myTimestamp = Date.now() 
console.log(myTimestamp); //16774836364398 -- millisecond value, to fetch the value from this is difficlut
//for that case we have
console.log(myNextDate.getTime()); // same millisecond value will be there and we can compare it easily as well


console.log(Date.now()/1000); //it will convert into seconds but the problem is it has decimal value
console.log(Math.floor(Date.now()/100));//will get the exact value



let newDate = new Date()
console.log(newDate.getMonth()); //4 (May because it starts from 0);
console.log(newDate.getDay()); //6

newDate.toLocaleString('default',{
    weekday:"long"
}) //to customise the direct format as well













