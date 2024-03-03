function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const max = 3;
    return choices[Math.floor(Math.random()* max)];
}

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection == computerSelection) {
        console.log(`Both have ${playerSelection} It is a tie.`);
        alert(`Both have ${playerSelection}. It is a tie `);
        result = 0;
    } else if (computerSelection == 'rock') {
        if (playerSelection == 'scissors') {
            console.log(`Computer: ${computerSelection}, Player: ${playerSelection}. Computer wins`);
            alert('Rock beats scissors. computer wins.')
            result = 1;
        } else {
            console.log(`Computer: ${computerSelection}, Player: ${playerSelection}. Player wins`);
            alert('Paper Wraps rock. You win.')
            result = 2;
        }
    } else if (computerSelection == 'scissors') {
        if (playerSelection == 'paper') {
            console.log(`Computer: ${computerSelection}, Player: ${playerSelection}. Computer wins`);
            alert('Scissors cuts paper. computer wins.')
            result = 1;
        } else {
            console.log(`Computer: ${computerSelection}, Player: ${playerSelection}. Player wins`);
            alert('Rock beats scissors. You win.')
            result = 2;
        }
    } else if (computerSelection == 'paper') {
        if (playerSelection == 'rock') {
            console.log(`Computer: ${computerSelection}, Player: ${playerSelection}. Computer wins`);
            alert('Paper wraps Rock. computer wins.')
            result = 1;
        } else {
            console.log(`Computer: ${computerSelection}, Player: ${playerSelection}. Player wins`);
            alert('Scissors cuts paper. You win.')
            result = 2;
        }
    }
    return result;
}
  

function playGame() {
    let playerSelection;
    let computerScore = 0;
    let playerScore = 0;
    let score, message;

    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        playerSelection = prompt("Your Choice(rock, paper, or scissors)");
        if (playerSelection == null) {
            console.log("Bye!");
            break;
        }
        score = playRound(playerSelection.toLowerCase(), computerSelection);
        if (score == 1) {
            computerScore++;
        } else if (score == 2) {
            playerScore++;
        }
    }

    if (playerScore == computerScore) {
        message = `Your Total Score: ${playerScore}. Computer Total Score: ${computerScore}. It is a tie.` ;
    } else if (playerScore > computerScore) {    
        message = `Your Total Score: ${playerScore}. Computer Total Score: ${computerScore}. You win.` ;
    } else {
        message =`Your Total Score: ${playerScore}. Computer Total Score: ${computerScore}. Computer wins.`;
    }
    alert(message);
}


playGame();







