//we have 2 methods by which we can strore the data to the memory and i.e. 
//1) call by value
//2) call by reference


//we have some datatypes
//1 Primitive (value type)
//1.1 7 Types in Primitive : String, Number, Boolean, null, undefined, Symbol(any value to unique), BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmaill

const id = Symbol('123');
const anotherId = Symbol('123')
console.log(id===anotherId); //false `  




//2 Non-Primitive (reference type)
//2.1 Array, Objects, Functions

const heros = ["Shaktiman", "naagraj", "doga"]
//object
let myObj = {
    name: "rishabh",
    age : 22
}

//function
const myFunction = function () {
console.log("Hello World");

}


//some basic vales that we are getting from typeOf

//undefined = undefined
//null = object
//boolean = boolean
//number = number
//string = string
//function = function or function object
//symbol = symbol





//memories
//stack and heap
//In all primitivetype we have stack
//stack means that you will get the copy of variable declared by you 
//In all non primitive we have heap memory
//heap means that you will get the reference (reference of original value) of variable declared by you 
let myName = "Rishabh"
let anotherName = myName;
anotherName = "Raj"

console.log(myName);
console.log(anotherName);
//boh have different value


let userOne = {
    email : "rishabhrak2257@gmail.com",
    upi: "user@Ybl"
}

let userTwo = userOne;

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
