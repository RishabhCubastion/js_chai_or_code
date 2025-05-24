// const userEmail = "h@hitesh.ai"  -- maan liya jata hn agar string ke ander koi  value hn to truthy value hn
// const userEmail = {}; -- agar empty string hn to falsy value
const userEmail = [] // agar empty array hn to truthy value

if(userEmail){
    console.log(("Got the nail"));
}else{
    console.log("Don't hav ethe user email");
    
}

//so ye truthy and falsy value aise hi likhte hn ya iska kuch rulke hn/
//iske rules hote hn
// Falsy values
// false, 0,-0,BigInt 0n, "", null, undefined, NaN -- inke alawa saare truthy values hn


//truthy values 
// "0",'false',"false"," ",[],{},function(){}--empty function



//How to detect that array is empty or not
if(userEmail.length ===0){
    console.log("Array is empty");
    
}

//How to detact object that it is empty or not
const emptyObj = {}
if(Object.keys(emptyObj).length ===0){
    console.log("Object is empty");
}


//Note: fasle ==0  which measn true
//false =='' which measn true
//0 =='' which means true


//Nullish Coalescing Operator (??) -- iske saari kahani 2 keyword ke upar hn i.e. null and undefined
let val1;
val1 =5 ?? 10 //5
console.log(val1); //kai baar jab hum DB se directly call krnge ya firebase ka use krnege to directly response nhi milta hn
// hume 2 values milti hn -- so chance hn ki null response aa jaaye ya value aaye hiu na
//to uss case mn poora ka poora code structure pareshan ho skta hn -- uss cases ke lye specially ye banaya gya hn
//null hn to null assign krlel, undefined ho to undefined ya koi value ho to koi value assign krle

val1 =null??10 //10
val1 = undefined ??15 //15

//ye operator sirf null and undefined ke lye bna hn

val1 = null??10??20 //10


//ternary operator
condition? true :fasle

const iceTeaPrice = 100
iceTeaPrice<=80 ?console.log("less than 80") : console.log("more than 80"); //more than 80

