/*
 현재 날짜(요일 포함) 및 시간 구하는 함수

document.addEventListener("DOMContentLoaded", function () {
  let date = new Date();
  let years = date.getFullYear();
  let days = date.getDay();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let seconds = date.getSeconds();

  let week = new Array();
  week[0] = "SUN";
  week[1] = "MON";
  week[2] = "THU";
  week[3] = "WED";
  week[4] = "TUR";
  week[5] = "FRI";
  week[6] = "SAT";

  document.getElementById("days").innerText = week[days];
  document.getElementById("hours").innerText = hours;
  document.getElementById("mins").innerText = mins;
  document.getElementById("seconds").innerText = seconds;
});
*/

/*
카운트다운 
*/
// D-Day 지정
const newYears = "1 Dec 2022 12:50:00";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  if (newYearsDate > currentDate) {
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
  } else {
    daysEl.innerHTML = "00";
    hoursEl.innerHTML = "00";
    minsEl.innerHTML = "00";
    secondsEl.innerHTML = "00";
    document.querySelector(".countdown-container").innerHTML =
      `<p class="end-msg">곧 웹사이트가 새로운 버전으로 공개됩니다!</p>`;
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);