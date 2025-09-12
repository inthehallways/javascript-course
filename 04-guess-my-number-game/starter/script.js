// game development hour 1 - game foundation & DOM basics
'use strict';

console.log('=== GAME DEVELOPMENT: GUESS MY NUMBER ===');

console.log('Goal: Build a complete interactive game from scratch');
console.log('Focus: DOM manipulation, game state, and user interaction');

////////////////////////////////////
// constants & selectors

// ranges and defaults
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

// cached selectors (single source of truth)
const bodyEl = document.body;
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const numberEl = document.querySelector('.number');
const highscoreEl = document.querySelector('.highscore');
const guessEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector('.check')
const againBtnEl = document.querySelector('.again');

////////////////////////////////////
// ui helpers

function setMessage(text) {
    messageEl.textContent = text;
}
function setNumber(value) {
    numberEl.textContent = value;
}
function setScore(value) {
    scoreEl.textContent = value;
}
function setHighScore (value) {
    highscoreEl.textContent = value;
}
function setBackground(color) {
    bodyEl.style.backgroundColor = color;
}
function disablePlay(disabled){
    guessEl.disabled = disabled;
    checkBtnEl.disabled = disabled;
}
function clearInput() {
    guessEl.value = '';
}

////////////////////////////////////
// game state & reset

let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER; // math trunc is to remove decimal places, and +1 is to start from 1. not having +1 would start the code from 0.
console.log('Secret number:', secretNumber);
let score = START_SCORE;
let highscore = 0;

function resetGameState() {
    score = START_SCORE;
    secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

function renderInitialUI() {
    setMessage('Start guessing...');
    setNumber('?');
    setScore(score);
    clearInput();
    disablePlay(false);
    setBackground('');
}

// initial render
renderInitialUI();

////////////////////////////////////
// event listeners - making buttons interactive
// score tracking - reduce score for wrong guesses

checkBtnEl.addEventListener('click', function () {
    const guess = Number(guessEl.value);

    // new input validation - check for valid input
    if (!guess) return setMessage('Please input a number!');
    if (guess < MIN_NUMBER || guess > MAX_NUMBER)
        return setMessage (`Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}!`);

    // new basic game logic which checks if guess is correct
    if (guess === secretNumber) {
        setMessage(`🎉 You have won!!!`);
        setNumber(secretNumber);
        setBackground('mediumseagreen');
        if (score > highscore) {
            highscore = score;
            setHighScore(highscore);
        }
        disablePlay(true);
        clearInput('');
        return;
    } 

    // new logic for wrong guesses
    setMessage(guess > secretNumber ? '📈 Too high!' : ' 📉 Too low!');
    score--;
    setScore(score);
    
    if (score < 1) {
        setMessage('💀 You have lost. Please try again.')
        setNumber(secretNumber);
        setBackground('firebrick');
        disablePlay(true);
        clearInput('');
    }
});

// new game restart

againBtnEl.addEventListener('click', function () {
    resetGameState();
    renderInitialUI();
    console.log('New Secret number:', secretNumber);
});

////////////////////////////////////

// small ux enhancements - keyboard

// pressing Enter will trigger the check button
window.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !checkBtnEl.disabled) {
    checkBtnEl.click();
  }
});

// focus input on restart
againBtnEl.addEventListener('click', function () {
  guessEl.focus();
});