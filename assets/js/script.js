// TO DO!!
// 3. set up timer:
//      b. should doc 10 secs for every wrong answer
//      d. remaining time is the score
//      e. entering the "view high scores" page (or the final page tbh)
//         should stop/reset the timer
//      f. fix the bug of it showing up a second late
//      g. should stop when the quiz is finished
// 4. set up scorekeeping:
//      a. grab the initials and pair them with their score
//      b. keep a running list in local storage
//      c. the high score page should display them in a numbered list from
//         highest to lowest
//      d. the clear high scores button should clear the cache or whatev
// 6. if time, DRY up the variables and functions.
//      a. for loops?
//      b. can you add DOM selectors to an array? i haven't been able to.




// 0. APPEARIFYING SECTIONS PART I

// some varries:

// DOM locations
var page0 = document.getElementById("page0");
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");
var page4 = document.getElementById("page4");
var page5 = document.getElementById("page5");

var pagef = document.getElementById("pagef"); // final page
var pagehs = document.getElementById("pagehs"); // hs page
var correct = document.getElementById("correct"); // content in the footer (correct/incorrect msg)

// button DOM locations
var start = document.getElementById("start");
var scoresBtn = document.getElementById("scoresbtn")
var p1Btns = document.getElementById("p1btns");
var p2Btns = document.getElementById("p2btns");
var p3Btns = document.getElementById("p3btns");
var p4Btns = document.getElementById("p4btns");
var p5Btns = document.getElementById("p5btns");
var submit = document.getElementById("submitbtn");
var backBtn = document.getElementById("backbtn");


// button onclicks (when clicked, run functions):

start.addEventListener("click", page1Start);
scoresBtn.addEventListener("click", pagehsSwitch);
p1Btns.addEventListener("click", page2Switch);
p2Btns.addEventListener("click", page3Switch);
p3Btns.addEventListener("click", page4Switch);
p4Btns.addEventListener("click", page5Switch);
p5Btns.addEventListener("click", pagefSwitch);
submit.addEventListener("click", pagehsSwitch);
backBtn.addEventListener("click", page0Back);






// 1. TIMER

var timer = document.getElementById('timer');

//function countdown() {
//    var timeLeft = 75;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
 //   var timeInterval = setInterval(function () {
//        // As long as the `timeLeft` is greater than 1
//        if (timeLeft > 1) {
            // Set the `textContent` of `timer` to show the remaining seconds
 //           timer.textContent = "Time: " + timeLeft;
            // Decrement `timeLeft` by 1
 //           timeLeft--;
//        } else {
            // Once `timeLeft` gets to 0, set it to 0
//            timer.textContent = '0';
            // Use `clearInterval()` to stop the timer
 //           clearInterval(timeInterval);
            // Call the `displayMessage()` function
//            displayMessage();
//        }
//    }, 1000);
//}

// this function gets called when the start button is pressed
var timeLeft = 75; // Start at 75

// function to make the timer doc 
function timeDecrease() {
    timeLeft -= 10;
    if (timeLeft < 0) {
        timeLeft = 0;
    }
}

function countdown () {
    var timerScore = setInterval(function () {
        if (timeLeft >= 1) { // As long as the num is greater than or equal to one:
            timer.textContent = "Time: " + timeLeft; // Display the remaining seconds
            timeLeft --; // Decrement by 1
        } else {
            timer.textContent = "Time: 0";
            document.getElementById("span").textContent = timeLeft;
            clearInterval(timerScore);
            pagefSwitch();
        }
    }, 1000, "additional arguments after the timer expires");
}






// 2. APPEARIFYING SECTIONS PART II

// functions for the onclicks (displaying and hiding pages):

function page1Start() {
    // removes page 0, displays page 1
    document.getElementById("page0").style.display = "none";
    document.getElementById("page1").style.display = "flex";
    // runs countdown funct from timer
    countdown();
}

function page2Switch() {
    // removes page 1, displays page 2
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "flex";
}

function page3Switch() {
    // removes page 2, displays page 3
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "flex";
}

