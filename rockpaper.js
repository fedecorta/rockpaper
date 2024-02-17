function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

function getPlayerChoice(){
    const choices = ["rock", "paper", "scissors"];
    let userChoice = prompt("Pick rock, paper or scissors:", "").toLowerCase();
    
    while (!choices.includes(userChoice)) {
        userChoice = prompt("Pick rock, paper or scissors:", "").toLowerCase();
    }

    return userChoice;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playSingleRound(playerSelection=getPlayerChoice(), computerSelection=getComputerChoice()){

    if (playerSelection === computerSelection) {
        return "It is a tie, you both chose the same thing!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}.`;
    } else {
        return `You loose! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}.`;
    }
}

function playGame() {
    let playerScore =0;
    let computerScore =0;
    
    for (let i=0; i<5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        const result = playSingleRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("loose")) {
            computerScore++;
        } 

        console.log(`Player score: ${playerScore} - Computer score: ${computerScore}`);
    }

    if (playerScore>computerScore){
        console.log(`Player wins overall! Player points: ${playerScore} vs Computer Points: ${computerScore}`);
    } else if (playerScore<computerScore){
        console.log(`Computer wins overall! Player points: ${playerScore} vs Computer Points: ${computerScore}`);
    } else {
        console.log(`It is a tie overall! Player points: ${playerScore} vs Computer Points: ${computerScore}`);
    }

}

playGame()