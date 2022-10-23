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
let fdate = dayName + ", " + monthName + " " + d.getDate() +", " + d.getFullYear();
let fullyear = d.getFullYear();

const currentdate = "currentdate";
document.getElementById(currentdate).textContent = fdate;
document.getElementById("currentyear").textContent = fullyear;

document.getElementById("timestamp").textContent = document.lastModified;

let year = new Date().getFullYear()
document.getElementById("currentyear").textContent = year;

const datefield = document.querySelector(".date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

