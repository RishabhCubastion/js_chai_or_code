//Javascript exection context -- how any programs run in JS
//whenever we write any code in object then the Global exection context will build automatically and it kept inside this variable
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
//1) Global exection Phase or Global environmenyt -- and allocate GEP inside "this" (must)
//2) Memory Creation Phase -- all variables will be collected and placed here only
//in memory phase we have 
//val1 -- undefined, val2 -- undefined, addNum -- definition(define all the thngs indie that function),
//result1 -- undefined, result2 -- undefined
//3) Execution Phase --val1 -- 10, val2 -- 5
//addNum has nothing because we already kept the definition in memory creation phase
//result1 has addNum function which creates its own execution phase in between
        //new environment + execution thread (whenever a function will be called then a new setup will be there)
        //so, in this new execution phase we have the memory phase and execution phase will run for this as well
        //memory phase  --- val1 -- undefined, val2 -- undefined, total -- undefined
        //execution phase --- num1 --10, num2 -- 5, total -- 15 and we also have return total means total will return back to global execution phase
//Once we have worked out from that execution context then it will deleted automatically as well
// so in 3 we have in execution phase -- result1 == 15
//now to proceed further we haev result2 which also has the function addNum
//for this as well new execution phase whcih has memory phase and execution phase





//CALL STACK---------------
//here we also have Global execution phase at the start
//if we have any variable for work then we send it to call stack and after execution we will remove it from the stack as well
//In call stack we have LIFO, Last in First Out
