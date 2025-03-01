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


// Age Calculator

// let userName = prompt("Enter your Name")

// let todayDate = new Date().getFullYear()

// let userAge = prompt("Enter your birthday")

// // User Age
// let userBirthdayYear = new Date(userAge).getFullYear()

// let age = (todayDate - userBirthdayYear);

// // Getting MilliSeconds from birthday to today
// let todayMs = new Date()

// let todayMilliSec = todayMs.getTime()

// let userDaysPassMilliSec = new Date(userAge).getTime()

// // Difference
// let difference = (todayMilliSec - userDaysPassMilliSec);

// // // Days Pass
// // let currentMilliSec = Math.round( difference / (1000 * 60 * 60 *24))

// // Getting Seconds From brithday to today
// let todaySeconds = Math.round(difference / (1000 * 60))

// // Getting Minutes From brithday to today 
// let todayMinutes = Math.round(difference / (1000 * 60 * 60))

// // Getting Hours From Birthday to today
// let todayHours = Math.round(difference / (1000 * 60 * 60 * 24))

// // Getting weeks from Birthday to Today
// let weekToday = Math.round(difference / (1000 * 60 * 60 * 24 * 7))

// // Getting days from Birthday to Today
// let yearsToday = Math.round(difference / (1000 * 60 * 60 * 24 * 365))


// document.write("<h1>Age Calculator</h1>" + "<h4>Name:</h4>" + userName + "<br/>" + "<h4>Your Birthday:</h4>" + 
// userAge +  "<h4>Current Year:</h4>" + todayDate + "<h4>Your Age:</h4>" + age + "<h4>Today MilliSeconds:</h4>" + todayMilliSec + "<br/>" + 
// "<h4>MilliSeconds Pass from Your Birthday to Today:</h4>" + "<br/>" + userDaysPassMilliSec + "<h4>Seconds Pass from your Brithday to Today:</h4>" + todaySeconds +
// + "<h4>Minutes Pass from Your Birthday to Today:</h4>" + todayMinutes + "<h4>Hours Pass from Birthday to Today:</h4>" + todayHours + 
// "<h4>Week Pass from Your Birthday to Today:</h4>" + weekToday + "<br/>" + "<h4>Years Pass from Birthday to Today:</h4>" + yearsToday)
// // "<h4>Days Pass:</h4>" + currentMilliSec








// New Code
// Age Calculator 

let userName = prompt("Enter your name")

let userBirthday = prompt("Enter your birthday (like that: 01 january 0000)")

// Get current year
let currentTime = new Date().getFullYear()

// Get year from user birthday
let userBirthYear = new Date(userBirthday).getFullYear()

// Subrtract current year from user birth year to .getFullYear() Method
let differenceThenNow = currentTime - userBirthYear

// Current MilliSeconds 
let passMilliSec = new Date().getTime() 

// Use MilliSeconds Pass from birth to today
let userPassMilliSec = new Date(userBirthday).getTime()

// Getting difference subtract from today's millisecods to user birthdate milliseconds
let getDifference = passMilliSec - userPassMilliSec

// Gettig Seconds
// let secondsPass = Math.round(getDifference / (1000))

// Getting Minutes
let minutesPass = Math.round(getDifference / (1000 * 60))

// Getting Hours
let hoursPass = Math.round(getDifference / (1000 * 60 * 60 * 24 ))

// Getting Weeks
let weekPass = Math.round(getDifference /  (1000 * 60 * 60 * 24 * 7))

// Getting days
let daysPassed = Math.round(getDifference / (1000 * 60 * 60 * 24 * 365))
// console.log(daysPassed);

// Print on Document
document.write("<h2>Age Calculator</h2>" + "<br/>" + "<h4>Your Name:</h4>" + "<br/>" + userName + "<br/>" + "<h4>Your Birthday:</h4>" + "<br/>"
+ userBirthday + "<br/>" + "<h4>Current Year:</h4>" + "<br/>" + currentTime + "<br/>" + "<h4>MilliSeconds Passed:</h4>" + "<br/>" + getDifference
+ "<br/>" + "<h4>Minutes Pass:</h4>" + "<br/>" + minutesPass + "<br/>" +
"<h4>Hours Passed:</h4>" + "<br/>" + hoursPass + "<br/>" + "<h4>Weeks Passed:</h4>" + weekPass + "<br/>" + "<h4>Days Passed:</h4>" + "<br/>" + daysPassed) 