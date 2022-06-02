/**
 * Generates the play from the computer.
 * Generates a random number (0, 1, 2) and returns the respective play.
 * 0 = Rock
 * 1 = Paper
 * 2 = Scissors
 * @returns 
 */
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    let play;
    if (randomNumber === 0) {
        play = "rock";
    } else if (randomNumber === 1) {
        play = "paper";
    } else {
        play = "scissors";
    }
    return play;
}

/**
 * Receives the play from the user,
 * converts it into Lower Case and
 * returns the play.
 * @returns 
 */
function playerPlay() {
    let play = prompt("Select either Rock, Paper or Scissors: ");
    play = play.toLowerCase();
    return play;
}

/**
 * Receives the plays from the player and the computer.
 * Plays the round of Rock, Paper, Scissors.
 * If the round results in a tie, displays the result and
 * calls itself until either a Win or a Loss is obtained.
 * @returns
 */
function playRound() {
    let player = playerPlay();
    let computer = computerPlay();
    let result;

    if (player === "rock") {
        if (computer === "paper") {
            result = "loss";
            return result;
        }
        else if (computer === "scissors") {
            result = "win";
            return result;
        } else {
            console.log("It's a tie!");
            return playRound();
        }
    } else if (player === "paper") {
        if (computer === "rock") {
            result = "win";
            return result;
        } else if (computer === "scissors") {
            result = "loss";
            return result;
        } else {
            console.log("It's a tie!");
            return playRound();
        }
    } else if (player === "scissors") {
        if (computer === "rock") {
            result = "loss";
            return result;
        } else if (computer === "paper") {
            result = "win";
            return result;
        } else {
            console.log("It's a tie!");
            return playRound();
        }
    }
}

/**
 * Plays 5 rounds of Rock, Paper, Scissors.
 * A round is defined as the player obtaining either a Win or a Loss.
 * If the result is a tie, the round is played again without being 
 * counted in the 5 rounds counter.
 */
function playGame() {
    let playerWins =  0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        let round = playRound();
        if (round === "win") {
            playerWins += 1;
            console.log("You win this round!");
        } else if (round === "loss") {
            computerWins += 1;
            console.log("You lose this round.");
        }
    }

    if (playerWins > computerWins) {
        console.log("You win the game!");
    } else if (computerWins > playerWins) {
        console.log("You lose the game!");
    }
}

console.log(playGame());