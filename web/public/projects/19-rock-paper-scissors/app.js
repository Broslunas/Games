// BOTONES
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const resetButton = document.querySelector(".reset");

// RESULTADOS
const player1Result = document.querySelector(".player1");
const player2Result = document.querySelector(".player2");
const resultText = document.querySelector(".result");

const choices = ["🪨", "📄", "✂️"];

let player1Choice = "";
let player2Choice = "";

function getRandomChoice() {
  player2Choice = Math.floor(Math.random() * choices.length);
  switch (player2Choice) {
    case 0:
      player2Choice = "🪨";
      break;
    case 1:
      player2Choice = "📄";
      break;
    case 2:
      player2Choice = "✂️";
      break;
  }
}

console.log(player2Choice);

rockButton.addEventListener("click", () => {
  player1Choice = "rock";
  getRandomChoice();
  player1Result.textContent = "🪨";
  player2Result.textContent = `${player2Choice}`;

  if (player1Choice === player2Choice) {
    resultText.textContent = "¡Empate!";
  } else if (player2Choice === "✂️") {
    resultText.textContent = "¡Jugador gana!";
  } else {
    resultText.textContent = "¡IA gana!";
  }
});

paperButton.addEventListener("click", () => {
  player1Choice = "paper";
  getRandomChoice();
  player1Result.textContent = "📄";
  player2Result.textContent = `${player2Choice}`;

  if (player1Choice === player2Choice) {
    resultText.textContent = "¡Empate!";
  } else if (player2Choice === "🪨") {
    resultText.textContent = "¡Jugador gana!";
  } else {
    resultText.textContent = "¡IA gana!";
  }
});

scissorsButton.addEventListener("click", () => {
  player1Choice = "scissors";
  getRandomChoice();
  player1Result.textContent = "✂️";
  player2Result.textContent = `${player2Choice}`;

  if (player1Choice === player2Choice) {
    resultText.textContent = "¡Empate!";
  } else if (player2Choice === "📄") {
    resultText.textContent = "¡Jugador gana!";
  } else {
    resultText.textContent = "¡IA gana!";
  }
});

resetButton.addEventListener("click", () => {
  player1Result.textContent = "❓";
  player2Result.textContent = "❓";
  resultText.textContent = "Esperando jugada...";
  player1Choice = "";
  player2Choice = "";
});
