const coding = ["js","ruby","java","python","cpp"]
//kuch loops arrays ke ander direct hi property mn add kr diye jaate hn

coding.forEach(function (item){ //callback function
console.log(item); //ye saari values mjhe return kr dega
});

coding.forEach(()=>{ //this is call back function
    console.log(item);
})


function printMe(item){
    console.log(item);
} //kya mn is function ko bih pass on kr skta hoon kya?

coding.forEach(printMe) //to aise bhi ye kaam kr skta hbn
//mtlb function declare kr do and then fir isko use kr lo

coding.forEach((item,index,arr)=>{ //hum array mn item, index aur poora ka poora array nhi use kr skte hn
console.log(item,index,arr); //js 0 ['js','ruby','java','python','cpp']
})

//common cenario that is used inside for each : array ke ander object
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"   
    },
     {
        languageName: "java",
        languageFileName: "java"   
    },
     {
        languageName: "python",
        languageFileName: "py"   
    }
]

myCoding.forEach((item)=>{ //yha item ek object hn and iske ander 2 poperties hn
console.log(item.languageName);  //javascript,java,python
})