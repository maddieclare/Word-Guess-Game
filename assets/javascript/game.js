// VARIABLES
// randomly selected word for guessing
let wordToBeGuessed;

// for displaying guessed/hidden letters in html
let hiddenWord = [];

// array tracking letters player has previously guessed
let lettersAlreadyGuessed = [];

// variable tracking number of player guesses remaining
let numberOfGuessesLeft = 12;

// win/loss tracking
let latestResult;
let playerWins = 0;
let playerLosses = 0;

// LOGIC
$(document).ready(function() {
  setInterval(blinkText, 1000);
  initialiseGame();
});

// FUNCTIONS
function initialiseGame() {
  $(document).off();
  showStartScreen();
  randomWordSelection();
  getStats();
}

function awaitUserStart() {
  $(document).keyup(function() {
    showGameScreen();
    $(document).off();
    awaitUserGuess();
  });
}

function randomWordSelection() {
  wordToBeGuessed = listOfWords[Math.floor(Math.random() * listOfWords.length)];
  hideWord();
}

function awaitUserGuess() {
  $(document).keyup(function(selection) {
    let playerGuess = selection.key.toLowerCase();
    determineRoundOutcome(playerGuess);
  });
}

function determineRoundOutcome(playerGuess) {
  if (alphabet.indexOf(playerGuess) == -1) {
    inputIsNotALetter();
  } else if (lettersAlreadyGuessed.indexOf(playerGuess) !== -1) {
    letterGuessedMoreThanOnce();
  } else if (wordToBeGuessed.indexOf(playerGuess) !== -1) {
    showHiddenLetter(playerGuess);
    trackLettersGuessed(playerGuess);
  } else {
    trackLettersGuessed(playerGuess);
    decreaseNumberOfGuesses();
  }

  if (numberOfGuessesLeft == 0) {
    playerLoss();
    resetStats();
  } else if (hiddenWord.indexOf("_") == -1) {
    playerWin();
    resetStats();
  }

  getStats();
}

function trackLettersGuessed(playerGuess) {
  lettersAlreadyGuessed.push(playerGuess);
}

function decreaseNumberOfGuesses(playerGuess) {
  numberOfGuessesLeft--;
}

function letterGuessedMoreThanOnce() {
  alert("You've already guessed that letter!");
}

function inputIsNotALetter() {
  alert("Please choose a valid letter.");
}

function playerLoss() {
  $(document).off();
  playerLosses += 1;
  latestResult = "lose";
  showResultsScreen(latestResult);
  awaitRestartInput();
}

function playerWin() {
  $(document).off();
  playerWins += 1;
  latestResult = "win";
  showResultsScreen(latestResult);
  awaitRestartInput();
}

function awaitRestartInput() {
  $(document).keyup(function(selection) {
    let playAgain = selection.originalEvent.key.toUpperCase();
    if (playAgain == "Y") {
      initialiseGame();
    } else if (playAgain == "N") {
      showEndGameScreen();
    }
  });
}

function resetStats() {
  numberOfGuessesLeft = 12;
  lettersAlreadyGuessed = [];
  hiddenWord = [];
}
