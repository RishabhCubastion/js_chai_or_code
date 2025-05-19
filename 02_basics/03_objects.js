//two ways to declare objects: literals and constructors
//singleton -- if we will create an object through constructor the singleton(unique) object will created
//but if we will create through literals then singleton will not be there and multiple instances will be there

//and through constructor we have
Object.create() //through constructor


//object literals
//const jsUser = {} //literals

const JsUser = {
    name: "Rishabh",
    "fullName" : "Rishabh Raj",
    age : "18",
    location:"Jaipur",
    email:"rishabh@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays : ["Monday","Saturday"]
} //in objects we can define the key as well as value but in arrays we don't have these peoperties


//How to access Object
//in most cases people will learn that i have only one way
console.log(JsUser.age); //18
//by above method we have no way to access fullName which is key in the form of string  but by below we can access fullName as well
//but we have one more way 
 console.log(JsUser[age]); //age is not defined
console.log(JsUser["age"]);



//let's learn symbol as well
const mySym = Symbol("key1")
//to add that symbol in the object we have syntax as:
const newObj = {[mySym]:"myKey1"} //--use the square bracket
console.log(newObj[mySym]);



JsUser.email = "rishabh@google.com" //if we want to change the email
//if we want to freeze the object
Object.freeze(JsUser); // by this method we frrezed the object
JsUser.email = "rishabh@microsoft.com"
console.log(JsUser); // rishabh@google.com"




//Functions in JS
JsUser.greeting = function(){
    console.log("Hello JS User");
}


//FIRST OF ALL UNFREEZE THE JSUSER OBJECT
console.log(JsUser.greeting); //[Function (anonymous)] -- function is not executed, we get refernce only
console.log(JsUser.greeting()); //Hello JS User

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //if we want to refer same object then we can write this
}
console.log(JsUser.greetingTwo());




 
 