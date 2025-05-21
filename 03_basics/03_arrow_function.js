//This Keyword

const user = {
    username: "Rishabh",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this); //1
        
        
    }
} //here at the place of username we have to write this.username because this keyword is generally for the current context.
user.welcomeMessage() //Rishabh, welcome to website
user.username = "Raj"
user.welcomeMessage() //Raj, welcome to website
 console.log(this); //2


 //For 1 we have:
 //Rishabh, welcome to website
 // {
//username: "Rishabh",
//price: 999,
//welcomeMessage: [Function: welcomeMessage]
//}


 //For 2 we have:
 //Raj, welcome to website
 // {
//username: "Raj",
//price: 999,
//welcomeMessage: [Function: welcomeMessage]
//}

//it means that the "this" ius always telling about current context

//let's suppose we have not set the current context for global like we have not set username : "Raj" in the global scope
// then console.log(this) == {} or empty object because there is no context in the global scope.

//Note: But when we do the same for the browser then we will get  window object over there



//this inside a functon
function chai(){
console.log(this) // we get a lot of values like performance, stInterval, setTimeout etc
}

chai()// we get a lot of values like performance, stInterval, setTimeout etc

//let's take the second example
function chaibiscuit(){
    let username = "Rishabh"
    console.log(this.username);
} 
chaibiscuit() //here we get undefined because this operator works in object but not in function

//in other way of function declaration as well, it is giving the undefined resulr
const chhai = function(){
    let username = "Rishabh"
    console.log(this.username)
}
chhai() //undefined



//ARROW FUNCTIONS:
const arrow = () =>{
    let username = "Rishabh"
    console.log(this.username)
}
arrow() //here also we get undefined anf if we cosole this only then we get empty object


//CORE DISCUSSION ON ARRAOW FUNCTIONS
//syntax :  () => {}

    const addTwo = (num1,num2) =>{
        return num1+num2;
    }
    console.log(addTwo(3,4)) //7


    //We also have one more way to write arrow function and i.e. IMPLICIT RETURN
    const addTwos = (num1,num2) => num1+num2 
        console.log(addTwos(3,4)) //7

//Note: in {} we have to write return but in () we don't have to write return

//return object:
const returnObj = ()=>{username:"Rishabh"}
console.log(returnObj()) //undefined

//to retuen object we need ()
const returnObj1 = ()=>({username:"Rishabh"})
console.log(returnObj()) //{username:"Rishabh"}