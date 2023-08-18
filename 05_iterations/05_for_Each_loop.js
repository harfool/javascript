const coding = ["js","java", "c++","python","ruby"]
// using basic function 

// coding.forEach(function (val) {
// console.log(val);
// })

//using arrow function

// coding.forEach((item)=>{
// console.log(item);
// })

// way 3 

// function printme(item) {
//     console.log(item)
// }
// coding.forEach(printme)

// coding.forEach((item,index ,array)=>{
//     console.log(item , index ,array);
//     })

// object in array [{},{},{}]
let myCoding = [
    {"name":"harfool","coding":true},
    {"name" : "ganesh", "coding":false},
    {"name" : "jeenu", "coding":false}
]
myCoding.forEach((element)=>{
    console.log(element["coding"]);
})