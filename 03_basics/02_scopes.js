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



//Nested Scope
function one(){
    const username = "Rishabh"

    function two(){
        const website = "youtube"
        console.log(username); // can we access the username inside this function  --yes and it prints "Rishabh"
    }
    console.log(website);// can we access the website inside this function - no
    //website is not defined
    
    two()
}

one()

//So in conclusion : the child function can access the parent but the vice versa is not true
//same process will repeat in nested if else as well



//+++++++++++++++++++++++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++++++

function addone(num){
    return num +1;
}
addone(5); // this can also be written before function addone declaration
//the same thing is also exists with different ways like function which hold inside a variable
const addTwo = function(num){
    return num+2
}
addTwo(5) //now if we place this before declaration of addTwo then the error : cannot access 'addTwo' before initialization