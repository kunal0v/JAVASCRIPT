// CREATE A NEW DATE OBJECT REPRESENTING THE CURRENT DATE AND TIME:
let time = new Date();
console.log(time); //current  date and time


// //GET THE FULL YEAR
// let time = new Date()
let year = time.getFullYear()
let month = time.getMonth()
let day = time.getDate()
let hour = time.getHours()
let minute = time.getMinutes()
let milisecond=time.getMilliseconds()
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(milisecond)
if((month)==7){
    console.log("month is: August")
}
