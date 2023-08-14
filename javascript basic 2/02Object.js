// singleton
// object.crete 

// how to declear symbol 
const mykey = Symbol("key1")
// object literals 
let dev = {
    name: "harfool",
    [mykey]: "key2", // this method to declear symbol is object 
    "full name ": "harfool Gujjar",
    age :20,
    country:"India" ,
    Email: "harfoolgujjar63@gmail.com",
    isLogIn: true
}
//how to access object
console.log(dev.Email); // old way to access object
console.log(dev["full name "]); //new way to access object
console.log(dev["isLogIn"]);
console.log(dev[mykey]);

 //how to change object value
 dev.isLogIn = false
 // add function in object
 dev.greetings = function(){
    console.log("welcome Harfool gujjar");
 }
 console.log(dev.greetings());
 dev.greetingsTwo = function(){
     console.log(`hello js user , ${this.name}`); // `back tick called string interpolation`
    }
    console.log(dev.greetingsTwo());
  
 Object.freeze(dev) //Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
 dev.age = 21
 console.log(`Is log in ${dev.isLogIn}`);
 console.log(`developer age : ${dev.age}`);
