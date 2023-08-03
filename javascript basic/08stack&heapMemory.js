// stack (primitive)
let batch = "pw skill"
let bt = batch // copy value 
bt = "full stack"
console.log(bt);
console.log(batch); // no update in original variable 

// heap (non primitive)
const obj1 = {
    user: "harfool gujjar",
    batch: "full stack web dev",
    isLogIN: true}
    obj2 = obj1   //   referance copy 
    console.log(obj2);
    obj2.batch ="sigma batch"
    console.log(obj1); // also updata original variable