let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    switch (x) {
        case 0: 
            return 'ROCK';
        case 1:
            return 'SCISSORS';
        case 2: 
            return 'PAPER';
        default:
            return 'error';
    }
}

function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        console.log("tie");
    }
    else if ((computerChoice === 'ROCK' && playerChoice == 'SCISSORS') || 
        (computerChoice === 'PAPER' && playerChoice == 'ROCK') || 
        (computerChoice === 'SCISSORS' && playerChoice == 'PAPER')) {
            computerScore++;
    }
    else {
        playerScore++;
    }
}

function gameEnd() {
    if (computerScore === 5) {
        console.log('computer win');
    } else {
        console.log('player win');
    }
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    playRound(computerChoice, playerChoice);
    
    if ((computerScore > 4) || (playerScore > 4)) {
        gameEnd();
    }
}

rockButton.addEventListener('click', () => playGame('ROCK'));
paperButton.addEventListener('click', () => playGame('PAPER'));
scissorsButton.addEventListener('click', () => playGame('SCISSORS'));