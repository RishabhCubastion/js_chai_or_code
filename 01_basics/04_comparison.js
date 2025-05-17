console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);


//problem comes when same datatype is not in comparison 
//meanwhile typescript will not allow you to comapre two different datatypes
console.log("2">1); //true
console.log("02">1); //true

// interesting concept
console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true because the reason is equality check == and comparisons > <  >=  <=
//works differently comparisons converts null to a number, treating it as 0


console.log(undefined>0); //false
console.log(undefined==0); //false
console.log(undefined>=0); //false


//=== it will check value as well as datatype
console.log("2" === 2); //false

