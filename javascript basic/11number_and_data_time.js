let myDate = new Date()
// console.log(myDate); // its gives   unreadble date 
// console.log(myDate.toDateString()); // its gives a readble date 
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString()); // its also give a readble date
// console.log(typeof(myDate)); //type of date is object

let myCreatedDate = new Date( 2023 , 0 , 22) // in javascript month start from zero
let myCreatedDate1 = new Date ("01-14-2023")
let myCreatedDate2 = new Date ("2023-01-14") 
console.table([myCreatedDate.toDateString() ,myCreatedDate1.toDateString(), myCreatedDate2.toDateString()])

let myTimeStamp = Date.now()
console.log(myTimeStamp); // its give us time in meliscond in time
console.log(Math.floor(Date.now()/1000)); // its give us time in seconds

// date methods to get a saprate (date , month , year , time)
const today =new Date();
const day=today.getDate();//get the current day number
console.log(day);

const month=today.getMonth();//get the current month number //remember month start from zero
console.log(month);

const year=today.getFullYear();//get the current year
console.log(year);//get the current year