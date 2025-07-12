const cname = 'Mk-hc'; //string declaration
const repoCount = 50
console.log(`Hello my name is ${cname} and my repo count is ${repoCount}`);
const gameName = new String('Mansi-kang');//we use new when declare the object and we give the name in the constructor of string//
console.log(gameName[0]);
console.log(gameName.__proto__);//we are accessing prototype here which gives{} as an object which is an object//

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('k'));
const newString = gameName.substring(0,4)// we cannot use -ve value in substring//
console.log(newString);
const anotherString = gameName.slice(-9,4);
console.log(anotherString);
const newStringOne = "  mansi  ";
console.log(newStringOne);
console.log(newStringOne.trim());
const url ="https://hitesh.com/mansikang"
console.log(url.replace('com','Com'))
console.log(url.includes('mansi'))//checks whether the string is present or not//\
console.log(cname.split('-'));
