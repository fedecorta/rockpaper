let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let div = document.querySelector("#results");

let playerScore =0;
let computerScore =0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

function playSingleRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        let tie = document.createElement("p");
        tie.textContent= "It is a tie!";
        div.appendChild(tie);
        return "tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        let win = document.createElement("p");
        win.textContent= `You win because ${playerSelection} beats ${computerSelection}`;
        div.appendChild(win);
        return "win";
    } else {
        let loose = document.createElement("p");
        loose.textContent = `You loose because ${computerSelection} beats ${playerSelection}`;
        div.appendChild(loose)
        return "loose";
    }
}

function checkForWinner() {
    if (playerScore === 5){
        let playerWins = document.createElement("p");
        playerWins.textContent = `Player wins overall! Player points: ${playerScore} vs Computer Points: ${computerScore}`;
        div.appendChild(playerWins);
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    } else if (computerScore === 5){
        let computerWins = document.createElement("p");
        computerWins.textContent = `Computer wins overall! Player points: ${playerScore} vs Computer Points: ${computerScore}`;
        div.appendChild(computerWins);
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    } 
};

function handleRound(playerChoice) {
    let result = playSingleRound(playerChoice, getComputerChoice())
    if (result === "win") {
        playerScore++;
    } else if (result === "loose") {
        computerScore++;
    }
    checkForWinner();
};

function playGame() {
    rock.addEventListener("click", () => {handleRound("rock")});
    paper.addEventListener("click", () => {handleRound("paper")});
    scissors.addEventListener("click", () => {handleRound("scissors")});
};

playGame();