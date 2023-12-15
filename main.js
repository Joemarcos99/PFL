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

// Array of sound file paths
let touchdownFiles = [
  'touchdown 1.mp3',
  'touchdown 2.mp3',
  'touchdown 3.mp3',
  'touchdown 4.mp3',
  'kid.mp3',
  'cop speed.mp3',
  'touchdown woah.mp3'
  // Add more sound file paths as needed
];

// Array of sound file paths
let randMomentFiles = [
  'pop out.mp3',
  'unbelieveable.mp3',
  'what a play.mp3',
  'parking lot.mp3',
  'intelect.mp3',
  'hahaha.mp3',
  'ukalele.mp3'
  // Add more sound file paths as needed
];

// Function to play a random sound
function playRandomTDSound() {
  // Generate a random index
  var randomIndex = Math.floor(Math.random() * touchdownFiles.length);

  // Create an Audio object with the randomly selected sound file path
  var audio = new Audio(touchdownFiles[randomIndex]);

  // Play the audio
  audio.play();
}

// Function to play a random sound
function playRandomMomentSound() {
  // Generate a random index
  var randomIndex = Math.floor(Math.random() * randMomentFiles.length);

  // Create an Audio object with the randomly selected sound file path
  var audio = new Audio(randMomentFiles[randomIndex]);

  // Play the audio
  audio.play();
}

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

  if(min < 0) {
    timer.innerHTML = "FINAL";
  } else {
    timer.innerHTML = min + ":" + sec;
    if(min == 0 && sec == "00") {
      playGAME();
    } else if (min == 9 && sec == "59") {
      playIntro();
    } else if (min != 0 && sec == "00") {
      playRandomMomentSound();
    } else if (min == 0 && sec == "08") {
      play5toGo();
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




function play5toGo() {
  // Create an Audio object with the path to your sound file
  var audio = new Audio('5 to go.mp3');

  // Play the audio
  audio.play();
}

function playTie() {
  // Create an Audio object with the path to your sound file
  var audio = new Audio('tie.mp3');

  // Play the audio
  audio.play();
}

function playIntro() {
  // Create an Audio object with the path to your sound file
  var audio = new Audio('intro.mp3');

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
    if(Number(document.getElementById(id).value) == 6) {
      // if touchdown and not tie
      if(teamOneScore == teamTwoScore) {
        playTie();
      } else {
        playRandomTDSound();
      }
    } else if(Number(document.getElementById(id).value) == 8) {
      if(teamOneScore == teamTwoScore) {
        playTie();
      } else {
        playKID();
      }
    }
    scoreBoard.innerHTML = teamOneScore + " - " + teamTwoScore;
  };
  let id2 = "t2Btn" + i;
  document.getElementById(id2).onclick = function () {
    teamTwoScore += Number(document.getElementById(id2).value);
    if(Number(document.getElementById(id2).value) == 6) {
      // if touchdown and not tie
      if(teamOneScore == teamTwoScore) {
        playTie();
      } else {
        playRandomTDSound();
      }
    } else if(Number(document.getElementById(id).value) == 8) {
      if(teamOneScore == teamTwoScore) {
        playTie();
      } else {
        playKID();
      }

    }
    scoreBoard.innerHTML = teamOneScore + " - " + teamTwoScore;
  };
}
