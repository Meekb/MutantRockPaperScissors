// DOM VARIABLES
var classicBtn = document.getElementById('classicBtn');
var difficultBtn = document.getElementById('difficultBtn');
var rock = document.getElementById('rockIcon');
var paper = document.getElementById('paperIcon');
var scissors = document.getElementById('scissorsIcon');
var changeGameBtns = document.getElementById('changeGameBtns');

// GLOBAL VARIABLES
var newGame;

// EVENT LISTENERS
window.addEventListener('load', startApp);
classicBtn.addEventListener('click', loadClassicGame);

// EVENT HANDLERS
function startApp() {
  console.log('STARTING');
}

function loadClassicGame() {
  newGame = new Game();
  newGame.human = new Player();
  newGame.human.name = 'Human';
  newGame.human.token = '🧠';
  newGame.computer = new Player();
  newGame.computer.name = 'Computer';
  newGame.computer.token = '🤖';
  console.log(newGame);
  changeGameBtns.classList.add('hidden')
  rock.classList.toggle('hidden');
  paper.classList.toggle('hidden');
  scissors.classList.toggle('hidden');
}
