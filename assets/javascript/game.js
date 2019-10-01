// all possible words to be guessed
var listOfWords = ["halloween", "ghost", "vampire", "werewolf", "monster", "haunted", "poltergeist", "demon", "possession", "skeleton"];

// wordToBeGuessed and playerGuess need declaring outside of their functions
var wordToBeGuessed;
var playerGuess;

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

// prevents player from guessing the same letter twice
function letterGuessedMoreThanOnce() {
    alert("You've already guessed that letter!");
}
  
// prevents any non-alphabetical key from being counted as a guess
function inputIsNotALetter() {
    alert("Please choose a valid letter.");
}

// pushes valid player guesses to lettersAlreadyGuessed and decreases numberOfGuessesLeft by 1
function letterTrack() {
    lettersAlreadyGuessed.push(" " + playerGuess);
    numberOfGuessesLeft -= 1;
}

getStats();

