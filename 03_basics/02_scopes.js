//The main story of scopes is starting from let, var and const

let a=10;
const b= 20;
var c= 30;

{} //curly braces is actually known as scope

console.log(a);
console.log(b);
console.log(c);

//this area is global scope
if(true){ //scope starts here
    let a=10;
    const b= 20;  //this start to end area is blocked scope
    var c= 30;
} //scope ends here


//we can access the global scope inside the block scope
//but we can't access block scope inside the global access

console.log(a); // a is not defined
console.log(b); // b is not defined
console.log(c); //30 and this is a problem


//Note: The global scope inside the node and browser environment is different from each other