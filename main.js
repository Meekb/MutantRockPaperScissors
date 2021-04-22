// DOM VARIABLES
var classicBtn = document.getElementById('classicBtn');
// GLOBAL VARIABLES
var newGame;
var playerStats = [];

// EVENT LISTENERS
classicBtn.addEventListener('click', startClassicGame)

// EVENT HANDLERS

//master game functions
function startClassicGame() {
  createNewClassicGame();
  loadClassicWins();
  newGame.human.name = 'Human';
  newGame.computer.name = 'Machine';
  newGame.human.token = '🧠';
  newGame.computer.token = '🤖';
  console.log(newGame);
}

function createNewClassicGame() {
  newGame = new Game({human: new Player(), computer: new Player(), type: 'Classic'});
}

function loadClassicWins() {
  if (localStorage === null) {
    newGame.human.wins = 0;
    newGame.computer.wins = 0;
    console.log('no storage!');
  }
}

function startDifficultGame() {
  newGame = new Game({human: new Player(), computer: new Player(), type: 'Difficult'});
  newGame.human.name = 'Human';
  newGame.computer.name = 'Machine';
  newGame.human.token = '🧠';
  newGame.computer.token = '🤖';
  console.log(newGame);
}



// toggle and hide functions
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
