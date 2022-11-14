function getComputerChoice() {
    let choice
    randomChoice = Math.floor(Math.random() * 3)
    if (randomChoice == 0) {
        return choice = "scissors"
    } else if (randomChoice == 1) {
        return choice = "paper"
    } else {
        return choice = "rock"
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

function computerSelection() {
    return getComputerChoice()
}

function playRound() {
    const player = playerSelection()
    const computer = computerSelection()
    if (player) {
        if (player == "rock" && computer == "scissors") {
            console.log("You win! Rock beats scissors.")
        } else if (player == "rock" && computer == "paper") {
            console.log("You lose! Paper beats rock.")
        } else if (player == "paper" && computer == "rock") {
            console.log("You win! Paper beats rock.")
        } else if (player == "paper" && computer == "scissors") {
            console.log("You lose! Scissors beat paper.")
        } else if (player == "scissors" && computer == "paper") {
            console.log("You win! Scissors beat paper.")
        } else if (player == "scissors" && computer == "rock") {
            console.log("You lose! Rock beats scissors.")
        } else {
            console.log("It's a tie!")
        }
    } else {
        console.log("Your choice is invalid.")
    }
  }