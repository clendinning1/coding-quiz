// 0. APPEARIFYING SECTIONS PART I

// some varries:

// right now the page changes if i click on the div containing all the
// buttons rather than each individual button.
// which functions are handling that again?
// ahhh its the p1Btns, p2Btns, etc. 
// im just gonna do it the brute force ugly way bc im tired.

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
var scoresBtn = document.getElementById("scoresbtn");
var submitBtn = document.getElementById("submitbtn");
var backBtn = document.getElementById("backbtn");


// button onclicks (when clicked, run functions):

start.addEventListener("click", page1Start);
scoresBtn.addEventListener("click", pagehsSwitch);
submitBtn.addEventListener("click", submitBtnFunct);
backBtn.addEventListener("click", page0Back);


// 1. TIMER

var timer = document.getElementById('timer');

// this function gets called when the start button is pressed
var timeLeft = 75; // Start at 75

// function to make the timer doc points. gets called in the badmsg funct
function timeDecrease() {
    timeLeft -= 10;
    if (timeLeft < 0) {
        timeLeft = 0;
    }
}

// as long as quizStatus is true, the timer will run.
// the quizEnd funct is called in the functs pagefSwitch and pagehsSwitch. (aka, it runs when moving to the final or hs pages.)
// when it runs, quizEnd turns quizStatus to false, telling the timer to stop.
var quizStatus = true;
function quizEnd() {
    quizStatus = false;
}

var playerInitials = "N/A"; // player initials at the end
var finalScore = 0; // grabs their score at the end

function resetTimer() {
    // this runs when you return to the start page (page 0)
    timeLeft = 75; // sets time back to full
    timer.textContent = ""; // removes timer text from the top
    quizStatus = true; // allows the if statement to start over
    playerInitials = "N/A";
    finalScore = 0;
}

function countdown() {
    // called when you hit the start button!
    timer.textContent = "Time: " + " 76";
    var timerScore = setInterval(function () {
        if ((timeLeft >= 1) && (quizStatus === true)) {
            // As long as the timer is >= 1 secs AND the quiz is running
            timer.textContent = "Time: " + timeLeft; // Display the remaining seconds
            timeLeft--; // Decrement by 1
        } else if ((timeLeft >= 1) && (quizStatus === false)) {
            // The timer is >= 1 secs BUT the quiz is finished
            timer.textContent = "Time: " + timeLeft;
            document.getElementById("span").textContent = timeLeft; // tells the player their score
            finalScore = timeLeft; // puts their score into the finalScore var
            clearInterval(timerScore);
            return;
        } else {
            // The timer ran out (num is not >= 1)
            timer.textContent = "Time: " + timeLeft;
            document.getElementById("span").textContent = timeLeft; // tells the player their score
            finalScore = timeLeft; // puts their score into the finalScore var
            clearInterval(timerScore);
            pagefSwitch(); // boots you to the final page
            return;
        }
    }, 1000);
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
    quizEnd();
}



function pagehsSwitch() {
    // sets up high scores list
    displayScores();

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
    quizEnd();
}



