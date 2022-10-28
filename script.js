'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const displayWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // WHEN THERE IS NO INPUT
  if (!guess) {
    displayMessage('No Number!');
    // WHEN WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    displayColor('#60b347');
    displayWidth('30rem');
    displayNumber(secretNumber);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // WHEN GUESS IS WRONG
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Starting guess...');
  displayScore(score);
  displayNumber('?');
  displayColor('#222');
  document.querySelector('.guess').value = '';
  displayWidth('15rem');
});
