let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    switch (x) {
        case 0: 
            return "ROCK";
        case 1:
            return "SCISSORS";
        case 2: 
            return "PAPER";
        default:
            return "error";
    }
}

function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        return;
    }
    else if ((computerChoice === "ROCK" && playerChoice == "SCISSORS") || 
        (computerChoice === "PAPER" && playerChoice == "ROCK") || 
        (computerChoice === "SCISSORS" && playerChoice == "PAPER")) {
            computerScore++;
            return;
    }
    else playerScore++;
}

function game() {
    for(let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("Rock, Paper, or Scissors?");
        playerChoice = playerChoice.toUpperCase();
        playRound(computerChoice, playerChoice);
        console.log(computerChoice);
        console.log(playerChoice);
        console.log(playerScore);
    }
    if (computerScore === playerScore) {
        return "tie";
    }
    if (computerScore > playerScore) {
        return "lose";
    }
    if (computerScore < playerScore) {
        return "win";
    }
}

console.log(game());