const marvel_heros = ["thor","ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros);
console.log(marvel_heros); //["thor","ironman","spiderman",["superman","flash","batman"]]; array ke ander array aa gya
//array can take any data even it has taken array as a data as well
//so to access the values of dc_heros we have to write like : marvel_heros[3][1]

marvel_heros.concat(dc_heros)
console.log(marvel_heros); //"thor","ironman","spiderman",["superman","flash","batman"]]; same output

const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros); //it will combine both the arrays and a return a new array

//many people doesn't use concat, instead of that they are using spread operator

const all_new_heros = [...marvel_heros,...all_heros] //it will spread both the arrays as and each element as a single element
console.log(all_new_heros); //["thor","ironman","spiderman","superman","flash","batman"]


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]] //very rare case array
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); // [1,2,3,4,5,6,7,6,7,4,5] flat arrays will be there


console.log(Array.isArray("Rishabh")); //false
//to convert this "Rishabh" in array we have from
console.log(Array.from("Rishabh")) //['R','i','s','h','a','b','h']
console.log(Array.from({name:"Rishabh"})) //it will return the empty array because it will not convert

let score1 = 100
let score2 = 200
let score3 = 300
//here we can use of which returns the new array in the form of set of elements
console.log(Array.of(score1,score2,score3)) //[100,200,300]