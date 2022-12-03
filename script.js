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

function playerSelection(selection) {
    const choice = selection
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice
    }   else {
        return false
    }
}

function computerSelection() {
    return getComputerChoice()
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection
    const computer = computerSelection
    let message
    if (player) {
        if (player == "rock" && computer == "scissors") {
            return message = "You win! Rock beats scissors."
        } else if (player == "rock" && computer == "paper") {
            return message = "You lose! Paper beats rock."
        } else if (player == "paper" && computer == "rock") {
            return message = "You win! Paper beats rock."
        } else if (player == "paper" && computer == "scissors") {
            return message = "You lose! Scissors beat paper."
        } else if (player == "scissors" && computer == "paper") {
            return message = "You win! Scissors beat paper."
        } else if (player == "scissors" && computer == "rock") {
            return message = "You lose! Rock beats scissors."
        } else {
            return message = "It's a tie! Go again."
        }
    } else {
        console.log("Your choice is invalid.")
        return false
    }
  }

function game() {
    let scorePlayer = 0
    let scoreComputer = 0
    let message
    for (let i = 0; i < 5; i++) {
        message = playRound(playerSelection(), computerSelection())
        if (message) {
            if (message.includes("You win")) {
                scorePlayer += 1
                console.log(message)
            } else if (message.includes("You lose")) {
                scoreComputer += 1
                console.log(message)
            }
            else if (message.includes("tie")) {
                i--
                console.log(message)
            }
        } else {
            i--
        }
    }
    if (scorePlayer > scoreComputer) { 
        console.log(`Your final score is ${scorePlayer}. Computer's final score is ${scoreComputer}. You win!`)
    } else {
        console.log(`Your final score is ${scorePlayer}. Computer's final score is ${scoreComputer}. You lose!`)
    }
}

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => button.addEventListener('click', (e) => console.log(playRound(playerSelection(e.target.id), getComputerChoice()))))

