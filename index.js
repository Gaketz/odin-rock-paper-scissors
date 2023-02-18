console.log("Hi!");

const choices = ["rock", "paper", "scissors"];
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const divOutcome = document.querySelector('.outcome')
const currentResult = document.querySelector('.currentResult')
const buttons = document.querySelectorAll('button')

let scorePlayer = 0;
let scoreComputer = 0;


function getComputerChoice(){
    const choice = choices[Math.floor((Math.random() * choices.length))];
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        playerSelection == "paper" && computerSelection == "rock") {
        return "Player";
    } else {
        return "Computer";
    }

}
function playRound(playerSelection, computerSelection){
    const p = document.createElement('p');
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        p.textContent = `It's a Tie!`;
        divOutcome.appendChild(p);
    } else if(result == "Player"){
        p.textContent = `You Win! ${playerSelection} beats ${computerSelection} `;
        divOutcome.appendChild(p);
        scorePlayer++;
    } else {
        p.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        divOutcome.appendChild(p);
        scoreComputer++;
    }
}

const score = (scorePlayer, scoreComputer) => {
    currentResult.textContent = `Player:${scorePlayer} Computer:${scoreComputer}`;
}

function Winner(scorePlayer, scoreComputer) {
    const h2 = document.createElement('h2');
    if(scorePlayer === 5) {
        h2.textContent = `You Have Won! Player:${scorePlayer} Computer:${scoreComputer}`;
        divOutcome.appendChild(h2);
    } else if(scoreComputer === 5) {
        h2.textContent = `You Have Lost! Player:${scorePlayer} Computer:${scoreComputer}`;
        divOutcome.appendChild(h2);
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = `${button.className}`;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        score(scorePlayer, scoreComputer);
        Winner(scorePlayer, scoreComputer);
})});

/*
function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for(let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoices();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("***********");
        if(checkWinner(playerSelection,computerSelection) == "Player") {
            scorePlayer++;
        } else if (playerSelection, computerSelection == "Computer") {
            scoreComputer++;
        }
        else{
            console.log("We have a tie!");
        }

}
console.log("Game Over")
}


*/