const tinderUser = new Object()
console.log(tinderUser); //empty object, exact same as const tinderUser = {}
//the basic difference betweeeen these two is from constructor method we get singleton object

tinderUser.id = '123abc';
tinderUser.name = "SAMMY";
tinderUser.isLoggedIn = false;


//Nested objects
const regularUser = {
    email: "some@gmail.com",
    fullName : {
        userFullName:{
            firstName: "rishabh",
            lastName :"raj"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);


//merge the objects
const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};

const obj3 = {obj1,obj2}
console.log(obj3); // {obj1 = {1:"a",2:"b"},obj2 = {3:"a",4:"b"}} //it is not merging two objects

//for merging we have
const obj4=Object.assign({},obj1,obj2) //{1:"a",2:"b",3:"a",4:"b"}
//1st one is always a target and after that all we have is source means { } is target and obj1 and obj2 is source

//most use by us in:
const obj5 = {...obj1,...obj2} //through spread operator

console.log(tinderUser);
//if we want to collect the keys then we can collect through
console.log(Object.keys(tinderUser)); //it will collect all the keys and placed it inside an array and then we can perform operations as well
console.log(Object.values(tinderUser));//it will collect all the values in array
console.log(Object.entries(tinderUser));//it will insert the keys and value inside the array and take all the values inside an upper array

console.log(tinderUser.hasOwnProperty("isLoggedIn")); //it will tell that thius property is available or not



//destructuring of object
const course = {
    coursename : "js in hindi",
    price: "999",
    courseInstructor : "Rishabh"
}

//to access the elements we have right now is: course.courseInstructor
//another way of accessing courseInstructor is: 
const {courseInstructor} = course
console.log(courseInstructor); //Rishabh
//if we thinbk that the name courseInstructor is too long then also we can rename them with smaller values
const {courseInstructor: instructor} = course
console.log(instructor); //Rishabh

//{} is the way to destructure object by course.courseInstructor to {courseInstructor}

//JSON is also an object but if we declare it with any variable then it is object and if we will not declare it then it will be treated as JSON
//in JSON both key and value is in double quotes