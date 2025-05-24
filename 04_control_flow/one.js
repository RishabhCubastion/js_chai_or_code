//We generally have some conditions and the logic behind the code flow and i.e. control flow
//1st control flow : if()
if(condition){ //if conditiion is true then the internal will execute

}
//condition basically focused on the comparison operators
//like <,>,<=,>=,==,!=, ===, !==
//Note: = means assignment and == means comparison and === means comparison with type checking

const temp = 41
if(temp>50){
    console.log("Less than 50")
}else{
console.log('greater than 50')
}
//ya to if execute and ya to else


// new code
const score =200
if(score>100){
    const power = "fly"
    console.log('User power: ${power}')
}
 console.log('User power: ${power}') // power is not defined
 //but when we have used var instead of const or let then it is executed but this is blunder


 //new code
 const balance =1000;
 if(balance>500) console.log("test") // this is known as implicit scope --maan liya maine ki scope hn
 //implicit scope 1 hi line mn execute hota hn


 //nesting if-else
 const bal = 1000;
 if(bal<500){
    console.log("less than 500");
 } else if(bal<750){
    console.log("less than 750");
 } else if(bal<900){
     console.log("less than 900");
 }else{
    console.log("less than 1200")
 } 


 //thoda sa complex
 const userLoggedIn = true
 const debitCard = true
 const googleLoggedIn = false
 const emailLoggedIn = true

 //and
 if(userLoggedIn && debitCard){
    console.log("Allow for shopping");
 }

 //OR
 if(emailLoggedIn || googleLoggedIn){
    console.log("Log in granted");
    
 }