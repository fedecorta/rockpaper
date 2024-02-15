function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Marh.random()*choices.length);
    return choices[randomIndex];
}