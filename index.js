console.log("Hi!");

const choices = ["rock", "paper", "scissors"];

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

function getPlayerChoices(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLocaleLowerCase();
        if(choices.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It's a Tie"
    } else if(result == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }

}

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

game();