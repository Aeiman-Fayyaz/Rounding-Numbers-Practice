// let numRandom = (Math.random()*6)+1

// let userToss = prompt("Roll a dice")

// if(numRandom === 6){
//     document.write("You wins")
// }
// else(document.write("Try again"))

// console.log(Math.floor(numRandom));

/*let timeToday = new Date()

let week = timeToday.getDay()
let month = timeToday.getMonth()
let date = timeToday.getDate()
let year = timeToday.getFullYear()
let hours = timeToday.getHours()
let minutes = timeToday.getMinutes()
let seconds = timeToday.getSeconds()
let miliseconds = timeToday.getMilliseconds()
let miliseconds2 = timeToday.getTime()

// days array

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Month array

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

document.write("<h4>Today's Time:</h4>" + "<br/>" + days[week] + " " + months[month] + " " + date + " " + year + " " + hours + ":" + minutes + ":" + seconds )

console.log(timeToday);*/







// NEW CODE 
// Age Calculator 

// User Data

let userName = prompt("Enter your good name")
let birthday = prompt("Enter your birthdate \nLike that (00 january 0000)")

// Today time
let todayTime = new Date()
let todayMilliSec = new Date(todayTime).getTime()

// Getting user birthday time
let birthdate = new Date(birthday)

// Getting milliseconds from user birthday
let userBirthMilliSec = new Date(birthdate).getTime()

// Getting difference subtract the valure of todaymillisec from userbirthmillisec 
let difference = todayMilliSec - userBirthMilliSec

// Getting age  
let userYear = new Date(birthday).getFullYear()
let currentYear =  new Date().getFullYear()
let age = currentYear - userYear

// Getting MilliSeconds
let milliSecPassed = Math.round(difference / (1000))

// Getting Seconds
let secondsPassed = Math.round(difference / (1000 * 60))

// Getting Minutes
let minutesPassed = Math.round(difference / (1000 * 60 * 60))

// Getting Hours
let hoursPassed = Math.round(difference / (1000 * 60 * 60 * 24))

// Getting Weeks 
let weekPassed = Math.round(difference / (1000 * 60 * 60 * 24 * 7))

// Getting Days
let yearsPassed = Math.round(difference / (1000 * 60 * 60 * 24 * 365))

document.write("<h1>Age Calculator:</h1>" + "<br/>" + "<h4>Username:</h4>" + "<br/>" + userName + "<br/>" + "<h4>Birthdate:</h4>" + "<br/>"
+ birthday + "<br/>" + "<h4>Age:</h4>" + "<br/>" + age + "<br/>" + "<h4>MilliSeconds Passeed:</h4>" + "<br/>" + milliSecPassed + "<br/>"
+ "<h4>Seconds Passed:</h4>" + "<br/>" + secondsPassed + "<br/>" + "<h4>Minutes Passed:</h4>" + minutesPassed + "<br/>" + 
"<h4>Hours Passed:</h4>" + hoursPassed + "<br/>" + "<h4>Weeks Passed:</h4>" + "<br/>" + weekPassed + "<br/>" + "<h4>Years Passed:</h4>" + 
"<br/>" + yearsPassed22)