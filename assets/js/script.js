// TO DO!!
// 3. set up timer:
//      a. should start on the start quiz button and end after clicking
//         a button on page 5
//      b. should doc 10 secs for every wrong answer (set booleans for each
//         quiz button?)
//      c. if the timer runs out you're booted to the final page
//      d. remaining time is the score
// 4. set up scorekeeping:
//      a. grab the initials and pair them with their score
//      b. keep a running list in local storage
//      c. the high score page should display them in a numbered list from
//         highest to lowest
//      d. the clear high scores button should clear the cache or whatev
// 5. set up messages:
//      a. a correct!/wrong! message should pop up every time a quiz button is
//         clicked
//      b. display for a second or two, and then fade until the next click
//      c. what if you click through really fast? make sure it deletes the
//         prev message before displaying another.



// 1. APPEARIFYING SECTIONS

// varries:

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

// functions for the onclicks (displaying and hiding pages):

function page1Start() {
    // removes page 0, displays page 1
    document.getElementById("page0").style.display = "none";
    document.getElementById("page1").style.display = "flex";
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
    // removes page 5, displays final page
    document.getElementById("page5").style.display = "none";
    document.getElementById("pagef").style.display = "flex";
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
}

function page0Back() {
    // removes current page, displays hs page
    document.getElementById("pagehs").style.display = "none";
    document.getElementById("page0").style.display = "flex";
}







// 2. CORRECT/WRONG MESSAGES

// varries:
// DOM locations
var wrongAns = document.getElementById("wrongans");
var rightAns = document.getElementById("rightans");

var correctMsg = document.getElementById("correct");
var incorrectMsg = document.getElementById("incorrectmsg");

// button onclicks (when clicked, run functions):
wrongAns.addEventListener("click", badMsg);
rightAns.addEventListener("click", goodMsg);

// functions for the onclicks (displaying and hiding pages):

function delay(time) {
    // sets up the delay
    return new Promise(resolve => setTimeout(resolve, time));
}

function badMsg() {
    // make incorrectMsg appear, then disappear after a time
    incorrectMsg.style.display = "flex";
    delay(2000).then(() => incorrectMsg.style.display = "none");
}

function goodMsg() {
    // make correctMsg briefly appear
    correctMsg.style.display = "flex";
    // delay(2000).then(() => correctMsg.style.display = "none");
}





// TIMER

// varries
var timer = document.getElementById('timer');

// Timer that counts down from 75
function countdown() {
    var timeLeft = 75;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timer` to show the remaining seconds
            timer.textContent = "Time: " + timeLeft;
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timer.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timer` to an empty string
            timer.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
            displayMessage();
        }
    }, 1000);
}

countdown();