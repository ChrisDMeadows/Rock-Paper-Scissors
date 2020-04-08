
let resultDiv = document.querySelector(".result > p");


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
      
let rockChoice = document.getElementById("rock");
let paperChoice = document.getElementById("paper");
let scissorsChoice = document.getElementById("scissors");
  
rockChoice.addEventListener("click", playRock);
paperChoice.addEventListener("click", playPaper);
scissorsChoice.addEventListener("click", playScissors);

function playRock() {
  console.log("rock");
  let round = playRound("rock");
  console.log(round);
  console.log(gameOver());
  return round;
}

function playPaper() {
  console.log("paper");
  let round = playRound("paper");
  console.log(round);
  console.log(gameOver());
  return round;
}

function playScissors() {
  console.log("scissors");
  let round = playRound("scissors");
  console.log(round);
  console.log(gameOver());
  return round;
}

function playRound(playerSelection) {

  let computerSelection = computerPlay()

  if (playerSelection == computerSelection) {
    resultDiv.innerHTML = "Draw!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    parseInt(document.getElementById("computer-score").innerHTML++);
    resultDiv.innerHTML = "You Lose! Paper beats Rock";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    parseInt(document.getElementById("player-score").innerHTML++);
    resultDiv.innerHTML = "You Win! Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    parseInt(document.getElementById("computer-score").innerHTML++);
    resultDiv.innerHTML = "You Lose! Scissors beat Paper";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    parseInt(document.getElementById("player-score").innerHTML++);
    resultDiv.innerHTML = "You Win! Paper beats Rock";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    parseInt(document.getElementById("computer-score").innerHTML++);
    resultDiv.innerHTML = "You Lose! Rock beats Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    parseInt(document.getElementById("player-score").innerHTML++);
    resultDiv.innerHTML = "You Win! Scissors beats Paper"; 
  } else {
    return "Error, selection not found";
  }
}

function gameOver() {

  if (document.getElementById("player-score").innerHTML == 5) {
    rockChoice.removeEventListener("click", playRock);
    paperChoice.removeEventListener("click", playPaper);
    scissorsChoice.removeEventListener("click", playScissors);
    resultDiv.innerHTML = "YOU WIN!!";
  } else if (document.getElementById("computer-score").innerHTML == 5) {
    rockChoice.removeEventListener("click", playRock);
    paperChoice.removeEventListener("click", playPaper);
    scissorsChoice.removeEventListener("click", playScissors);
    resultDiv.innerHTML = "YOU LOSE!!";
  } else {

  }
}

