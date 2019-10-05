// letters of the alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// all possible words to be guessed
var listOfWords = [
  "halloween",
  "vampire",
  "werewolf",
  "omen",
  "haunted",
  "graveyard",
  "superstition",
  "occult",
  "skull",
  "tomb",
  "supernatural",
  "phantom",
  "poltergeist",
  "broomstick",
  "crypt",
  "nightmare",
  "cobwebs",
  "demonic",
  "skeleton",
  "zombie",
  "spectre",
  "midnight",
  "apparition",
  "cemetery",
  "cauldron"
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

// displays number of underscores corresponding with length of wordToBeGuessed
function hideWord() {
  for (var i = 0; i < wordToBeGuessed.length; i++) {
    hiddenWord.push("_");
    console.log(hiddenWord);
  }
}

// selects item at random from listOfWords
function randomWordSelection() {
  wordToBeGuessed = listOfWords[Math.floor(Math.random() * listOfWords.length)];
  console.log(wordToBeGuessed);
}

// reveals correctly guessed letter
function showHiddenLetter() {
  // where the number contained in variable (i) is less than the length of the word to bo guessed, (i) increases by 1 each loop
  for (var i = 0; i < wordToBeGuessed.length; i++) {
    // for each loop, if the character located at (i) in wordToBeGuessed is equal to the playerGuess...
    if (wordToBeGuessed.charAt(i) == playerGuess) {
      // ...the equivalent index in the hidden word array changes to match the letter guessed by the player
      hiddenWord[i] = playerGuess;
      console.log(hiddenWord);
    }
  }
}

// prevents player from guessing the same letter twice
function letterGuessedMoreThanOnce() {
  alert("You've already guessed that letter!");
  console.log(numberOfGuessesLeft);
}

// prevents any non-alphabetical key from being counted as a guess
function inputIsNotALetter() {
  alert("Please choose a valid letter.");
  console.log(numberOfGuessesLeft);
}

// pushes valid player guesses to lettersAlreadyGuessed
function trackLettersGuessed() {
  lettersAlreadyGuessed.push(playerGuess);
  console.log(lettersAlreadyGuessed);
}

// decreases numberOfGuessesLeft by 1
function decreaseNumberOfGuesses() {
  numberOfGuessesLeft--;
}

// player lose condition
function playerLoss() {
  alert("You lose :(");
  playerLosses += 1;
  console.log(playerLosses);
}

// player win condition
function playerWin() {
  alert("You win!");
  playerWins += 1;
  console.log(playerWins);
}

// resets hiddenWord
function reset() {
  numberOfGuessesLeft = 12;
  lettersAlreadyGuessed = [];
  hiddenWord = [];
}

// for variable logging in HTML
function getStats() {
  document.getElementById("playerWins").innerHTML = "Wins: " + playerWins;
  document.getElementById("playerLosses").innerHTML = "Losses: " + playerLosses;
  document.getElementById("wordToBeGuessed").innerHTML =
    "Current word: </br></br>" + hiddenWord.join(" ");
  document.getElementById("numberOfGuessesLeft").innerHTML =
    "Number of guesses remaining: </br>" + numberOfGuessesLeft;
  document.getElementById("lettersAlreadyGuessed").innerHTML =
    "Your guesses so far: </br>" + lettersAlreadyGuessed;
}

randomWordSelection();

hideWord();

getStats();

document.onkeyup = function(selection) {
  playerGuess = selection.key.toLowerCase();

  if (alphabet.indexOf(playerGuess) == -1) {
    inputIsNotALetter();
  } else if (lettersAlreadyGuessed.indexOf(playerGuess) !== -1) {
    letterGuessedMoreThanOnce();
  } else if (wordToBeGuessed.indexOf(playerGuess) !== -1) {
    showHiddenLetter();
    trackLettersGuessed();
  } else {
    trackLettersGuessed();
    decreaseNumberOfGuesses();
  }

  if (numberOfGuessesLeft == 0) {
    playerLoss();
    reset();
    randomWordSelection();
    hideWord();
  } else if (hiddenWord.indexOf("_") == -1) {
    playerWin();
    reset();
    randomWordSelection();
    hideWord();
  }

  getStats();
};
