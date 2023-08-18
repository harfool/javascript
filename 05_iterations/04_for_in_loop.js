const myObj = {
    Js: 'JavaScript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple"
}
// method one 
// for (let key in myObj) {
//     console.log(myObj[key]); //Js JavaScript  cpp c++   rb ruby    swift swift by apple
//     }


//method two 
// for (let key in myObj) {
//     console.log(`${key} shortcut is for ${myObj[key]}`); 
//     }

    //  for in loop for array gives key as index number 

const programming = ["Js", "JavaScript",  "cpp",  "c++",   "rb", "ruby" ]
for(const key in programming){
    console.log(programming[key]);
}

//we can't use forIn in map because   map is not iterable 