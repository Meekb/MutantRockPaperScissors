// DOM VARIABLES
var classicBtn = document.getElementById('classicBtn');
var difficultBtn = document.getElementById('difficultBtn');
var rock = document.getElementById('rockIcon');
var paper = document.getElementById('paperIcon');
var scissors = document.getElementById('scissorsIcon');
var changeGameBtns = document.getElementById('changeGameBtns');
var chooseWinText = document.getElementById('chooseText');
var humanWinCount = document.getElementById('humanWinCount');
var gameContainer = document.getElementById('gameContainer');


// GLOBAL VARIABLES
var newGame;

// EVENT LISTENERS
classicBtn.addEventListener('click', playClassicGame);
gameContainer.addEventListener('click', humanSelection)

// EVENT HANDLERS
function playClassicGame() {
  createClassicGame();
  console.log(newGame);
  hideElement(changeGameBtns);
  toggleIcons(rock, paper, scissors);
  chooseWinText.innerText = 'Human make your pick!';
}

function createClassicGame() {
  newGame = new Game();
  this.type = 'Classic'
  createPlayersForClassic();
}

function createPlayersForClassic() {
  newGame.human = new Player();
  newGame.human.name = 'Human';
  newGame.human.token = '🧠';
  newGame.computer = new Player();
  newGame.computer.name = 'Computer';
  newGame.computer.token = '🤖';
  // newGame.loadPlayerWins() pulls wins from localStorage and displays on DOM
  // newGame.human.wins and newGame.computer.wins
}


//DOM CHANGE
//this needs to be a method, and then invoke the method and use results to
// change the display to the win screen
function humanSelection() {
  var humanPick;
  if (event.target.closest('.rock')) {
    humanPick = 'rock';
    console.log('rock');
  } else if (event.target.closest('.paper')) {
    humanPick = 'paper';
    console.log('paper')
  } else {
    humanPick = 'scissors';
    console.log('scissors')
  }
}

// function createDifficultGame() {
//   newGame = new Game();
//   this.type = 'Difficult'
//   newGame.human = new Player();
//   newGame.human.name = 'Human';
//   newGame.human.token = '🧠';
//   newGame.computer = new Player();
//   newGame.computer.name = 'Computer';
//   newGame.computer.token = '🤖';
// }

function hideElement(element) {
  element.classList.add('hidden');
}

function unhideElement(element) {
  element.classList.remove('hidden');
}

function toggleIcons(icon1, icon2, icon3) {
  icon1.classList.toggle('hidden');
  icon2.classList.toggle('hidden');
  icon3.classList.toggle('hidden');
}
