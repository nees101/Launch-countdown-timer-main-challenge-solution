// const countdownDate = new Date("January 01,2022 00:00:00").getTime();
const countdownDate = new Date().getTime()+ 14*24*60*60*1000;   //set the days we are counting down to (from 14 days here)

// Updating the timer every 1 sec
var x = setInterval (function(){
  const now = new Date().getTime(); //Getting the current time
  const timeRemaining = countdownDate - now;   //differnece between current date and the countdown date

 // Time calculations for days, hours, minutes and seconds
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  let countDays = Math.floor(timeRemaining / days);
  let countHours = Math.floor((timeRemaining  % days) / hours);
  let countMinutes = Math.floor((timeRemaining  % hours) / minutes);
  let countSeconds = Math.floor((timeRemaining  % minutes) / seconds);


  document.getElementById("days").innerHTML = countDays;
  if (countHours < 10) {
    document.getElementById("hours").innerHTML = "0" + countHours;
  } else {
    document.getElementById("hours").innerHTML = countHours;
  }
  if (countMinutes < 10) {
    document.getElementById("minutes").innerHTML = "0" + countMinutes;
  } else {
    document.getElementById("minutes").innerHTML = countMinutes;
  }
  if (countSeconds < 10) {
    document.getElementById("seconds").innerHTML = "0" + countSeconds;
  } else {
    document.getElementById("seconds").innerHTML = countSeconds;
  }

  // If the count down is over, display some text
  if (timeRemaining  < 0) {
    clearInterval(x);
    document.getElementById("countdown").remove();
    document.getElementById("end").innerHTML = "EXPIRED...";
  }

}, 1000);
