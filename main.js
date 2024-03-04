function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const max = 3;
    return choices[Math.floor(Math.random()* max)];
}

function playRound(playerSelection, computerSelection, msg) {
    let result;
    if (playerSelection == computerSelection) {
        console.log(`Both have ${playerSelection} It is a tie.`);
        msg.textContent = `Both have ${playerSelection}. It is a tie `;
        result = 0;
    } else if (computerSelection == 'rock') {
        if (playerSelection == 'scissors') {
            console.log(`Computer: ${computerSelection}, Player: ${playerSelection}. Computer wins`);
            msg.textContent = 'Rock beats scissors. Computer wins.';
            result = 1;
        } else {
            console.log(`Computer: ${computerSelection}, Player: ${playerSelection}. Player wins`);
            msg.textContent = 'Paper Wraps rock. You win.';
            result = 2;
        }
    } else if (computerSelection == 'scissors') {
        if (playerSelection == 'paper') {
            console.log(`Computer: ${computerSelection}, Player: ${playerSelection}. Computer wins`);
            msg.textContent = 'Scissors cuts paper. Computer wins.';
            result = 1;
        } else {
            console.log(`Computer: ${computerSelection}, Player: ${playerSelection}. Player wins`);
            msg.textContent = 'Rock beats scissors. You win.';
            result = 2;
        }
    } else if (computerSelection == 'paper') {
        if (playerSelection == 'rock') {
            console.log(`Computer: ${computerSelection}, Player: ${playerSelection}. Computer wins`);
            msg.textContent = 'Paper wraps Rock. Computer wins.';
            result = 1;
        } else {
            console.log(`Computer: ${computerSelection}, Player: ${playerSelection}. Player wins`);
            msg.textContent = 'Scissors cuts paper. You win.';
            result = 2;
        }
    }
    return result;
}

function addScore(score) {
    if (score == 1) {
        computerScore++;
    } else if (score == 2) {
        playerScore++;
    }
}
   
function displayScore(msg) {
    msg.textContent = "";
    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore == computerScore) {
            msg.textContent = `Your Total Score: ${playerScore}. Computer Total Score: ${computerScore}. It is a tie.` ;
        } else if (playerScore > computerScore) {    
            msg.textContent = `Your Total Score: ${playerScore}. Computer Total Score: ${computerScore}. You win.` ;
        } else {
            msg.textContent =`Your Total Score: ${playerScore}. Computer Total Score: ${computerScore}. Computer wins.`;
        }
        computerScore = 0;
        playerScore = 0;
    }
}


const btns = document.querySelectorAll('.button');
const msg = document.querySelector('.msg');
const announcement = document.querySelector('.announcement');
let computerScore = 0;
let playerScore = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        announcement.textContent = "";
        msg.textContent = "";
        let computerSelection = getComputerChoice();
        let score = playRound(e.target.id, computerSelection, msg);
        addScore(score);
        displayScore(announcement);
    })
})