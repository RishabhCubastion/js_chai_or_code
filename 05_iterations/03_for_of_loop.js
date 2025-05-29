//Array specific loops
//array ke ander bahot ssaare string ya objects milenge

const arr = [1,2,3,4,5]

// for (const element of object) { //yha pr object means ki kis chij pr loop lagana h na ki Object wala Object
    
// }

for(const num of arr){
    console.log(num);
}

//for of loop ke liye object hona hi jaruri nhi hn ise hm strings ke upar bhi lga skte hn

const greetings = "Helllo World"
for (const greet of greetings) {
    console.log('Each Char is ${greet}');
}

//Object and strings ke baad hamare paas maps bhi hote hn
const map = new Map() // Map ek object hn jo key value pairs mn hota hn and the order of insertion yaad rkhta hn
//objects order yaad nhi rkhte hn, duplicate value iske ander nhi hoti
map.set('IN', "INDIA",)
map.set('USA', "United States of America",)
map.set('Fr', "France",);
map.set('IN', "INDIA",)  //ye entry nhi jaegi because duplicate hn
console.log(map);

for (const key of map) {
    console.log(key) //isse hamara paas pura ka pura array aa jaega
    //agar hame sirf value chahiye then?
}
//aise hum key and value ko alag alag store kr skte hn
for (const [key,value] of map) {
    console.log(key,':', value) //isse hamara paas pura ka pura array aa jaega
    //agar hame sirf value chahiye then?
}



//FOR OF LOOP IN OBJECT]
const myObject = {
    'game1': 'NFS',
    'game2' : 'Spiderman'
}
for (const [key,value] of myObject) {
    console.log(key,':',value);
}  //this gives error that myObject is not iterable

