// DOM VARIABLES
  // containers
var chooseScreen = document.getElementById('chooseContainer');
var difficultGameBoard = document.getElementById('difficultBoard');
var classicGameBoard = document.getElementById('classicBoard');
var humanWins = document.getElementById('humanWinCounter');
var compWins = document.getElementById('compWinCounter');
var asides = document.querySelectorAll('aside')

  //buttons
var classicBtn = document.getElementById('classicBtn');
var difficultBtn = document.getElementById('difficultBtn');
var changeTypeBtn = document.getElementById('winScreenBtn');

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
var topRowHolder = document.getElementById('topRowIcons');
var bottomRowIcons = document.getElementById('bottomRowIcons');
var classicIcons = document.querySelectorAll('.ctri');

// GLOBAL VARIABLES
var newGame;

// EVENT LISTENERS
window.addEventListener('load', displayWins);
classicBtn.addEventListener('click', startClassicGame);
difficultBtn.addEventListener('click', startDifficultGame);
changeTypeBtn.addEventListener('click', backToBeginning);

// EVENT HANDLERS
//master game functions
function startClassicGame() {
  createGame();
  newGame.gameType();
  newGame.loadPlayerNames();
  newGame.loadTokens()
  newGame.loadWins();
  classicGameBoard.addEventListener('click', classicWinSequence);
  changeToGameScreen();
  changeToPickText();
  // console.log(newGame.human.wins)
  // console.log(newGame.computer.wins)
  console.log(newGame);
}

function startDifficultGame() {
  createGame();
  newGame.gameType();
  newGame.loadPlayerNames();
  newGame.loadTokens();
  newGame.loadWins();
  applyDiffLayout();
  changeToGameScreen();
  addClassicListener();
  // console.log(newGame);
}

function classicWinSequence() {
  newGame.computerTurn();
  newGame.checkHumanWeapon();
  newGame.determineClassicWinner();
  disableClassicListener();
  changeToWinnerText();
  showHumanIcon();
  showCompIcon();
  unhideElement(changeTypeBtn);
  displayWins();
  // setTimeout(resetClassicGameBoard(), 6000);
  console.log(newGame);
}

function resetClassicGameBoard() {
  createGame();
  changeToPickText();
  changeToGameScreen();
  resetClassicIcons();
  rehideCompIcon();
  // hideAll();
}

function createGame() {
  newGame = new Game();
  // newGame.loadWins();
}

//DOM functions
function changeToGameScreen() {
  hideElement(chooseScreen);
  if (newGame.type === 'Classic') {
    unhideElement(classicGameBoard);
  } else {
    unhideElement(difficultGameBoard);
  }
}

function applyDiffLayout() {
  for (var i = 0; i < asides.length; i++) {
    asides[i].classList.toggle('easy');
    asides[i].classList.toggle('aside-diff-layout');
  }
}

function displayWins() {
  createGame();
  humanWinCounter.innerText = newGame.displayableHumanWin();
  compWinCounter.innerText =
  newGame.displayableCompWin();
}

function backToBeginning() {
  rehideCompIcon()
  showOtherClassicIcons();
  hideElement(changeTypeBtn);
  hideElement(classicGameBoard);
  unhideElement(chooseScreen);
}

function resetClassicIcons() {
  for (var i = 0; i < classicIcons.length; i++) {
    if (classicIcons[i].classList.contains('crti')) {
      unhideElement(classicIcons[i])
    // } else if (classicIcons[i].classList.contains('comp') && !classicIcons[i].contains('hidden')) {
    //   hideElement(classicIcons[i])
    }
    unhideElement(topRowHolder);
  }
}

function addClassicListener() {
  classicGameBoard.addEventListener('click', classicWinSequence);
}

function disableClassicListener() {
  classicGameBoard.removeEventListener('click', classicWinSequence);
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

function showOtherClassicIcons() {
  if (event.target.id === 'rockIcon') {
    unhideIconShells(paper, scissors)
  } else if (event.target.id === 'paperIcon') {
    unhideIconShells(rock, scissors);
  } else {
    unhideIconShells(rock, paper);
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

function rehideCompIcon() {
  if (newGame.randomWeapon === 'rock') {
    hideElement(compRock);
  } else if (newGame.randomWeapon === 'paper') {
    hideElement(compPaper);
  } else {
    hideElement(compScissors);
  }
}

function changeToPickText() {
  chooseWinText.innerText = '👇 Human Pick Your Weapon 👇'
}

function changeToChooseGameText() {
  chooseWinText.innerText = 'Choose your game!';
}

function changeToWinnerText() {
  if (newGame.gameWinner === 'DRAW') {
    chooseText.innerText = '😬 Sorry, It Was A Draw! 😬'
  } else if (newGame.gameWinner === 'Computer') {
    chooseText.innerText = '🤖 Machine Won This Round! 🤖'
  } else {
    chooseText.innerText = '🔥  Hooray, Much Human! 🔥'
  }
}

// toggle and hide functions
function hideElement(element) {
  element.classList.toggle('hidden');
}

function unhideElement(element) {
  element.classList.toggle('hidden');
}

function hideGameButtons(btn1, btn2) {
  btn1.classList.toggle('hidden');
  btn2.classList.toggle('hidden');
}

function hideIconShells(icon1, icon2) {
  icon1.classList.toggle('hidden');
  icon2.classList.toggle('hidden');
}

function unhideIconShells(icon1, icon2) {
  icon1.classList.toggle('hidden');
  icon2.classList.toggle('hidden');
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
