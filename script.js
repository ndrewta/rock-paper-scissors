function getComputerChoice() {
    let choice
    randomChoice = Math.floor(Math.random() * 3)
    if (randomChoice == 0) {
        return choice = "Scissors"
    } else if (randomChoice == 1) {
        return choice = "Paper"
    } else {
        return choice = "Rock"
    }
}

function playerSelection() {
    const input = prompt("Rock, paper or scissors?", "")
    const choice = input.toLowerCase()
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice
    }   else {
        return false
    }
}