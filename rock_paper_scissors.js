
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) {
    console.log("Computer chose Rock");
    return "rock";
  } else if (randomChoice === 1) {
    console.log("Computer chose Paper");
    return "paper";
  }else {
    console.log("Computer chose Scissors");
    return "scissors";
  }
}
      
const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorsChoice = document.getElementById("scissors");
  
rockChoice.addEventListener("click", playRock);
paperChoice.addEventListener("click", playPaper);
scissorsChoice.addEventListener("click", playScissors);

function playRock() {
  console.log("rock");
  let round = playRound("rock");
  console.log(round);
  console.log(gameScore());
  return round;
}

function playPaper() {
  console.log("paper");
  let round = playRound("paper");
  console.log(round);
  console.log(gameScore());
  return round;
}

function playScissors() {
  console.log("scissors");
  let round = playRound("scissors");
  console.log(round);
  console.log(gameScore());
  return round;
}

function playRound(playerSelection) {

  let computerSelection = computerPlay()

  if (playerSelection == computerSelection) {
    return "Draw!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    return "You Lose! Scissors beat Paper";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    return "You Win! Paper beats Rock";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    return "You Win! Scissors beats Paper"; 
  } else {
    return "Error, selection not found";
  }
}

function gameScore() {
  if (playerScore == 5){
    rockChoice.removeEventListener("click", playRock);
    paperChoice.removeEventListener("click", playPaper);
    scissorsChoice.removeEventListener("click", playScissors);
    return "YOU WIN!!";
  } else if (computerScore == 5) {
    rockChoice.removeEventListener("click", playRock);
    paperChoice.removeEventListener("click", playPaper);
    scissorsChoice.removeEventListener("click", playScissors);
    return "YOU LOSE!!";
  } else {
    console.log("You = " + playerScore);
    console.log("Computer =  " + computerScore);
    return "";
  }
}