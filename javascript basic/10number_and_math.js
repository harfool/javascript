let socre = 400;
console.log(socre);

const blance = new Number (100)
console.log(blance);

// number methods
// console.log(blance.toString() )
// console.log(typeof blance);
console.log(blance.toFixed(2)); // how much Precision you want give in peremeter

const num = 56.8656567
console.log(num.toPrecision(3));

const hundreds = 50000000
console.log(hundreds.toLocaleString('en-IN'));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Math in javascript
console.log(Math.abs(-87)); // its change only negative value to positive value
console.log(Math.round(23.5)); // its give round of value
console.log(Math.ceil(4.2)); // its give always bigger value 
console.log(Math.floor(5.6)); // its give always smaller value
console.log(Math.min(2,34,5,6,7,54,34,67)); // its give minimum of number
console.log(Math.max(2,34,5,6,7,54,34,67,6 ,3)); // its give maximum of number

console.log(Math.random());// its give a in decimal  alwayas random number 
console.log(Math.floor(Math.random()*10)+1);// its give a alwayas random number 

// important formule 
 const min = 10;
 const max = 20
 console.log(Math.floor(Math.random() * (max - min + 1 ) +min))