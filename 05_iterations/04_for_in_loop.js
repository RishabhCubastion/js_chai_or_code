const myObject = {
    js: 'javascript',
    cpp:'C++',
    rb:'ruby',
    swift: 'swift by apple'
} //hmne abhi tk dekha ki object hm iterate nhi kr skte through for of


for (const key in myObject) {
    console.log(key); //isse mere paas key aa jaegi 
}

for (const key in myObject) {
    console.log(myObject[key]); //isse mere paas value aa jaegi 
}

for (const key in myObject) {
    console.log(`${key} for shortcut is ${myObject[key]}`); //isse mere paas value aa jaegi 
} //from this we can fetch key value pair


//FOR IN loop in Array
const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
        console.log(key); //ye sirf key matlab indexing dega
}

for (const key in programming) {
        console.log(programming[key]); //yha se hum value nikal lenge
}


//FOR IN loop in Map
const map = new Map() // Map ek object hn jo key value pairs mn hota hn and the order of insertion yaad rkhta hn
//objects order yaad nhi rkhte hn, duplicate value iske ander nhi hoti
map.set('IN', "INDIA",)
map.set('USA', "United States of America",)
map.set('Fr', "France",);
map.set('IN', "INDIA",)  //ye entry nhi jaegi because duplicate hn

for (const key in map) {
        console.log(map);
} //ye kuch bhi print nhi krega because map is not ietrable
