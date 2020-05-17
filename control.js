var ball = document.querySelector(".ball");
var room = document.querySelector(".room");
var output = document.querySelector(".output");
var where = document.getElementById("where");
var startBtn = document.getElementById("start");
var downloadBtn = document.getElementById("download");
var maxX = room.clientWidth - ball.clientWidth;
var maxY = room.clientHeight - ball.clientHeight;

let i = 0; //counter for what game thimble and feedback is on
let distance = 0;
let feedbackOn = false;
let startTime = 0;
let downloadData = []; //milliseconds

const vibrate = (pattern) => {
  navigator.vibrate(pattern);
};

///----- Here are variables we need to match to articles-----

const found = 5; //Sets the range for when the thimble is found

const thimble = [
  [0, 0],
  [20, 20],
  [15, -30],

  [30, 5],
  [-35, 10],
  [20, 0],
  [25, -35],

  [30, -15],
  [40, 15],
  [-25, -5],
  [20, 0],

  [25, -35],
  [20, 0],
  [-25, -5],
  [30, -15],

  [30, -15],
  [-20, 0],
  [40, 15],
  [-25, -5],

  [25, -35],
  [30, 5],
  [-20, 0],
  [-35, 10],

  [-20, 0],
  [40, 15],
  [30, 5],
  [-35, 10],
];
//[i][0] bestämmer om vib, [i][1] bestämmer om vis
const feedback = [
  [true, true],
  [false, true],
  [true, false], //Testing out
  [true, true],
  [true, true],
  [true, true],
  [true, true], //4 both
  [true, false],
  [true, false],
  [true, false],
  [true, false], //4 vib
  [false, true],
  [false, true],
  [false, true],
  [false, true], //4 vis
  [true, true],
  [true, true],
  [true, true],
  [true, true], //4 both
  [true, false],
  [true, false],
  [true, false],
  [true, false], //4 vib
  [false, true],
  [false, true],
  [false, true],
  [false, true], //4 vis
];

//vib patterns, vi behöver fler
const SHORTEST = [50, 25, 50, 25, 50];
const SHORT = [50, 50, 50, 50, 50];
const MED_SHORT = [50, 100, 50, 100, 50];
const MEDIUM = [50, 200, 50, 200, 50];
const MED_LONG = [50, 400, 50, 400, 50];
const LONG = [50, 800, 50, 800, 50];
const LONGEST = [50, 1000, 50, 1000, 50];
//------------

const handleOrientation = (event) => {
  var x = event.gamma; // In degree in the range [-180,180]
  var y = event.beta; // In degree in the range [-90,90]

  // To limit the amount of rotation needed
  if (x > 40) {
    x = 40;
  }
  if (x < -40) {
    x = -40;
  }
  if (y > 40) {
    y = 40;
  }
  if (y < -40) {
    y = -40;
  }

  var location = [x, y];
  ball.style.top = (maxY * (y + 40)) / 80 + "px";
  ball.style.left = (maxX * (x + 40)) / 80 + "px";

  handleDistance(location);
};

function handleDistance(location) {
  var dx = thimble[i][0] - location[0];
  var dy = thimble[i][1] - location[1];
  distance = Math.round(Math.sqrt(Math.pow(dy, 2) + Math.pow(dx, 2)));
  if (distance < found) {
    thimbleFound();
  }
  handleVisual();
  //Vill vi visa denna info?
  output.innerHTML =
    //"Distance to thimble: " + distance + "\n" +
    "Game " + i + "\n";
}

