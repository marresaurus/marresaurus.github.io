var ball = document.querySelector(".ball");
var room = document.querySelector(".room");
var output = document.querySelector(".output");
var where = document.getElementById("where");
var maxX = room.clientWidth - ball.clientWidth;
var maxY = room.clientHeight - ball.clientHeight;

let i = 0; //counter for what game thimble and feedback is on
let distance = 0;
let feedbackOn = false;
let startTime = 0;
let downloadData = []; //milliseconds


const vibrate = (pattern) => {
  navigator.vibrate(pattern);
}

///----- Here are variables we need to match to articles-----

const found = 10; //Sets the range for when the thimble is found

const thimble = [[0, 0], [20,20]];
//[i][0] bestämmer om vib, [i][1] bestämmer om vis
const feedback = [[true, false],[false, true]];

//vib patterns, vi behöver fler
const SHORT = [50, 25, 50, 25, 50];
const MEDIUM = [50, 300, 50, 300, 50];
const LONG = [50, 1000, 50, 1000, 50];


//------------


function handleOrientation(event) {
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

//----------Vill vi ge följande feedback?
  //Shows location on screen
  /*output.innerHTML =
    "Location: " +
    Math.round(location[0]) +
    ", " +
    Math.round(location[1]) +
    "\n";
*/
  handleDistance(location);
}

function handleDistance(location) {
 //console.log("in distance " +i);
  var dx = thimble[i][0] - location[0];
  var dy = thimble[i][1] - location[1];
  distance = Math.round(Math.sqrt(Math.pow(dy, 2) + Math.pow(dx, 2)));
  if (distance <found){
    thimbleFound();
    }
  handleVisual();
  //Vill vi visa denna info?
  output.innerHTML = "Distance to thimble: " + distance + "\n" + "Game " + i +"\n";
}

//Borde ändra så att den säger varmare/kallare inte beroende på avstånd bara utan också om man flyttar sig närmare eller inte.
//alternativt att vi inte har text alls.
function handleVisual() {
  if(feedbackOn && feedback[i][1]){
    if (distance < found) {
      ball.style.backgroundColor = "red";
      ball.style.boxShadow = "0 0 140px 90px red";
      where.innerHTML = "warm";
    } else if (distance > 10 && distance < 20) {
      ball.style.backgroundColor = "orange";
      ball.style.boxShadow = "0 0 140px 90px orange";
      where.innerHTML = "warmer";
    } else if (distance > 20) {
      ball.style.backgroundColor = "blue";
      ball.style.boxShadow = "0 0 140px 90px blue";
      where.innerHTML = "cold";
    }
  }
}

function selectPattern() {
  if (distance < found) {
    return SHORT;
  } else if (distance > 10 && distance < 20) {
    return MEDIUM;
  } // else if (distance > 20 && distance < 40) {
  return LONG;
  //}
}

//Runs vibrations continually
function runHandleVibration() {
  const pattern = selectPattern();
  handleVibration(pattern);
  setTimeout(
    runHandleVibration,
    pattern.reduce((prev, curr) => prev + curr, 0)
  );
}

function handleVibration(pattern) {
  window.navigator = window.navigator || {};
  if (navigator.vibrate === undefined) {
    document.getElementById("unsupported").classList.remove("hidden");
    ["start", "download"].forEach(function (elementId) {
      document.getElementById(elementId).setAttribute("disabled", "disabled");
    });
  } else {
      if (feedbackOn && feedback[i][0])  {
      vibrate(pattern);
      }
  }
}

document.getElementById("start").addEventListener("click", function () {
  feedbackOn = !feedbackOn;
  startTime = new Date().getTime();
  console.log("start "+i);

  runHandleVibration();
  //knappen behöver bli disabled tills man ablar via thimbleFound(), alltså när vi hittat thimblen
  }
);

document.getElementById("download").addEventListener("click", function () {
//ska bli abled när i gå igenom alla element, alltså när i nått i==thimble.length 
//laddar ner txt av "downloadData" när man klickar på knappen - detta vi ska använda
  console.log("download");
  console.log("To txt: " + downloadData)
  }
);

function thimbleFound() {
  if (feedbackOn){
      const foundTime = new Date().getSeconds();
      while (distance < found){
        if (new Date().getSeconds()-foundTime>=1){
          downloadData[i] = new Date().getTime() - startTime;
          console.log(downloadData);
          feedbackOn=!feedbackOn;
          i++;
          console.log("Hittad!");
          break;
        //lägga till att vi ablar startknapp så länge i<=thimble.length
        }
      }
    //}
  }
}

window.addEventListener("deviceorientation", handleOrientation);