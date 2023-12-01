let heading = document.querySelector(".header");
let gameBoard = document.querySelector(".game__board");
let contest = document.querySelector(".contest");
let pickUserImage = document.getElementById("userPickImage");
let pickComputerImage = document.getElementById("computerPickImage");
let playAgain = document.querySelector(".play-again");
let userScore = document.querySelector(".your__score");
let computerScore = document.querySelector(".computer__score");
let rulesButton = document.querySelector(".rules__btn");
let gameRules = document.querySelector(".game__rules");
let closeRules = document.querySelector(".cancel");
let nextButton = document.querySelector(".next__btn");
let winner = document.querySelector(".hurray");
let animation  = document.querySelector(".imageContainer")

const chooseOptions = {
  rock: "images/rock.png",
  scissors: "images/scissors.png",
  paper: "images/paper.png",
};
const pickUserChoice = (choice) => {
  console.log(choice);
  gameBoard.style.display = "none";
  contest.style.display = "flex";
  pickUserImage.src = chooseOptions[choice];

  let computerChoice = pickComputerChoice();
  result(choice, computerChoice);
};
const pickComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
  pickComputerImage.src = chooseOptions[computerChoice];
  return computerChoice;
};

const result = (userChoice, computerChoice) => {
  if (userChoice === "paper" && computerChoice === "scissors") {
    setDecision("YOU LOST");
    updateScore("computer");
    playAgain.innerText = "PLAY AGAIN";
    nextButton.style.display = "none";
  }
  if (userChoice === "paper" && computerChoice === "rock") {
    setDecision("YOU WIN");
    updateScore("user");
    playAgain.innerText = "PLAY AGAIN";
    nextButton.style.display = "block";
  }
  if (userChoice === "paper" && computerChoice === "paper") {
    setDecision("TIE UP");
    playAgain.innerText = "REPLAY";
    nextButton.style.display = "none";
  }
  if (userChoice === "rock" && computerChoice === "scissors") {
    setDecision("YOU WIN");
    updateScore("user");
    playAgain.innerText = "PLAY AGAIN";
    nextButton.style.display = "block";
  }
  if (userChoice === "rock" && computerChoice === "paper") {
    setDecision("YOU LOST");
    updateScore("computer");
    playAgain.innerText = "PLAY AGAIN";
    nextButton.style.display = "none";
  }
  if (userChoice === "rock" && computerChoice === "rock") {
    setDecision("TIE UP");
    playAgain.innerText = "REPLAY";
    nextButton.style.display = "none";
  }
  if (userChoice === "scissors" && computerChoice === "scissors") {
    setDecision("TIE UP");
    playAgain.innerText = "REPLAY";
    nextButton.style.display = "none";
  }
  if (userChoice === "scissors" && computerChoice === "rock") {
    setDecision("YOU LOST");
    updateScore("computer");
    playAgain.innerText = "PLAY AGAIN";
    nextButton.style.display = "none";
  }
  if (userChoice === "scissors" && computerChoice === "paper") {
    setDecision("YOU WIN");
    updateScore("user");
    playAgain.innerText = "PLAY AGAIN";
    nextButton.style.display = "block";
  }
};
const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
  console.log(decision);
};
/* Storing score in local storange */
const updateScore = (winner) => {
  let user_score = parseInt(localStorage.getItem("user_score")) || 0;
  let computer_score = parseInt(localStorage.getItem("computer_score")) || 0;

  if (winner === "user") {
    user_score += 1;
  } else if (winner === "computer") {
    computer_score += 1;
  }

  localStorage.setItem("user_score", user_score);
  userScore.innerText = user_score;
  localStorage.setItem("computer_score", computer_score);
  computerScore.innerText = computer_score;
};
window.onload = function () {
  userScore.innerText = localStorage.getItem("user_score") || 0;
  computerScore.innerText = localStorage.getItem("computer_score") || 0;
};
const play__again = () => {
  heading.style.display = "flex";
  gameBoard.style.display = "flex";
  contest.style.display = "none";
  nextButton.style.display = "none";
  winner.style.display = "none";
  gameRules.style.display = "none";
};
const winning__screen = () => {
  heading.style.display = "none";
  gameBoard.style.display = "none";
  contest.style.display = "none";
  rulesButton.style.display = "block";
  nextButton.style.display = "none";
  winner.style.display = "block";
  gameRules.style.display = "none";
};
const displayRules = () => {
  gameRules.style.display = "flex";
};
const closerules = () => {
  gameRules.style.display = "none";
};
