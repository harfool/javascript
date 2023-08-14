//singleton object
const tinderUser = new Object()
tinderUser.name = 'jeenu'
tinderUser.id= "123abc"
tinderUser.isLoggedIn = true
// console.log(tinderUser);

// object nesting
const regularUser = {
    email:"some@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Harfool",
            lastName:"gujjjar"
        }

    }
}
// console.log("regularUser",regularUser);
// console.log("regularUser.fullName",regularUser.fullName);
// console.log("regularUser.fullName.userFullName",regularUser.fullName.userFullName);

let data = [
    {id:"123", email:"g@gmail.com"},
    {id:"123", email:"g@gmail.com"},
    {id:"123", email:"g@gmail.com"},
    {id:"123", email:"g@gmail.com"}
]
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));