//Javascript exection context -- how any programs run in JS
//whenever we write any code in object then the Global exection context will build automatically
//we also have functional or function execution context.
//in third we have eval exection context but it is not very important because it is a part of global execction context.


//When we write any JS code then it will run in 2 formats:
//1) Memory creation phase or creation phase -- In this we have place allocation which we have created as a variable
//koi operation perform nhi hoti
//2) Exection Phase -- memory allocation ke alawa saara kaam yha hota hn


//let's understand with the help of code
let val1 = 10;
let val2 = 5;
function addNum(num1,num2) {
    let total = num1+num2
    return total
}

let result1 = addNum(val1, val2);
let result12 = addNum(10, 2)

//steps of exection
//1) Global exection -- and allocate that inside "this"
//2) Memory Phase -- all variables will be collected and exected