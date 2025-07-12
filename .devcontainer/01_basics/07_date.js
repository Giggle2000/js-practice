let myDate = new Date();//date is an object
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2025,0,23,5,3);
let myCreatedDatee = new Date("01-14-2008");
console.log(myCreatedDatee);
console.log(myCreatedDate.toDateString());
console.log(myDate.toLocaleString());

//+++++++++++++TimeStamps++++++++++++++++//
let TimeStamps = Date.now();
console.log( TimeStamps);
console.log(myCreatedDate.getTime());//time from that particur mentioned date
console.log(Math.floor(Date.now()/1000));//date to sec
let newDate = new Date()
console.log(newDate.getMonth());
// `${newDate.getDay()}`
newDate.toLocaleString('')