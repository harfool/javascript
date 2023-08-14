// array 
let myArray = ["harfool", true ,2 , null , "gurjar" ]
myArray[2]= "harfool gujjar"
//console.log(myArray);
let my = new Array(1 ,2, 34,true)
//console.log(my);
//----------------------------------------------------------------------------------------

// array methods 

//(1) toString() --> the toString() return with array value separted by commas .
let hari = ["harfool ", "gujjar", 4, null];
// console.log(hari.toString());
//------------------------------------------------------------------------------------

// Join() --> return a  new string by concating all of the element in an array , saparated  by commas of specified separtor

let bike= ["yamaha " , "hero", "bajaj", "honda"]
// console.log(bike.join(""));
// console.log(bike.join());
//------------------------------------------------------------------------------------

// pop() --> remove the  the last element of an array and returns the removed element 
let bike1 = ["yamaha " , "hero", "bajaj", "honda"]
// console.log(bike1.pop());
// console.log(bike1);
//------------------------------------------------------------------------------------

// push()--> ass new item to the end of an array its change the lenth 
let bike2 = ["yamaha " , "hero", "bajaj", "honda"]
bike2.push("bugati", 23,)
//console.log(bike2);
//------------------------------------------------------------------------------------


// shift --> the shift remove first element and return it

let friend = [ "tulsi ", "muskan", "pooja", "komal"]
// console.log(friend.shift());
//console.log(friend);
//------------------------------------------------------------------------------------


// Unshift() --> add element to begning and return a new array 
let friend1 = [ "tulsi ", "muskan", "pooja", "komal"]
friend1.unshift("harfool", "ganesh")
// console.log(friend1);
//------------------------------------------------------------------------------------


//delete () --> array element can be delete uisig the delete opertor ,using delete leave undefied holes in the array 

let friend3 = [ "tulsi ", "muskan", "pooja", "komal"]
delete friend3[2]
 //console.log(friend3);
//------------------------------------------------------------------------------------


// concat() --> concat method concatenation(join) tow or more .return a new array 
let x = [1,2,3,4]
let y = [5,6,7,8]
let z = [1,2,3,4]
let concatenation = x.concat(y,z)
//console.log(concatenation);
//------------------------------------------------------------------------------------

//sort() --> sort method the element of an array , and overwrite the original array
let nm = [23,2,44,56,43]
let alf = [ "a","d","f","t","h",]
//console.log(alf.sort());
// console.log(nm.sort());
//------------------------------------------------------------------------------------

// splice () --> the splice method add / or remove array element 

const arr = [1, 2, 3,4,5,56,67,99];
//console.log(arr.splice(5,3,"q" , null))
console.log(arr.splice(1,4)) // splice method menuplte origanal array
console.log(arr);

//------------------------------------------------------------------------------------

//reverse() --> the reverse () method revese the order of the element in an array
const arrr = [1, 2, 3,4,5,56,67,99];
let alf1 = [ "a","d","f","t","h",]
arrr.reverse()
alf1.reverse()
//console.log(arrr);
//console.log(alf1);
//------------------------------------------------------------------------------------

// isArray() --> method returns true if an object is array otherwise false
let nmu = [1,2,3,4,"harfool", "gurjar"]
let stog = "harfool gujjar"
// console.log(Array.isArray(nmu));
// console.log(Array.isArray(stog));
//------------------------------------------------------------------------------------


// indexOf() --> method returns the first index (position) of specified value , return -1 if the value is not found. and search from left to right 
let room = ["laptop","phone","notebooks", "headset"]
//console.log(room.indexOf("headset",1));
//------------------------------------------------------------------------------------


//lastIndexOf() --> the method return the last index (postion) of a specified value. returns -1 if the value is not found start at specifed index serach from right to left
let roomm = ["laptop","phone" , "tv","notebooks", "headset"]
//console.log(roomm.lastIndexOf("headset", 1));
//------------------------------------------------------------------------------------


// find() -->mothod return thr first element in the provided array that satisfies the provided testing function 

let array1 = [1,2,4,6,8,10 ,12,14,16,18,19,] 
let b  = array1.find(found => found > 18) ;
 //console.log(b);
//------------------------------------------------------------------------------------


// findIndex() --> method returns the index of the first element in an array that satisfies the provided testing function . if no element satisfy the testing function ,then -1 is return 
let numb = [1,2,4,6,8,10 ,12,14,16,18,19] 
let isLargerNum = (isLarger) => isLarger > 18
// console.log(numb.findIndex(isLargerNum)); 
//------------------------------------------------------------------------------------


// includes() --> method returns true if an array contain  specified value (case sensitive) if the value is found return false 
const num23 = [1,2,4,6 ,8]
const animal = ["cat","dog","bat"]
// console.log(num23.includes(4))
// console.log(animal.includes("dog"));
//------------------------------------------------------------------------------------


// entries() --> method returns an array iterator object with key / value pair and this method does not change the original array
const day = ["SUNDAY","MONDAY", "TUESDAY","WENSERDAY", "THRUSDAY","FRIDAY","SATERDAY"]
const days = day.entries()
for(let x of days){
 //   console.log(x+"\n");
}
//------------------------------------------------------------------------------------


//every() --> method tests whether all elements in the array pass the test  implemented by the provided function . its return a true value
const array3 = [1,2,3,4,6,7,64,32,32,37,76]
const i = below1 => below1 <76
// console.log(array3.every(i));
//------------------------------------------------------------------------------------


// some() --> method tests whether at least one element one element in the array passed the test implemented by the provided function 
//it return true if in the array . it finds an element for which type provide function returns true, otherwise it returns false .its doesn't modify the array.
const age = [1,2,3,4,6,7,64,32,32,37,76]
let checkAdult = ages => ages < 76
age.some(checkAdult)
// console.log(age.some(checkAdult));
//------------------------------------------------------------------------------------


//fill() -->method files specified element in an array with a value method overwrite the original array
const fruits = ["banana", "orange", "apple", "mango"] 
 //fruits.fill("pineapple");
 fruits.fill("kiwi",0,3)
//console.log(fruits);
//------------------------------------------------------------------------------------

 
// copyWithin() --> method copies array elements to another positin in the array and this methods overwrite the existing value 
const fruit = ["banana", "orange", "apple", "mango"] 
fruit.copyWithin(2,0)
 //console.log(fruit);
//------------------------------------------------------------------------------------


 //valueOf() --> the valueOf() method return the array itself and this method does not change original 
 const fruit1 = ["banana", "orange", "apple", "mango"]
fruit1.valueOf();
// console.log(fruit1);

//------------------------------------------------------------------------------------
//flat() --> Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 let maxarray = [1,2,3,[23,34,45,2],23,45,[2,3,4,[1,2,3,4]]]
 console.log("max array", maxarray);
 console.log("flat", maxarray.flat(Infinity));
 //------------------------------------------------------------------------------   