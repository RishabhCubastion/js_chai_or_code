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
//by above method we have no way to access fullName but by below we can access fullName as well
 //but we have one more way 
 console.log(JsUser[age]); //age is not defined
console.log(JsUser["age"]); //age is not defined



//let's learn symbol as well
const mySym = Symbol("key1")
//to add that symbol in the object we have syntax as:
const newObj = {[mySym]:"myKey1"} //--use the square bracket


JsUser.email = "rishabh@google.com"
//if we want to freeze the object
Object.freeze(JsUser);
JsUser.email = "rishabh@microsoft.com"
console.log(JsUser); // rishabh@google.com"


JsUser.greeting = function(){
    console.log("Hello JS User");
    
}

console.log(JsUser.greeting); //undefined
console.log(JsUser.greeting()); //JsUser.greeting is not a function 


 
 