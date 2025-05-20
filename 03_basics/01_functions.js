function sayMyName(){} //definition of function
sayMyName() //execution of function
sayMyName //this is just a reference it will not execute. to execute we have to add()


function addTwoNumbers (num1,num2){
    console.log(num1+num2)
}
addTwoNumbers() //we get NaN as an output because we have not passed arguement
addTwoNumbers(2,3) //5
addTwoNumbers("2",3) //23
addTwoNumbers(2,"q") //2q

//parameters vs arguments
//when we define  the function then the num1, num2 is called as parameters
// and when we call the function and then 2,3 is known as arguments

// we can also take the functions inside a variable
const result = addTwoNumbers(3,5); //8
console.log(result); //undefined, this is undefined because in that function we are creating the console only, we have not returned the result of function

//to return the result we have somewhat like:
function addTwoNumber(num1,num2){
    let result = num1+num2;
    return result //now it acts in a good way
}

//Note: After return statment we can't execute anything


function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Rishabh")); //Rishabh just logged in
console.log(loginUserMessage()); //Note : undefined just logged in 


// we also have process to check
function loginUserMessage(username){
    if(username===undefined){ //is equivalent to if(!username)
        console.log("Please enter the username");
        return //so thet the below code will not execute
    }
    return `${username} just logged in`
}



//REST OPERATOR
function calculateCartPrice(num1){
return num1;
}
//there is a problem like if we have too many arguments like if we have 200,300 and 400 as well

console.log(calculateCartPrice(200,300,400)) //200
//so, only first value is readable and rest all is not readabvale in this case

//So, for that case we are going to use rest operator (khudra operator matlab khulle mn)
function calculateCartPrice1(...num1){
    return num1;
}
console.log(calculateCartPrice(200,300,400)) //[200,300,400]


//How to Pass Object in function
const user = {
    username: "Rishabh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`)
}

//handleObject(user);
handleObject({ //we also have one more way to do this
    username: "sam",
    price: "399"
})


//How to handle array
const myNewArray = [200,400,100,600];
function returnSecondValue(getArray){
    return getArray[0];
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,600,800])) // by this method we can do this