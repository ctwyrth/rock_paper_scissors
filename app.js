const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
let userChoice;
let computerChoice;
let result;

const possibleChoices = document.querySelectorAll('button');
possibleChoices.forEach((possibleChoice) => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id;
   userChoiceDisplay.innerHTML = userChoice.replace(/^\w/, (c) => c.toUpperCase());
   generateComputerChoice();
   generateResult();
}));

function generateComputerChoice() {
   const randomNumber = Math.floor(Math.random() * possibleChoices.length) +1;

   if (randomNumber === 1) {
      computerChoice = 'rock';
   } else if (randomNumber === 2) {
      computerChoice = 'paper';
   } else {
      computerChoice = 'scissors';
   }
   computerChoiceDisplay.innerHTML = computerChoice.replace(/^\w/, (c) => c.toUpperCase());
}

function generateResult() {
   let options = ['Draw!', 'You win!', 'You lose!'];

   if (userChoice === computerChoice) {
      result = options[0];
   } else if (userChoice === 'rock' && computerChoice === 'scissors') {
      result = options[1];
   } else if (userChoice === 'rock' && computerChoice === 'paper') {
      result = options[2];
   } else if (userChoice === 'paper' && computerChoice === 'rock') {
      result = options[1];
   } else if (userChoice === 'paper' && computerChoice === 'scissors') {
      result = options[2];
   } else if (userChoice === 'scissors' && computerChoice === 'paper') {
      result = options[1];
   } else {
      result = options[2];
   }
   resultDisplay.innerHTML = result;
}