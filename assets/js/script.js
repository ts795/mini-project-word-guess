// Elements on the page
var startButtonEl = document.getElementById("start-button");
var wordDisplayEl = document.getElementById("word-display");
var statTrackerEl = document.getElementById("stat-tracker");
var winCountEl = document.getElementById("win-count");
var lossCountEl = document.getElementById("loss-count");
var resetScoreEl = document.getElementById("reset-score");
var timerEl = document.getElementById("timer");

// The words the user has to guess
var wordsToGuess = ["handler", "feature", "storage", "data", "button"];
// Words we have not chosen yet
var wordsAvailable = wordsToGuess.slice();

// Count of the wins and losses for the word guess game
var wins = 0;
var losses = 0;
// The time left to guess the word
var timeLeft = 30;

function chooseWord() {
    var indexToChoose = Math.floor(Math.random() * wordsAvailable.length);
    var chosenWord = wordsAvailable[indexToChoose];
    wordsAvailable.splice(indexToChoose, 1);
}

// Add click event handler for the start button
startButtonEl.addEventListener("click", function(event) {
    console.log("clicked");
    console.log(timerEl);
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            losses++;
            alert("You lost!");
        }
    }, 1000);
});