function page4Switch() {
    // removes page 3, displays page 4
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "flex";
}

function page5Switch() {
    // removes page 4, displays page 5
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "flex";
}

function pagefSwitch() {
    // removes current page, displays final page
    document.getElementById("page0").style.display = "none";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "none";
    document.getElementById("pagef").style.display = "flex";
    document.getElementById("pagehs").style.display = "none";
    // stops the timer
    // code here
}

function pagehsSwitch() {
    // removes current page, displays hs page
    document.getElementById("page0").style.display = "none";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "none";
    document.getElementById("pagef").style.display = "none";
    document.getElementById("pagehs").style.display = "flex";
    // stops the timer
    // code here
}

function page0Back() {
    // removes current page, displays hs page
    document.getElementById("pagehs").style.display = "none";
    document.getElementById("page0").style.display = "flex";
}







// 3. CORRECT/INCORRECT MESSAGES

// varries:
// DOM locations
var correctMsg = document.getElementById("correctmsg");
var incorrectMsg = document.getElementById("incorrectmsg");

// delay funct setup:

function delay(time) {
    // sets up the delay
    return new Promise(resolve => setTimeout(resolve, time));
}

// right
var p1right = document.getElementById("p1right"); // locate button
p1right.addEventListener("click", goodMsg); // onclick, button runs goodMsg function

var p2right = document.getElementById("p2right");
p2right.addEventListener("click", goodMsg);

var p3right = document.getElementById("p3right");
p3right.addEventListener("click", goodMsg);

var p4right = document.getElementById("p4right");
p4right.addEventListener("click", goodMsg);

var p5right = document.getElementById("p5right");
p5right.addEventListener("click", goodMsg);

// right funct
function goodMsg() {
    // make correctMsg briefly appear
    correctMsg.style.display = "flex";
    delay(1000).then(() => correctMsg.style.display = "none");
}

// wrong
// page 1
var p1wrong0 = document.getElementById("p1wrong0"); // locates button
p1wrong0.addEventListener("click", badMsg); // onclick, button runs badMsg function

var p1wrong1 = document.getElementById("p1wrong1");
p1wrong1.addEventListener("click", badMsg);

var p1wrong2 = document.getElementById("p1wrong2");
p1wrong2.addEventListener("click", badMsg);

// page 2
var p2wrong0 = document.getElementById("p2wrong0");
p2wrong0.addEventListener("click", badMsg);

var p2wrong1 = document.getElementById("p2wrong1");
p2wrong1.addEventListener("click", badMsg);

var p2wrong2 = document.getElementById("p2wrong2");
p2wrong2.addEventListener("click", badMsg);

// page 3
var p3wrong0 = document.getElementById("p3wrong0");
p3wrong0.addEventListener("click", badMsg);

var p3wrong1 = document.getElementById("p3wrong1");
p3wrong1.addEventListener("click", badMsg);

var p3wrong2 = document.getElementById("p3wrong2");
p3wrong2.addEventListener("click", badMsg);

// page 4
var p4wrong0 = document.getElementById("p4wrong0");
p4wrong0.addEventListener("click", badMsg);

var p4wrong1 = document.getElementById("p4wrong1");
p4wrong1.addEventListener("click", badMsg);

var p4wrong2 = document.getElementById("p4wrong2");
p4wrong2.addEventListener("click", badMsg);

// page 5
var p5wrong0 = document.getElementById("p5wrong0");
p5wrong0.addEventListener("click", badMsg);

var p5wrong1 = document.getElementById("p5wrong1");
p5wrong1.addEventListener("click", badMsg);

var p5wrong2 = document.getElementById("p5wrong2");
p5wrong2.addEventListener("click", badMsg);

// wrong funct
function badMsg() {
    // make incorrectMsg appear, then disappear after a time
    incorrectMsg.style.display = "flex";
    delay(1000).then(() => incorrectMsg.style.display = "none");
    // subtracts 10 from the timer by calling this funct:
    timeDecrease();
}