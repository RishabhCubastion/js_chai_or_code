//array

const myArr = [0,1,2,3,4,5,true,"rishabh"]// this is also acceptable
//JS Arrays are resizable, mix of different datatypes can also be thetre
//array indexing start from 0
//Arrays in JS will create shallow copies - copy whose property share the same reference point (change in original array as well)
const myNewArr = [0,1,2,3,4,5]
const myHeros = ['shaktiman',"naagraaj"];
const myArr2 = new Array(1,2,3,4) //  here we are not using square brackets
console.log(myArr[1]);

//Methods of Array
myNewArr.push(6);
myNewArr.push(7);
console.log(myNewArr) ;// [0,1,2,3,4,5,6,7]
myNewArr.pop() //here we don't need to provide anything it will automatically removes the last element
console.log(myNewArr) ;// [0,1,2,3,4,5,6]

myNewArr.unshift(0)
console.log(myNewArr);// [0,0,1,2,3,4,5,6] here 0 will insert at start of the array
myNewArr.shift() 
console.log(myNewArr);// [0,1,2,3,4,5,6] here 0 will remove from the start of the array


console.log(myNewArr.includes(9)) //false
console.log(myNewArr.indexOf(9)) // -1 means 9 is not there so it will always throw -1
console.log(myNewArr.indexOf(3)) //3

const myNewArray = myNewArr.join()
console.log(myNewArr); // [0,1,2,3,4,5]
console.log(myNewArray);//  0,1,2,3,4,5
//the change is happening in type : join will change the type to string and bind it as well


//slice and splice
console.log("A", myNewArr); // A [0,1,2,3,4,5]
const myn1 = myNewArr.slice(1,3) //include1,2 and don't include 3
console.log(myn1);// [1,2]
console.log("B", myNewArr); //B [0,1,2,3,4,5]


const myn2 = myNewArr.splice(1,3) // include 1,2 and 3 as well
console.log(myn2);// [1,2,3]
console.log("C", myNewArr); //C [0,4,5] So, splice will manipulate the original array as well


