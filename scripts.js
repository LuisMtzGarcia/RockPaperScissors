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

    if ((play !== "rock") && (play !== "paper") && (play !== "scissors")) {
        alert("Invalid input! Input either Rock, Paper or Scissors.")
        play = playerPlay();
    }

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

    if (player === computer) {
        console.log("It's a tie!");
        return playRound();
    }

    return checkResult(player, computer);
}

/**
 * Receives the player's and computer's plays and checks the result.
 * Gives a numerical value to the play, that is received in a string.
 * If the play is 3(rock) against 1(paper), a 3 is added to the 1(paper)
 * so that paper beats rock.
 * @param {string} player 
 * @param {string} computer 
 * @returns 
 */
function checkResult(player, computer) {
    if (player === "rock") {
        player = 3;
    } else if (player === "scissors") {
        player = 2;
    } else {
        player = 1;
    }

    if (computer === "rock") {
        computer = 3;
    } else if (computer === "scissors") {
        computer = 2;
    } else {
        computer = 1;
    }

    if ((player === 3 && computer === 1) || (player === 1 && computer === 3)) {
        if (computer === 1) {
            computer += 3;
        } else if (player === 1) {
            player += 3;
        }
    }

    if (player > computer) {
        return "win";
    } else {
        return "loss";
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