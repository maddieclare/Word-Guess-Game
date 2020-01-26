function blinkText() {
  $(".flashing-text").hide();
  setTimeout(function() {
    $(".flashing-text").show();
  }, 500);
}

function showStartScreen() {
  $("#game").hide();
  $("#results").hide();
  $("#press-start").show();
  awaitUserStart();
}

function showGameScreen() {
  $("#press-start").hide();
  $("#results").hide();
  $("#game").show();
  $("#placeholder-guess").show();
}

function showResultsScreen(result) {
  $("#game").hide();
  $("#results").show();
  $("#win-or-lose").html(`You ${result}!`);
}

function showEndGameScreen() {
  console.log("Thanks for playing!");
}

// displays number of underscores corresponding with length of wordToBeGuessed
function hideWord() {
  for (var i = 0; i < wordToBeGuessed.length; i++) {
    hiddenWord.push("_");
  }
}

// reveals correctly guessed letter
function showHiddenLetter(playerGuess) {
  // where the number contained in variable (i) is less than the length of the word to bo guessed, (i) increases by 1 each loop
  for (var i = 0; i < wordToBeGuessed.length; i++) {
    // for each loop, if the character located at (i) in wordToBeGuessed is equal to the playerGuess...
    if (wordToBeGuessed.charAt(i) == playerGuess) {
      // ...the equivalent index in the hidden word array changes to match the letter guessed by the player
      hiddenWord[i] = playerGuess;
    }
  }
}

// for variable logging in HTML
function getStats() {
  $("#wins").html(`Wins: ${playerWins}`);
  $("#losses").html(`Losses: ${playerLosses}`);
  $("#current-word").html(
    `Current word: </br></br> ${hiddenWord.join(" ")}</br>`
  );
  $("#guess-countdown").html(
    `Number of guesses remaining:</br></br>${numberOfGuessesLeft} </br></br>`
  );
  $("#placeholder-guess").hide();
  $("#already-guessed").html(
    `Your guesses so far:</br></br>${lettersAlreadyGuessed}`
  );
}
