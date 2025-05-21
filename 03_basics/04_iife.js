//Immediately Invoked Function Expression (IIFE)
//global scope ke pollution se problem hoti hn kai baar to uss global scope ke pollution ko hatane ke lye we have used IIFE

//hum simply ek function ko () ke under define krte hn and then immediately usko () se call kr lete hn
(function chai(){
    console.log('DB Connected')
})() //immediately call kr liya abd by the help of first () hmne uski scope define kr di


//Note: sbse important baat ki IIFE ko call krne ke baad uska termination bohot important hn nhi to wo aage ki function klo undefined bataege 
//means
(function rishabhcode(){ //named IIFE
    console.log('DB Connected');
    
})() //error but agar humne upar wali function ko ; de diya to ye chal jaega

((name) =>{ //simple iife
    console.log(`DB Connected to ${name}` );
    
})('Rishabh')