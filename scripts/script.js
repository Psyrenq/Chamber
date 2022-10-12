let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
let months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + d.getFullYear();
let fullyear = d.getFullYear();

const currentdate = "currentdate";
document.getElementById(currentdate).textContent = fulldate;
document.getElementById("currentyear").textContent = fullyear;
