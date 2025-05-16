const name = "Rishabh"
const repoCount = 50
console.log( name+repoCount+ " Value") //this is the old approach of writing the code for just like concatenation

//Today we are using backticks - string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//we also have one process to declare string
const gameName = new String('Rishabh')
console.log(gameName); // this will give the total length of string and returns in the form of object with some prototupes and methods
//to master string we need to master the objects and methodes returned by these console

//How to acces key in the object
console.log(gameName[0]);
//we can directly access the methods as well like:
console.log(gameName.__proto__) // this is the syntax but we can directly access the methods aswell w/o using the __proto__
 console.log(gameName.length)
console.log(gameName.toUpperCase);
console.log(gameName.charAt(2)); //t
console.log(gameName.indexOf('t'))

const gameName2 = new String('Rishabh-Raj')
const newString = gameName2.substring(0,4)
console.log(newString); //Rish (last value means value at posn 4 is not included)

const anotherString = gameName2.slice(-8,4) //slice will taje the -ve values and if we pass the same
//negative value to sbstrig then it will not obey and start from 0
console.log(anotherString);



//trim
const newStringOne = "        Rishabh    " // these types of string is general in nature
console.log(newStringOne); //comes up with the startring and end spaces
console.log(newStringOne.trim()); //it removes all the spaces
//trim is also coming with trimstart() and trimend()




//replace
const url = "https://rishabh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))



//includes -- which tells that they keyword existing or not
console.log(url.includes('rishabh')) //true


//split -- it asks for separator and a limit. limit is not necessary
const newSplit = "Rishabh-Raj-Noida"
console.log(newSplit.split('-'));




