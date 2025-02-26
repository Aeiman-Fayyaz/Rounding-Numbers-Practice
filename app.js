// let numRandom = (Math.random()*6)+1

// let userToss = prompt("Roll a dice")

// if(numRandom === 6){
//     document.write("You wins")
// }
// else(document.write("Try again"))

// console.log(Math.floor(numRandom));

let timeToday = new Date()

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

console.log(timeToday);
