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

function playRound(playerSelection, computerSelection) {
    const player = playerSelection
    const computer = computerSelection
    let message
    if (player) {
        if (player == "rock" && computer == "scissors") {
            message = "You win! Rock beats scissors."
        } else if (player == "rock" && computer == "paper") {
            message = "You lose! Paper beats rock."
        } else if (player == "paper" && computer == "rock") {
            message = "You win! Paper beats rock."
        } else if (player == "paper" && computer == "scissors") {
            message = "You lose! Scissors beat paper."
        } else if (player == "scissors" && computer == "paper") {
            message = "You win! Scissors beat paper."
        } else if (player == "scissors" && computer == "rock") {
            message = "You lose! Rock beats scissors."
        } else {
            message = "It's a tie! Go again."
        } checkScore(message)
    } else {
        message = ("Your choice is invalid.")
        checkScore(message)
    }
  }

function checkScore(message) {
    if (message) {
        if (message.includes("You win")) {
            scorePlayer += 1
            playerTrackScore.textContent = `Player: ${scorePlayer}`
            result.textContent = message
        } else if (message.includes("You lose")) {
            scoreComputer += 1
            computerTrackScore.textContent = `Computer: ${scoreComputer}`
            result.textContent = message
            
        }
        else if (message.includes("tie")) {
            result.textContent = message
        }
    };
    if (scorePlayer == 5 || scoreComputer == 5) {
        if (scorePlayer > scoreComputer) { 
            result.textContent = (`Your final score is ${scorePlayer}. Computer's final score is ${scoreComputer}. You win!`)
            disableButtons()
        } else {
            result.textContent = (`Your final score is ${scorePlayer}. Computer's final score is ${scoreComputer}. You lose!`)
            disableButtons()
        }
    }
}

function setUp() {
    enableButtons()
    scorePlayer = 0
    scoreComputer = 0
    result.textContent = "Rock, paper or scissors?"
    playerTrackScore.textContent = `Player: ${scorePlayer}`
    computerTrackScore.textContent = `Computer: ${scoreComputer}`

}


function enableButtons() {
    btnNode.replaceChildren(btnRock, btnPaper, btnScissors)
    const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => button.addEventListener('click', buttonFunctions))

}

function disableButtons() {
    const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => button.removeEventListener('click', buttonFunctions))
    const btnNode = document.querySelector('.buttons')
    btnNode.replaceChildren(resetBtn)
    resetBtn.addEventListener('click', setUp)

}

let scorePlayer = 0
let scoreComputer = 0
const buttonFunctions = (e) => playRound(e.target.id, getComputerChoice())

containerNode = document.querySelector('#container')

const result = document.createElement('div')
result.setAttribute('style', 'color: black; font-size: 40px')
result.setAttribute('id', 'result')
result.textContent = "Rock, paper or scissors?"
containerNode.appendChild(result)

const trackScore = document.createElement('div')
trackScore.setAttribute('id', 'trackScore')
containerNode.appendChild(trackScore)
const playerTrackScore = document.createElement('p')
playerTrackScore.textContent = `Player: ${scorePlayer}`
trackScore.appendChild(playerTrackScore)
const computerTrackScore = document.createElement('p')
computerTrackScore.textContent = `Computer: ${scoreComputer}`
trackScore.appendChild(computerTrackScore)

const btnNode = document.createElement('div')
btnNode.setAttribute('class', 'buttons')
containerNode.appendChild(btnNode)

const resetBtn = document.createElement('button')
resetBtn.setAttribute('id', 'reset')
resetBtn.textContent = "Restart Game"

const btnRock = document.createElement('button')
btnRock.setAttribute('id', 'rock')
btnRock.textContent = 'Rock'

const btnPaper = document.createElement('button')
btnPaper.setAttribute('id', 'paper')
btnPaper.textContent = 'Paper'

const btnScissors = document.createElement('button')
btnScissors.setAttribute('id', 'scissors')
btnScissors.textContent = 'Scissors'



setUp()