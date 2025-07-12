// const score = 400
// console.log(score);

// const balance = new Number(100)//explicitly defining the number datatype//
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toFixed(2));//toFix is use for precision value we have to give property to it too.
// const otherNumber = 1123.8966
// console.log(otherNumber.toPrecision(3));
// const hundreds =10000
// console.log(hundreds.toLocaleString('en-IN'));//toLocalString gives values acc. to the number system(us based ), to get indian numbers system values  we just have to pass the 'en-IN'.
//++++++++++++++++++++++++++MATHS+++++++++++++++++++++//
console.log(Math);
console.log(Math.abs(-4));//abs stands absoloute where -ve value is converted to +ve 

console.log(Math.ceil(4.6));//ceil chose the upper value
console.log(Math.floor(4.6));//floor always choose the lower value always
console.log(Math.sqrt(144));

console.log(Math.random());//math.random always gives value betweenn 0 and 1.
console.log(Math.random()*10); //shifts the digits by 1 to left side.
console.log((Math.random()*10) +1);//to avoid values like 0.01 so the min value is 1 not 0.

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max- min + 1) + min));






