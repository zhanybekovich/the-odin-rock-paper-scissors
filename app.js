/**
 * Rock Paper Scissors game - Best of 5 rounds
 */

const btns = document.querySelectorAll(".btn");
const roundResult = document.querySelector(".game-result");
const finalResult = document.querySelector(".final-result");
const humanScoreOutput = document.querySelector(".human-score");
const computerScoreOutput = document.querySelector(".computer-score");
const restartBtn = document.querySelector(".btn-restart");

let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;
const maxRounds = 5;

// Get computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    humanScore++;
    humanScoreOutput.textContent = humanScore;
    return `${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } beats ${computerSelection}`;
  } else {
    computerScore++;
    computerScoreOutput.textContent = computerScore;
    return `${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    } beats ${playerSelection}`;
  }
}

function checkGameOver() {
  if (roundCounter >= maxRounds) {
    // Disable buttons
    btns.forEach((btn) => {
      btn.disabled = true;
    });

    // Determine the final winner
    if (humanScore > computerScore) {
      finalResult.textContent = "You win the game!";
    } else if (humanScore < computerScore) {
      finalResult.textContent = "Computer wins the game!";
    } else {
      finalResult.textContent = "Draw!";
    }

    restartBtn.style.display = "block";
    restartBtn.disabled = false;
  }
}

function restartGame() {
  window.location.reload();
}

restartBtn.addEventListener("click", restartGame);

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (roundCounter < maxRounds) {
      const playerSelection = btn.textContent.trim().toLowerCase();
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      roundResult.textContent = result;

      roundCounter++;
      checkGameOver();
    }
  });
});
