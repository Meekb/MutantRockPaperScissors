// DOM VARIABLES
  // containers
var chooseScreen = document.getElementById('chooseContainer');
var difficultGame = document.getElementById('difficultGame');
var classicGame = document.getElementById('classicGame');
var classicListenArea = document.getElementById('topRowIcons');

  //buttons
var classicBtn = document.getElementById('classicBtn');
var difficultBtn = document.getElementById('difficultBtn');

  // innerText areas
var chooseWinText = document.getElementById('chooseText');

  // icons
var rock = document.getElementById('rockIcon');
var paper = document.getElementById('paperIcon');
var scissors = document.getElementById('scissorsIcon');
var compRock = document.getElementById('rockIconComp');
var compPaper = document.getElementById('paperIconComp');
var compScissors = document.getElementById('scissorsIconComp');
var turtle = document.getElementById('turtleIcon');
var pizza = document.getElementById('pizzaIcon');
var sewer = document.getElementById('sewerIcon');
var mic = document.getElementById('micIcon');
var ninjaStar = document.getElementById('ninjaStarIcon');
var topRowIcons = document.getElementById('topRowIcons');
var bottomRowIcons = document.getElementById('bottomRowIcons');


// GLOBAL VARIABLES
var newGame;


// EVENT LISTENERS
classicBtn.addEventListener('click', startClassicGame);
difficultBtn.addEventListener('click', startDifficultGame);
classicListenArea.addEventListener('click', classicWinSequence);

// EVENT HANDLERS

//master game functions
function startClassicGame() {
  createGame();
  newGame.gameType();
  newGame.loadPlayerNames();
  newGame.loadTokens()
  newGame.loadWins();
  changeToGameScreen();
  changeToPickText();
  console.log(newGame);
}

function startDifficultGame() {
  createGame();
  newGame.gameType();
  newGame.loadPlayerNames();
  newGame.loadTokens();
  newGame.loadWins();
  changeToGameScreen();
  // console.log(newGame);
}

function classicWinSequence() {
  newGame.computerTurn();
  newGame.checkHumanWeapon();
  newGame.determineWinner();
  disableListener();
  changeToWinnerText();
  displayIconsPicked();
  console.log(newGame);
}

function createGame() {
  newGame = new Game();
}

function changeToGameScreen() {
  if (newGame.type === 'Classic') {
    hideElement(chooseScreen);
    unhideElement(topRowIcons);
    toggleDiffIcons(turtle, pizza, sewer, mic, ninjaStar);
  } else {
    hideElement(chooseScreen);
    unhideElement(topRowIcons);
    unhideElement(bottomRowIcons);
    toggleClassicIcons(rock, paper, scissors);
  }
}

function displayIconsPicked() {
  showHumanIcon();
  showCompIcon();
}

function showHumanIcon() {
  if (event.target.id === 'rockIcon') {
    hideIconShells(paper, scissors)
  } else if (event.target.id === 'paperIcon') {
    hideIconShells(rock, scissors);
  } else {
    hideIconShells(rock, paper);
  }
}

function showCompIcon() {
  if (newGame.randomWeapon === 'rock') {
    unhideElement(compRock);
  } else if (newGame.randomWeapon === 'paper') {
    unhideElement(compPaper);
  } else {
    unhideElement(compScissors);
  }
}

function disableListener() {
  classicListenArea.removeEventListener('click', classicWinSequence);
}

function changeToPickText() {
  chooseWinText.innerText = '🧠 Human Pick Your Weapon 🧠'
}

function changeToWinnerText() {
  if (newGame.gameWinner === 'DRAW') {
    chooseText.innerText = '😬 Sorry, It Was A Draw! 😬'
  } else if (newGame.gameWinner === 'Computer') {
    chooseText.innerText = '🤖 Machine Won This Round! 🤖'
  } else {
    chooseText.innerText = '🧠  Hooray, Wow Human! 🧠'
  }
}

// toggle and hide functions
function hideElement(element) {
  element.classList.toggle('hidden');
}

function hideIconShells(icon1, icon2) {
  icon1.classList.toggle('hidden');
  icon2.classList.toggle('hidden');
}

function unhideElement(element) {
  element.classList.toggle('hidden');
}

function toggleClassicIcons(icon1, icon2, icon3) {
  icon1.classList.toggle('hidden');
  icon2.classList.toggle('hidden');
  icon3.classList.toggle('hidden');
}
function toggleDiffIcons(icon1, icon2, icon3, icon4, icon5) {
  icon1.classList.toggle('hidden');
  icon2.classList.toggle('hidden');
  icon3.classList.toggle('hidden');
  icon4.classList.toggle('hidden');
  icon5.classList.toggle('hidden');
}