//Visar inte den röda färgen!
function handleVisual() {
  if (feedbackOn && feedback[i][1]) {
    if (distance < found) {
      ball.style.backgroundColor = "red";
      ball.style.boxShadow = "0 0 140px 90px red";
    } else if (distance > 5 && distance < 11) {
      ball.style.backgroundColor = "orange";
      ball.style.boxShadow = "0 0 140px 90px orange";
    } else if (distance > 10 && distance < 21) {
      ball.style.backgroundColor = "yellow";
      ball.style.boxShadow = "0 0 140px 90px yellow";
    } else if (distance > 20 && distance < 36) {
      ball.style.backgroundColor = "white";
      ball.style.boxShadow = "0 0 140px 90px white";
    } else if (distance > 35 && distance < 56) {
      ball.style.backgroundColor = "LightCyan";
      ball.style.boxShadow = "0 0 140px 90px LightCyan";
    } else if (distance > 55 && distance < 81) {
      ball.style.backgroundColor = "DeepSkyBlue";
      ball.style.boxShadow = "0 0 140px 90px DeepSkyBlue";
    } else {
      ball.style.backgroundColor = "DodgerBlue";
      ball.style.boxShadow = "0 0 140px 90px DodgerBlue";
    }
  }
}

function selectPattern() {
  if (distance < found) {
    return SHORTEST;
  } else if (distance > 5 && distance < 11) {
    return SHORT;
  } else if (distance > 10 && distance < 21) {
    return MED_SHORT;
  } else if (distance > 20 && distance < 36) {
    return MEDIUM;
  } else if (distance > 35 && distance < 56) {
    return MED_LONG;
  } else if (distance > 55 && distance < 81) {
    return LONG;
  }
  return LONGEST;
}

//Runs vibrations continually
function runHandleVibration() {
  if (i < feedback.length) {
    const pattern = selectPattern();
    handleVibration(pattern);
    setTimeout(
      runHandleVibration,
      pattern.reduce((prev, curr) => prev + curr, 0)
    );
  }
}

function handleVibration(pattern) {
  window.navigator = window.navigator || {};
  if (navigator.vibrate === undefined) {
    document.getElementById("unsupported").classList.remove("hidden");
    ["start", "download"].forEach(function (elementId) {
      document.getElementById(elementId).setAttribute("disabled", "disabled");
    });
  } else {
    if (feedbackOn && feedback[i][0]) {
      vibrate(pattern);
      if (!feedback[i][1]) {
        ball.style.backgroundColor = "green";
        ball.style.boxShadow = "0 0 0 0";
      }
    }
  }
}

startBtn.addEventListener("click", function () {
  if (i >= thimble.length) {
    i = 0;
    startGame();
  }

  feedbackOn = !feedbackOn;
  startTime = new Date().getTime();
  console.log("start " + i);

  runHandleVibration();
  startBtn.disabled = true;
});

function thimbleFound() {
  if (feedbackOn) {
    const foundTime = new Date().getSeconds();
    while (distance < found) {
      if (new Date().getSeconds() - foundTime >= 0) {
        const saveData = new Date().getTime() - startTime;
        downloadData[i] = saveData + "\n" + thimble[i] + "\n";
        console.log("downloadData: " + downloadData);
        feedbackOn = !feedbackOn;
        i++;
        console.log("Hittad!");
        alert(
          "Du hittade den, tryck på börja runda för att starta nästa omgång"
        );
        ball.style.backgroundColor = "white";
        ball.style.boxShadow = "0 0 0 0";
        if (i >= thimble.length) {
          endGame();
          startBtn.innerHTML = "Spela igen";
        } else {
          startBtn.innerHTML = `Börja runda ${i + 1}`;
        }
        startBtn.disabled = false;
        break;
      }
    }
  }
}

const updateDownloadButton = () => {
  downloadBtn.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," +
      encodeURIComponent(downloadData.toString())
  );
  downloadBtn.setAttribute("download", "results.txt");
  downloadBtn.classList.remove("disabled");
};

function endGame() {
  updateDownloadButton();
  window.removeEventListener("deviceorientation", handleOrientation);
  alert("Spelet avklarat! Tryck på download eller kopiera texten på skärmen. Skicka sedan datan till oss!"
  );
  room.innerHTML = "Kopiera detta:" + downloadData;
}

const startGame = () => {
  downloadBtn.classList.add("disabled");
  window.addEventListener("deviceorientation", handleOrientation);
};

startGame();
