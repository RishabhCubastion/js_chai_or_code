//for

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);  
}
//first step is index initialize then condition check then execution and at last value increment 

//nesting loops
for (let i = 0; i <=10; i++) {
    console.log(`Outer Loop: ${i}`);
    
    for (let j = 0; j < 10; j++) {
         console.log(`Inner Loop: ${j} and outer loop ${i}`);
    }
    

}

//fOR LOOP is working for array as well
let myArray = ["flash","batman","superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


//keywords
//break and continue


for (let index = 1; index <=20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        break //through this break we jumped out of the scope
    }
    console.log(`value of i is ${index}`)
}

for (let index = 1; index <=20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        continue //ek baar maaf kar do
    }
    console.log(`value of i is ${index}`) //yha 5 choorkar sb print ho jaega
}