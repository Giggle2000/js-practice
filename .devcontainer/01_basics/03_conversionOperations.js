let score = true
console.log(typeof(score));
let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);// results in NaN(not a number)
// "33" =>33
// "33abc" => NaN
// true => 1; false =>0
let isLoggedIn ="hitesh";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//""=>false
// "mk"=>false
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));
//********operations******* *//
let value =3;
let negvalue = -value 
//console.log(negvalue);

let str1 = " Mansi"
let str2= "Hello";
let str3 = str2 +str1;
console.log(str3);
/******datatypes****/
//type
//Primitive( all are call by value )
//7 types :String,Number,Boolean,null,undefined, symbol
// ,BigIn


//Javascipt is a dynamically typed as we don't have to declare the dataype of the variables 
//Refrence type /non-Premitive
// Arrays, objects,Functions
//symbol
const id =Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
//BigInt
const bigNumber = 343567566544345n
console.log(bigNumber);
//REfrence(non-Primitive)
//Arrays,Objects,Functions
const heros = ["shaktiman","naagraj","doga"]
let myobj = {
    name :"MK",
    age : 22,
}
//Function declaration using variables
const myFunction  = function(){
    console.log("hello world")
}
const outsideTemp = null;
console.log(typeof(outsideTemp));//output is object
//type of  operation Result
//type of val- result
//Undefined = undefined
//nul,boolen = boolean
//number = number
//null = object
//string = string
//function = object  function(returns a function but called so )
//all non primitive types have object as their return type
// symbol = symbol
//++++++++++++++++++++++++++++++++++++++++++//
//Types of memory 
//Stack(primitive), Heap(Non-Primitive)
// stack(we get a copy of variable),Heap(we get the refrnce to the original value so all the changes made are reflected in origonal value )
let myYoutubename = "MK.com"
let anotherName = myYoutubename 
anotherName ="chaiaurCode"
console.log(anotherName)
console.log(myYoutubename)
let userOne = {
    email:"user@gamil.com",
    upi:"user@ybl"
}
let userTwo = userOne
userTwo.email = "mk@google.com"
console.log(userOne.email)
console.log(userTwo.email) 
