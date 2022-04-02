/*
PFL Score Board
Author : Joe Marcotte
Date: 4/2/2022
*/


//Variables
let teamOneScore = 0;
let teamTwoScore = 0;
let scoreBoard = document.getElementById("score");
let initialMinutes = 10;
let seconds = initialMinutes * 60;
const timer = document.getElementById("timer-label");
const start = document.getElementById("start-btn");
const stop = document.getElementById("stop-btn");
let interval = 0;
let clicks = 0;

/*
function called to start timer when start btn is clicked.
Clicks var used to not make time count down twice as fast
if clicked twice.
*/
start.onclick = function () {
  if (clicks == 0) {
    interval = setInterval(updateTime, 1000);
    clicks = 1;
  }
};

/*
function that stops count down
*/
stop.onclick = function () {
  clearInterval(interval);
  interval = 0;
  clicks = 0;
};

/*
function that decreases time and displays it
inside the timer label
*/
function updateTime() {
  seconds--;
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;
  sec = sec < 10 ? "0" + sec : sec;
  timer.innerHTML = min + ":" + sec;
}

/*
Code for adding functionality to score board and buttons
*/

scoreBoard.innerHTML = teamOneScore + " - " + teamTwoScore;

//adds action listeners to each btn and adds the value of the btn to the score
for (let i = 1; i <= 9; i++) {
  let id = "t1Btn" + i;
  document.getElementById(id).onclick = function () {
    teamOneScore += Number(document.getElementById(id).value);
    scoreBoard.innerHTML = teamOneScore + " - " + teamTwoScore;
  };
  let id2 = "t2Btn" + i;
  document.getElementById(id2).onclick = function () {
    teamTwoScore += Number(document.getElementById(id2).value);
    scoreBoard.innerHTML = teamOneScore + " - " + teamTwoScore;
  };
}
