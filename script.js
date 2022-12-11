'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
// console.log((document.querySelector('.guess').textContent = 20));
// document.querySelector('.guess').textContent = 20;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// let secretNumber = 10;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;

let textMases = function (masses) {
  document.querySelector('.message').textContent = masses;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  //when no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'NO Number!';
    textMases('no numbbber');
  }
  // when player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    textMases('Correct Nuuumber!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // when guse is worng
  else if (guess !== secretNumber) {
    if (score > 1) {
      score--;

      textMases(`${guess > secretNumber ? 'too Hggggh' : 'Too Loooow'}`);
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? 'too High' : 'Too Low';
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost The Game';
      textMases('You loooost The Game');
      document.querySelector('.score').textContent = 0;
    }
  }

  // when guss is High
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.message').textContent = 'Too high';
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost The Game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // when guss is Low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.message').textContent = 'Too Low';
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost The Game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('.message').textContent = 'Start guessing...';
  textMases('Staaart guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
