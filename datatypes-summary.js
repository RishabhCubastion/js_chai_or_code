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