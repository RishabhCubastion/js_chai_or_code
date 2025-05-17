//numbers
const score = 400
console.log(score); //400 // this is number but this is not in defined stack

const balance = new Number(100)
console.log(balance); //[Number:100] // this especially defines that this is in number form


//compare to string if we see the properties in number then it has less properties


//convert to string -- toString()
console.log(balance.toString());// after string conversion it gains all properties of string aswell


//toFixed -- for fixed precison values
console.log(balance.toFixed(2)); //100.00


const otherNumber = 23.8966

//toPrecision
console.log(otherNumber.toPrecision(3)) //23.9 (it is returning a string) --please visit mdn docs for precision

const hundreds = 1000000

//toLocaleString() == to customise the values in readable format
console.log(hundreds.toLocaleString()) //1,000,000
//for indian values
console.log(hundreds.toLocaleString('en-IN'));//10,00,000


//++++++++++++++++++++++++++++++Maths++++++++++++++++
console.log(Math)
console.log(Math.abs(-4)); //absolute value when -ve comes to +ve
console.log(Math.round(4.3));//4
console.log(Math.ceil(4.2)); // 5 (always take ceiling value)
console.log(Math.floor(4.8)); //4 (always take floor value)
console.log(Math.min(4,3,5,6)); // 3

console.log(Math.random()) //always comes value in between 0 and 1
console.log((Math.random()*10)+1) //shift to left and add 1 to avoid 0
console.log(Math.floor((Math.random()*10)+1)) //it will avoid the point values and restrict it to floor values
const min = 10
const max = 20
//(Math.random()*(max-min + 1)) + min
console.log(Math.floor(Math.random()*(max-min + 1))+min);









