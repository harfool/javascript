const user = {
    username: "Harfool",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Harfool"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Harfool"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "Harfool"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) // inplesit return  () use to avoid return statement

const addTwo = (num1, num2) => ({username: "Harfool"}) // use () for print object


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()