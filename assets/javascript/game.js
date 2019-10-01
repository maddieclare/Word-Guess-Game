// letters of the alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// all possible words to be guessed
var listOfWords = [
  "halloween",
  "ghost",
  "vampire",
  "werewolf",
  "monster",
  "haunted",
  "poltergeist",
  "demon",
  "possession",
  "skeleton"
];

// these variables need declaring outside of their functions
var wordToBeGuessed;
var playerGuess;
var hiddenWord = [];

// array tracking letters player has previously guessed
var lettersAlreadyGuessed = [];

// variable tracking number of player guesses remaining
var numberOfGuessesLeft = 12;

// variable tracking player wins
var playerWins = 0;

// variable tracking player losses
var playerLosses = 0;

// for variable logging in HTML
function getStats() {
  document.getElementById("playerWins").innerHTML = "Wins: " + playerWins;
  document.getElementById("playerLosses").innerHTML = "Losses: " + playerLosses;
  document.getElementById("wordToBeGuessed").innerHTML = "Current word: " + hiddenWord;
  document.getElementById("numberOfGuessesLeft").innerHTML =
    "Number of guesses remaining: " + numberOfGuessesLeft;
  document.getElementById("lettersAlreadyGuessed").innerHTML =
    "Your guesses so far: " + lettersAlreadyGuessed;
}

// selects item at random from listOfWords
function randomWordSelection() {
  wordToBeGuessed = listOfWords[Math.floor(Math.random() * listOfWords.length)];
  console.log(wordToBeGuessed);
}

// displays number of underscores corresponding with length of wordToBeGuessed
function hideWord() {
    for (var i = 0; i < wordToBeGuessed.length; i++) {
        hiddenWord.push("_");
        console.log(hiddenWord);
    }
}

// reveals correctly guessed letter
function  showHiddenLetter() {
    for (var i = 0; i < wordToBeGuessed.length; i++) {
        if (wordToBeGuessed.charAt(i) == playerGuess) {
            hiddenWord[i] = playerGuess;
        }
    }
}

// prevents player from guessing the same letter twice
function letterGuessedMoreThanOnce() {
  alert("You've already guessed that letter!");
}

// prevents any non-alphabetical key from being counted as a guess
function inputIsNotALetter() {
  alert("Please choose a valid letter.");
}

// pushes valid player guesses to lettersAlreadyGuessed and decreases numberOfGuessesLeft by 1
function trackLettersGuessed() {
  lettersAlreadyGuessed.push(" " + playerGuess);
  numberOfGuessesLeft -= 1;
}

// player lose condition
function playerLoss() {
  alert("You lose :(");
  playerLosses += 1;
  lettersAlreadyGuessed = [];
  numberOfGuessesLeft = 9;
}

// player win condition
function playerWin() {
  alert("You win!");
  playerWins += 1;
  lettersAlreadyGuessed = [];
  numberOfGuessesLeft = 9;
}

randomWordSelection();

hideWord();

getStats();

// player can guess any letter of the alphabet by pressing the corresponding key
document.onkeyup = function(selection) {
  // key press adds letter to variable
  playerGuess = selection.key.toLowerCase();

    if (alphabet.indexOf(playerGuess) == -1) {
    inputIsNotALetter();
  } else if (lettersAlreadyGuessed.indexOf(playerGuess) !== -1) {
    letterGuessedMoreThanOnce();
  } else if (wordToBeGuessed.indexOf(playerGuess) !== -1) {
    showHiddenLetter();
  } else if (numberOfGuessesLeft == 1) {
    playerLoss();
    randomWordSelection();
  } else {
    trackLettersGuessed();
  }

  getStats();
};
