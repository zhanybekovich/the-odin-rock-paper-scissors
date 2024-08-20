/**
 * Rock Paper Scissors game
 */

// Get computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Get user choice
function getHumanChoice() {
  const playerChoice = prompt("Choose rock, paper, or scissors")
    .trim()
    .toLowerCase();

  // Ensure valid input
  const validChoices = ["rock", "paper", "scissors"];
  if (!validChoices.includes(playerChoice)) {
    alert("Invalid choice! Please choose rock, paper, or scissors.");
    return getHumanChoice(); // Re-prompt the user
  }

  return playerChoice;
}

let humanScore = 0;
let computerScore = 0;

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
    return `${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } beats ${computerSelection}`;
  } else {
    computerScore++;
    return `${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    } beats ${playerSelection}`;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
  }

  // Announce final score
  console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Sorry, you lost the game!");
  } else {
    console.log("It's a tie overall!");
  }
}

playGame();