function page0Back() {
    // removes current page, displays hs page
    document.getElementById("pagehs").style.display = "none";
    document.getElementById("page0").style.display = "flex";
    // resets the timer
    resetTimer();
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
p1right.addEventListener("click", rightP1); // onclick, button runs goodMsg function

var p2right = document.getElementById("p2right");
p2right.addEventListener("click", rightP2);

var p3right = document.getElementById("p3right");
p3right.addEventListener("click", rightP3);

var p4right = document.getElementById("p4right");
p4right.addEventListener("click", rightP4);

var p5right = document.getElementById("p5right");
p5right.addEventListener("click", rightP5);

// right functs page 1
function rightP1() {
    goodMsg();
    page2Switch();
}

// right functs page 2
function rightP2() {
    goodMsg();
    page3Switch();
}

// right functs page 3
function rightP3() {
    goodMsg();
    page4Switch();
}

// right functs page 4
function rightP4() {
    goodMsg();
    page5Switch();
}

// right functs page 5
function rightP5() {
    goodMsg();
    pagefSwitch();
}

// right funct (all)
function goodMsg() {
    // make correctMsg briefly appear
    correctMsg.style.display = "flex";
    delay(1000).then(() => correctMsg.style.display = "none");
}


// wrong
// page 1
var p1wrong0 = document.getElementById("p1wrong0"); // locates button
p1wrong0.addEventListener("click", wrongP1); // onclick, button runs badMsg function

var p1wrong1 = document.getElementById("p1wrong1");
p1wrong1.addEventListener("click", wrongP1);

var p1wrong2 = document.getElementById("p1wrong2");
p1wrong2.addEventListener("click", wrongP1);

// page 2
var p2wrong0 = document.getElementById("p2wrong0");
p2wrong0.addEventListener("click", wrongP2);

var p2wrong1 = document.getElementById("p2wrong1");
p2wrong1.addEventListener("click", wrongP2);

var p2wrong2 = document.getElementById("p2wrong2");
p2wrong2.addEventListener("click", wrongP2);

// page 3
var p3wrong0 = document.getElementById("p3wrong0");
p3wrong0.addEventListener("click", wrongP3);

var p3wrong1 = document.getElementById("p3wrong1");
p3wrong1.addEventListener("click", wrongP3);

var p3wrong2 = document.getElementById("p3wrong2");
p3wrong2.addEventListener("click", wrongP3);

// page 4
var p4wrong0 = document.getElementById("p4wrong0");
p4wrong0.addEventListener("click", wrongP4);

var p4wrong1 = document.getElementById("p4wrong1");
p4wrong1.addEventListener("click", wrongP4);

var p4wrong2 = document.getElementById("p4wrong2");
p4wrong2.addEventListener("click", wrongP4);

// page 5
var p5wrong0 = document.getElementById("p5wrong0");
p5wrong0.addEventListener("click", wrongP5);

var p5wrong1 = document.getElementById("p5wrong1");
p5wrong1.addEventListener("click", wrongP5);

var p5wrong2 = document.getElementById("p5wrong2");
p5wrong2.addEventListener("click", wrongP5);

// wrong functs page 1
function wrongP1() {
    badMsg();
    page2Switch();
}

// wrong functs page 2
function wrongP2() {
    badMsg();
    page3Switch();
}

// wrong functs page 3
function wrongP3() {
    badMsg();
    page4Switch();
}

// wrong functs page 4
function wrongP4() {
    badMsg();
    page5Switch();
}

// wrong functs page 5
function wrongP5() {
    badMsg();
    pagefSwitch();
}

// wrong functs (all)
function badMsg() {
    // make incorrectMsg appear, then disappear after a time
    incorrectMsg.style.display = "flex";
    delay(1000).then(() => incorrectMsg.style.display = "none");
    // subtracts 10 from the timer by calling this funct:
    timeDecrease();
}







// 4. SCOREKEEPING

let userinit = ["initials:"];
let userscore = ["scores:"];
let hasScores = false;

function submitBtnFunct() {
    // grab initials
    let playerInitials = document.getElementById("initials")[0].value;

    // adds initials and score to arrays
    userinit.push(playerInitials);
    userscore.push(finalScore);

    // translate to string and add to local storage
    localStorage.setItem("userinit", JSON.stringify(userinit));
    localStorage.setItem("userscore", JSON.stringify(userscore));

    // tell the prgrm we have data now
    hasScores = true;

    // move to high score page
    pagehsSwitch();
}


let scoreSpan = document.getElementById("scorespan");
function displayScores() {
    // resetting scoreboard
    scoreSpan.innerText = "";

    // pull data from local storage
    var grabinit = localStorage.getItem("userinit");
    var grabscore = localStorage.getItem("userscore");

    // parse it back into an array from a string
    var parseinit = JSON.parse(grabinit);
    var parsescore = JSON.parse(grabscore);

    // if we have no data, don't run this code
    if (hasScores === false) { } else {
        // for loop modified from stack overflow link in readme.
        for (let i = 1; i < parseinit.length; i++) {
            // starting at one; running as long as i < the number of values in the array; increasing by one each time the code is executed
            let storedScores = document.createElement("p"); // ss creates a paragraph element
            storedScores.innerText = ([i] + ". " + parseinit[i] + " - " + parsescore[i]);
            // text in the p element = "i. initials - score" for each iteration.
            scoreSpan.appendChild(storedScores); // attaches ss to the scorespan id in the html
        }
    }

}


// clear button function

var clearBtn = document.getElementById("clearbtn");
clearBtn.addEventListener("click", clearBtnFunct);
function clearBtnFunct() {
    // clears storage
    localStorage.clear();

    // resets arrays
    userinit = ["initials:"];
    userscore = ["scores:"];

    // tell the prgrm we got rid of the data
    hasScores = false;

    // resets scoreboard
    scoreSpan.innerText = "";
}