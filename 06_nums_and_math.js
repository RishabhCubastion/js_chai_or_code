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



