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
        return 'tie';
    }
    else if ((computerChoice === 'ROCK' && playerChoice == 'SCISSORS') || 
        (computerChoice === 'PAPER' && playerChoice == 'ROCK') || 
        (computerChoice === 'SCISSORS' && playerChoice == 'PAPER')) {
            computerScore++;
            return 'computer';
    }
    else {
        playerScore++;
        return 'player';
    }
}

function gameEnd() {
    if (computerScore === 5) {
        roundResult.textContent = 'Computer Wins! Better luck next time...';
    } else {
        roundResult.textContent = 'Wow! You really defeated the computer!';
    }
}

function updateChoices(computerChoice, playerChoice) {
    switch (computerChoice) {
        case 'ROCK':
          playerC.textContent = '✊'
          break
        case 'PAPER':
          playerC.textContent = '✋'
          break
        case 'SCISSORS':
          playerC.textContent = '✌'
          break
      }
      switch (playerChoice) {
        case 'ROCK':
          computerC.textContent = '✊'
          break
        case 'PAPER':
          computerC.textContent = '✋'
          break
        case 'SCISSORS':
          computerC.textContent = '✌'
          break
      }
}

function updateScores() {
    computerS.textContent = `Computer: ${computerScore}`;
    playerS.textContent = `Player: ${playerScore}`;
}

function updateRoundMessage(result, playerChoice, computerChoice) {
    if (result === 'player') {
        roundResult.textContent = `Player's ${playerChoice.toLowerCase()} beats Computer's ${computerChoice.toLowerCase()}`;
    } else if (result === 'computer') {
        roundResult.textContent = `Computer's ${computerChoice.toLowerCase()} beats Player's ${playerChoice.toLowerCase()}`;
    } else {
        roundResult.textContent = `Tie! Both players played ${computerChoice.toLowerCase()}`;
    }
}

function playGame(playerChoice) {
    if ((computerScore > 4) || (playerScore > 4)) {
        return;
    }
    const computerChoice = getComputerChoice();
    const winner = playRound(computerChoice, playerChoice);
    updateChoices(computerChoice, playerChoice);
    updateScores();
    updateRoundMessage(winner, playerChoice, computerChoice);
    
    if ((computerScore > 4) || (playerScore > 4)) {
        gameEnd();
    }
}

rockButton.addEventListener('click', () => playGame('ROCK'));
paperButton.addEventListener('click', () => playGame('PAPER'));
scissorsButton.addEventListener('click', () => playGame('SCISSORS'));