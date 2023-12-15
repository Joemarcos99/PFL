/*
PFL Score Board
Author : Joe Marcotte
Date: 4/2/2022
*/


//Variables
let teamOneScore = 0;
let teamTwoScore = 0;
let scoreBoard = document.getElementById("score");
let initialMinutes = .1;
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
  playBBQ();
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
  console.log("min", min, "sec", sec);
  if(min < 0) {
    console.log("done");

    timer.innerHTML = "FINAL";
  } else {
    timer.innerHTML = min + ":" + sec;
    if(min == 0 && sec == "00") {
      playGAME();
    }
  }
}

// Function to play the sound
function playBBQ() {
  // Create an Audio object with the path to your sound file
  var audio = new Audio('bbq.mp3');

  // Play the audio
  audio.play();
}

function playGAME() {
  // Create an Audio object with the path to your sound file
  var audio = new Audio('1 what a game.mp3');

  // Play the audio
  audio.play();
}


// Function to play the sound
function playCOP() {
  // Create an Audio object with the path to your sound file
  var audio = new Audio('cop speed.mp3');

  // Play the audio
  audio.play();
}


function playWOAH() {
  // Create an Audio object with the path to your sound file
  var audio = new Audio('touchdown woah.mp3');

  // Play the audio
  audio.play();
}

function playKID() {
  // Create an Audio object with the path to your sound file
  var audio = new Audio('kid.mp3');

  // Play the audio
  audio.play();
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
    console.log(Number(document.getElementById(id).value));
    if(Number(document.getElementById(id).value) == 6) {
      // if touchdown
      playCOP();
    } else if(Number(document.getElementById(id).value) == 8) {
      playKID();
    }
    scoreBoard.innerHTML = teamOneScore + " - " + teamTwoScore;
  };
  let id2 = "t2Btn" + i;
  document.getElementById(id2).onclick = function () {
    teamTwoScore += Number(document.getElementById(id2).value);
    if(Number(document.getElementById(id2).value) == 6) {
      // if touchdown
      playWOAH();
    } else if(Number(document.getElementById(id).value) == 8) {
      playKID();
    }
    scoreBoard.innerHTML = teamOneScore + " - " + teamTwoScore;
  };
}
