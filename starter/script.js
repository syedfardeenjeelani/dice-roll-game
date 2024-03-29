'use strict';
//selecting elements



/* <section class="player player--1">
<h2 class="name" id="name--1">Player 2</h2>
<p class="score" id="score--1">24</p>
<div class="current">
  <p class="current-label">Current</p>
  <p class="current-score" id="current--1">0</p>
</div>
</section> */
let switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');

let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')



// starting  conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')
let scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;
let playing = true;
// rolling dice functionality


btnRoll.addEventListener('click', function () {
    // generating a random dice roll
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        // 3. Check for rolled 1
        if (dice !== 1) {
            // add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
            // current0El.textContent = currentScore; // change in future
        }
        else {
            //switch to next player
            // document.getElementById(`current--${activePlayer}`).textContent = 0;
            // currentScore = 0;
            // activePlayer = activePlayer === 0 ? 1 : 0
            // player0El.classList.toggle('player--active');
            // player1El.classList.toggle('player--active');
            switchPlayer()
        }
    }
})



btnHold.addEventListener('click', function () {
    if (playing) {
        // add current score to to active players score
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
        //check if player score is >= 100 
        //finsih game
        if (scores[activePlayer] >= 10) {
            playing = false
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        }


        else {
            //switch to the next player
            switchPlayer()
        }
    }


})

btnNew.addEventListener('click', function () {
    if (playing === false || playing === true) {
        score0El.textContent = 0;
        score1El.textContent = 0;
        current0El.textContent = 0;
        current1El.textContent = 0;
        scores = [0, 0]
        currentScore = 0;
        activePlayer = 0;
        // document.getElementById(`current--0`).textContent = 0;
        // document.getElementById(`current--1`).textContent = 0;
        // document.getElementById(`score--0`).textContent = 0;
        // document.getElementById(`score--1`).textContent = 0;

        document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
        document.querySelector(`.player--0`).classList.add('player--active');

        playing = true;
    }

})