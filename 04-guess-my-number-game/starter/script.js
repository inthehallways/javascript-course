// game development hour 1 - game foundation & DOM basics
'use strict';

console.log('=== GAME DEVELOPMENT: GUESS MY NUMBER ===');

console.log('Goal: Build a complete interactive game from scratch');
console.log('Focus: DOM manipulation, game state, and user interaction');

////////////////////////////////////
// DOM element selection - the foundation
console.log('=== DOM ELEMENT SELECTION ===');

const messageEl = document.querySelector('.message');
console.log(messageEl);
console.log(messageEl.textContent);
// messageEl.textContent = 'Hello from JavaScript!';

const scoreEl = document.querySelector('.score');
console.log('Score element:', scoreEl);
// scoreEl.textContent = '50';

const numberEl = document.querySelector('.number');
// numberEl.textContent = 15;

const hScoreEl = document.querySelector('.highscore');
// hScoreEl.textContent = 31;

const guessEl = document.querySelector('.guess');
// guessEl.value = 12;

////////////////////////////////////
// game state variables - the game's memory

let secretNumber = Math.trunc(Math.random() * 20) + 1; // math trunc is to remove decimal places, and +1 is to start from 1. not having +1 would start the code from 0.
console.log('Secret number:', secretNumber);

let score = 20;

let highscore = 0;

// change the value of UI score dynamically
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log('Game state initialized!');

////////////////////////////////////
// event listeners - making buttons interactive
// score tracking - reduce score for wrong guesses

document.querySelector('.check').addEventListener('click', function () {
    // once button is clicked, do this below
    console.log('Check button is clicked!');

    const guess = Number(document.querySelector('.guess').value);
    console.log(`Player guessed:`, guess);

    // basic game logic which checks if guess is correct
    if (guess === secretNumber) {
        console.log(`Your guess is correct!`);
        document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
        document.querySelector(`.number`).textContent = secretNumber;
        
        // check if this is a new highscore 
        if (score > highscore) {
            highscore = score;
            document.querySelector(`.highscore`).textContent = highscore;
        }

        // win condition - detect when player wins

        document.querySelector(`.message`).textContent = ` 🎉 You won!`;
        document.querySelector(`.guess`).disabled = true;
        document.querySelector(`.check`).disabled = true;
    } else if (guess > secretNumber) {
        console.log(`Too high!`);
        document.querySelector(`.message`).textContent = `📈 Too high!`;
        score--;
        document.querySelector(`.score`).textContent = score;
        if (score < 1) {
            document.querySelector(`.message`).textContent = `💥 You have lost. Please try again.`
            document.querySelector(`.number`).textContent = secretNumber;
            document.querySelector(`.guess`).disabled = true;
            document.querySelector(`.check`).disabled = true;
        }
    } else if (guess < secretNumber) {
        console.log(`Too low!`);
        document.querySelector(`.message`).textContent = `📉 Too low!`;
        score--;
        if (score < 1) {
            document.querySelector(`.message`).textContent = `💥 You have lost. Please try again.`
            document.querySelector(`.number`).textContent = secretNumber;
            document.querySelector(`.guess`).disabled = true;
            document.querySelector(`.check`).disabled = true;
        }
    }

    // update score display whenever there is a wrong guess
    document.querySelector('.score').textContent = score;
});

////////////////////////////////////
// game restart

document.querySelector('.again').addEventListener('click', function () {
    // reset game state
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log('New Secret number:', secretNumber);

    // reset display
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

    // re-enable input and button
    document.querySelector('.guess').disabled = false;
    document.querySelector('.check').disabled = false;
});
