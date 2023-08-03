
// type conversion number to string

let age = 56
let converToString = String (age);
console.log(typeof converToString); // 56 => '56'

// type conversoin string to number

let score = "65"
let converToNum = Number (score)
console.log(typeof converToNum); // "65" => 65
console.table([converToString , converToNum ]) //[ '56','65']

// 2nd example 
let password = "harfool@132&" //this type string give us NAN(number)
let converToNum1 = Number(password) 
console.log(converToNum1 , typeof converToNum1 )

//type conversion boolean to number

let isLogIn = true ; 
let isLogInBoolToNum = Number (isLogIn) // true => 1 , false => 0
console.log(typeof isLogInBoolToNum , isLogInBoolToNum);

// type conversion number to boolean

let isLogOut = 0;
let isLogoutNumToBool = Boolean(isLogOut) 
console.log(typeof isLogoutNumToBool , isLogoutNumToBool);

//  type conversion  undefined
const name = undefined 
let undefinedToNum = Number(name) // undefined convert to number give us NAN(number)
console.log(typeof undefinedToNum , undefinedToNum);

//type conversion null
let empty = null
let nullToNumber= Number(empty)//null convert to number give us 0(number)
console.log(typeof nullToNumber, nullToNumber );
