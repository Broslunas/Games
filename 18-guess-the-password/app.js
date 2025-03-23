"use-strict";

// Crear variables para los elementos en el DOM
const check = document.getElementById("check");
const restart = document.getElementById("restart");
const message = document.getElementById("message");

const inputs = document.querySelectorAll(".input");

const feedbacks = document.querySelectorAll(".feedback");

let correctInputs = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
};

let hasError = false;
let guess = [];

const password = [];

// Generate a random password of 5 digits
function generatePassword() {
  function randomNumber() {
    return Math.floor(Math.random() * 10);
  }

  for (let i = 0; i <= 4; i++) {
    const number = randomNumber();
    if (!password.includes(number)) {
      password[i] = number;
    } else {
      i--;
    }
  }

  console.log(password);
}

// Check if the guess is valid
function checkGuessValidity() {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "" || inputs[i].value < 0 || inputs[i].value > 9) {
      inputs[i].classList.add("warning");
      message.classList.remove("hidden");
      message.textContent = "Introduce una combinación válida";
      error = true;
    } else {
      inputs[i].classList.remove("warning");
    }
  }
}

function saveGuess() {
  guess = [];
  for (let i = 0; i < inputs.length; i++) {
    guess.push(Number(inputs[i].value));
  }
  console.log(guess);
}

function checkGuess() {
  let allCorrect = true;
  for (let i = 0; i < inputs.length; i++) {
    if (guess[i] !== password[i]) {
      allCorrect = false;
    }
  }

  if (allCorrect) {
    message.classList.remove("hidden");
    message.textContent = "Has ganado!";
  }

  // Comprobar valor por valor si es correcto
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === password[i]) {
      correctInputs[i + 1] = true;
      feedbacks[i].classList.add("correct");
      feedbacks[i].classList.remove("null");
      feedbacks[i].classList.remove("red");
      feedbacks[i].classList.remove("yellow");
    } else {
      correctInputs[i + 1] = false;
      feedbacks[i].classList.add("red");
      feedbacks[i].classList.remove("null");
      feedbacks[i].classList.remove("correct");
      feedbacks[i].classList.remove("yellow");
    }
  }

  // Comprobar si hay algun valor correcto pero en otra posición
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] !== password[i] && password.includes(guess[i])) {
      feedbacks[i].classList.add("yellow");
      feedbacks[i].classList.remove("red");
      feedbacks[i].classList.remove("null");
      feedbacks[i].classList.remove("correct");
    }
  }
}

// Add event listener to the check button
check.addEventListener("click", function () {
  checkGuessValidity();
  if (hasError) {
    return;
  } else {
    message.classList.add("hidden");
    message.textContent = "";
  }

  saveGuess();

  checkGuess();
});

// Add event listener to the restart button
restart.addEventListener("click", function () {
  generatePassword();

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
    inputs[i].classList.remove("warning");
    feedbacks[i].classList.remove("red");
    feedbacks[i].classList.remove("yellow");
    feedbacks[i].classList.remove("correct");
    feedbacks[i].classList.add("null");
  }

  hasError = false;

  message.classList.add("hidden");
  message.textContent = "";
});

generatePassword();
