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
 * @param {string} playerPlay - The player's play.
 * @param {string} computerPlay - The computer's play.
 */
function playRound(playerPlay, computerPlay) {
    let player = playerPlay;
    let computer = computerPlay;
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
            result = "tie";
            return result;
        }
    } else if (player === "paper") {
        if (computer === "rock") {
            result = "win";
            return result;
        } else if (computer === "scissors") {
            result = "loss";
            return result;
        } else {
            result = "tie";
            return result;
        }
    } else if (player === "scissors") {
        if (computer === "rock") {
            result = "loss";
            return result;
        } else if (computer === "paper") {
            result = "win";
            return result;
        } else {
            result = "tie";
            return result;
        }
    }
}

function playGame() {
    let result =  0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
        if (round) {
            result += 1;
            console.log("You win this round!");
        } else {
            console.log("No dice");
        }
    }

    if (result >= 3) {
        console.log("You won the game!");
    } else {
        console.log("You lose");
    }
}

console.log(playGame());
/*
const playerSelection = playerPlay();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
*/