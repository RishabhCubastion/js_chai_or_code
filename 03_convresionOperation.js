let score = "33"
let score_a = "33abc"

console.log(typeof score); //string in both case
console.log(typeof (score)); //both are same

let valueInNumber = Number(score); //it will gurantee that it will convert the string to number
console.log(typeof valueInNumber); //number

let valueInNewNumber = Number(score_a); 
console.log(typeof valueInNewNumber); //number but how 33abc will convert to number
console.log(valueInNewNumber); //Nan
//so, JS has some problems as well like iy converts the 33abc to number but when we check the exact value then it gives Nan

let score_b = null
let valueInNumber_b = Number(score_b);
console.log(typeof valueInNumber_b); // number
console.log(valueInNumber_b); //0


let score_c = undefined
let valueInNumber_c = Number(score_c);
console.log(typeof valueInNumber_c); // number
console.log( valueInNumber_c); //NaN


let score_d = true
let valueInNumber_d = Number(score_d);
console.log(typeof valueInNumber_d); // number
console.log( valueInNumber_d); //1


//"33" => 33
//"33abc" = NaN
//true = 1; false = 0

let isLoggedIn = 1
let booleanIdsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIdsLoggedIn); //true

let isLoggedIn_a = ""
let booleanIdsLoggedIn_a = Boolean(isLoggedIn_a);
console.log(booleanIdsLoggedIn_a); //false

let isLoggedIn_b = "rishabh"
let booleanIdsLoggedIn_b = Boolean(isLoggedIn_b);
console.log(booleanIdsLoggedIn_b); //true

//1=>true; 0=>false
//"" = >false
//"rishabh" => true


let someNumber = 33
let stringNumber = string(someNumber);
console.log(stringNumber); //33
console.log(typeof stringNumber);// string
