"use strict";

/*
console.log(document.querySelector(`.message`).textContent);
document.querySelector(`.message`).textContent = `Correct Number!`;

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

let secretNumber;
let score = 20;
let highscore = 0;

notZero();

// document.querySelector(`.number`).textContent = secretNumber;

function notZero() {
  // Sets a Secret Number
  secretNumber = Math.trunc(Math.random() * 20);

  // Makes sure it's not zero
  while (!secretNumber) {
    secretNumber = Math.trunc(Math.random() * 20);
  }
}
function displayMessage(message) {
  document.querySelector(`.message`).textContent = message;
}
function bodyColor(color) {
  document.querySelector(`body`).style.backgroundColor = color;
}
function setScore(score) {
  document.querySelector(`.score`).textContent = score;
}
function reveal(b) {
  if (b) {
    document.querySelector(`.number`).textContent = secretNumber;
  } else {
    document.querySelector(`.number`).textContent = `?`;
  }
}
function revealSize(size) {
  document.querySelector(`.number`).style.width = size;
}

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // When there is no input
  if (!guess) {
    displayMessage(`⛔ No Number!`);

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage(`Correct Number!`);
    reveal(true);
    bodyColor(`#60b347`);
    revealSize(`30rem`);

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    // When guess is wrong!
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈 Too High!` : `📉 Too low!`);
      setScore(score--);

      // When player loses!
    } else {
      displayMessage(`💥 You lost the game!`);
      setScore(0);
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  document.querySelector(`.guess`).value = ``;

  revealSize(`15rem`);
  reveal(false);
  setScore(score);
  bodyColor(`#222`);
  displayMessage(`Start guessing...`);
  notZero();
});
