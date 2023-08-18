// for of
// ["", "", ""] 
// [{},{},{}]
// example
//for of loop in [array]
let num =[1,2,3,4,5,7]
for(const val of num){
    console.log(val);
}// in for of loop object is not javascript object .its means kise chiz p loop lagana hai   

// for of loop in "string"
let greetings = "hello world "
for(const greet of greetings){
    console.log(`each char is ${greet}`);// for of sb p lag jata hai 
}

// maps

const map = new Map() // map is like object but its gives only unique value
map.set('IN', "India")
map.set('IN', "India")
map.set('IN', "India")
map.set('US', "United states of America")
map.set('FR', "France")
console.log(map);

// for of loop in map 

// for(const key of map ){
//     console.log(key);
// }

// for(const [key , value] of map ){
//     console.log(key ,':-' , value);
// }

//## remember for of loop not work for {object}

// const myObj ={
//     name : 'sagar' ,
//     age:  60

// }
// for(const [key , value] of myObj){
//     console.log(key);
// }

