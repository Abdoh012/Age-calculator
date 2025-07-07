// Variables
const input = document.querySelector("input");
const btn = document.querySelector("button");
const age = document.querySelector(".age");

let date = new Date(); // Milliseconds from 1/1/1970
let nowYear = date.getFullYear(); // Now year
let nowMonth = date.getMonth() + 1; // Now month
let nowDay = date.getDate(); // Now day
let birthday; // Milliseconds from input.value date
let daysInMonth;
let ageInMiliseconds;
let ageInDays;
let ageInMonths;
let ageInYears;
// End of variables

// On clicking calc button event
btn.onclick = () => {
  // Variables declaration
  birthday = new Date(input.value); // Birthday date
  let birthdayYear = birthday.getFullYear(); // Birthday year
  let birthdayMonth = birthday.getMonth() + 1; // Birthday month
  let birthdayDay = birthday.getDate(); // Birthday day
  daysInMonth = new Date(nowMonth, nowYear, 0).getDate(); // Calc days in a month
  ageInMiliseconds = date - birthday; // Age in miliseconds
  // End of variables declaration

  // Age in months
  // If birthday month number > today month number
  if (birthdayMonth > nowMonth) {
    ageInMonths = 12 - (birthdayMonth - nowMonth);
    // If birthday month number < today month number
  } else if (birthdayMonth < nowMonth && nowYear !== birthdayYear) {
    ageInMonths = nowMonth - birthdayMonth;
    // If birthday month number = today month number
  } else if (birthdayMonth === nowMonth) {
    ageInMonths = 0;
  } else ageInMonths = 0;

  // Age in years
  ageInYears = parseInt(ageInMiliseconds / 1000 / 60 / 60 / 24 / 365);

  // Age in days
  // If birthday day > day of today
  if (birthdayDay > nowDay && nowYear !== birthdayYear) {
    ageInDays = daysInMonth - birthdayDay + nowDay
    // If birthday day > 1
  } else if (birthdayDay > 1 && nowYear !== birthdayYear) {
    ageInDays = nowDay - birthdayDay;
    // // If birthday day = 1
  } else if (birthdayDay === 1) {
    ageInDays = parseInt(ageInMiliseconds / 1000 / 60 / 60 / 24);
  } else ageInDays = 0;

  // Add birthday details to age
  age.textContent = `You are ${ageInYears} years, ${ageInMonths} months and ${ageInDays} days old`;
};
