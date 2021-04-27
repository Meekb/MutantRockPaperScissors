// DOM VARIABLES
  //buttons
var changeTypeBtn = document.getElementById('winScreenBtn');
var classicBtn = document.getElementById('classicBtn');
var difficultBtn = document.getElementById('difficultBtn');

// containers
var asides = document.querySelectorAll('aside')
var chooseScreen = document.getElementById('chooseContainer');
var classicGameBoard = document.getElementById('classicBoard');
var difficultGameBoard = document.getElementById('difficultBoard');
var main = document.querySelector('main');

  // icons
var allIcons = document.querySelectorAll('img');
var compMic = document.getElementById('micIconComp');
var compNinjaStar = document.getElementById('ninjaStarIconComp');
var compPaper = document.getElementById('paperIconComp');
var compPizza = document.getElementById('pizzaIconComp');
var compRock = document.getElementById('rockIconComp');
var compScissors = document.getElementById('scissorsIconComp');
var compSewer = document.getElementById('sewerIconComp');
var compTurtle = document.getElementById('turtleIconComp');
var mic = document.getElementById('micIcon');
var ninjaStar = document.getElementById('ninjaStarIcon');
var paper = document.getElementById('paperIcon');
var pizza = document.getElementById('pizzaIcon');
var rock = document.getElementById('rockIcon');
var scissors = document.getElementById('scissorsIcon');
var sewer = document.getElementById('sewerIcon');
var turtle = document.getElementById('turtleIcon');

// innerText areas
var chooseWinText = document.getElementById('chooseText');
var compWins = document.getElementById('compWinCounter');
var humanWins = document.getElementById('humanWinCounter');


// GLOBAL VARIABLES
var newGame;


// EVENT LISTENERS
window.addEventListener('load', createGame);
classicBtn.addEventListener('click', startClassicGame);
difficultBtn.addEventListener('click', startDifficultGame);
changeTypeBtn.addEventListener('click', backToBeginning);


// EVENT HANDLERS
//master game functions
function startClassicGame() {
  resetClassIcons();
  newGame.gameType(classicBtn);
  newGame.loadTokens()
  newGame.loadWins();
  displayWins();
  addListener();
  changeToGameScreen();
  changeToClassicPickText();
}

function startDifficultGame() {
  resetDiffIcons();
  newGame.gameType();
  newGame.loadTokens();
  newGame.loadWins();
  displayWins();
  addListener();
  applyDiffLayout();
  changeToGameScreen();
  changeToDiffPickText();
}

function classicWinSequence() {
  removeListener();
  newGame.computerTurn();
  newGame.checkHumanWeapon();
  newGame.determineClassicWinner();
  newGame.loadWins();
  displayWins();
  changeToWinnerText();
  showHumanIcon();
  showCompIcon();
  resetClassicGameBoard();
}

function difficultWinSequence() {
  removeListener();
  newGame.computerDiffTurn();
  newGame.checkHumanWeapon();
  newGame.determineDiffWinner();
  newGame.loadWins()
  changeToDiffWinnerText();
  displayWins();
  showHumanDiffIcon();
  showCompDiffIcon();
  resetDiffGameBoard()
}

function resetClassicGameBoard() {
  setTimeout(function () {
    changeToClassicPickText();
    resetClassIcons();
    addListener();
  }, 1500);
  if (changeTypeBtn.classList.contains('hidden')) {
    unhideElement(changeTypeBtn);
  }
}

function resetDiffGameBoard() {
  setTimeout(function () {
    changeToDiffPickText();
    resetDiffIcons()
    addListener();
  }, 1500);
  if (changeTypeBtn.classList.contains('hidden')) {
    unhideElement(changeTypeBtn);
  }
}

function backToBeginning() {
  if (newGame.type === 'Difficult') {
    applyClassicLayout();
    hideElement(changeTypeBtn);
    hideElement(difficultGameBoard);
    unhideElement(chooseScreen);
    createGame();
    changeToChooseGameText()
  } else {
    hideElement(changeTypeBtn);
    hideElement(classicGameBoard);
    unhideElement(chooseScreen);
    createGame()
    changeToChooseGameText();
  }
}

function createGame() {
  newGame = new Game();
  newGame.loadWins();
  displayWins();
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

function applyClassicLayout() {
  main.classList.toggle('diff-container');
  for (var i = 0; i < asides.length; i++) {
    asides[i].classList.toggle('easy');
    asides[i].classList.toggle('aside-diff-layout');
  }
  changeToClassicPickText();
}

function applyDiffLayout() {
  main.classList.toggle('diff-container');
  for (var i = 0; i < asides.length; i++) {
    asides[i].classList.toggle('easy');
    asides[i].classList.toggle('aside-diff-layout');
  }
  changeToDiffPickText();
}

function displayWins() {
  humanWinCounter.innerText = newGame.human.wins;
  compWinCounter.innerText = newGame.computer.wins;
}

function resetClassIcons() {
  for (var i = 0; i < allIcons.length; i++) {
    if (allIcons[i].classList.contains('comp') && !allIcons[i].classList.contains('hidden')){
      hideElement(allIcons[i])
    } else if (allIcons[i].classList.contains('ctri') && allIcons[i].classList.contains('hidden')) {
      unhideElement(allIcons[i]);
    }
  }
}

function resetDiffIcons() {
  for (var i = 0; i < allIcons.length; i++) {
    if (allIcons[i].classList.contains('dcomp') && !allIcons[i].classList.contains('hidden')) {
      hideElement(allIcons[i])
    } else if (allIcons[i].classList.contains('dtri') && allIcons[i].classList.contains('hidden')) {
      unhideElement(allIcons[i]);
    }
  }
}

function addListener() {
  newGame.type === 'Classic' ? classicGameBoard.addEventListener('click', classicWinSequence) : difficultGameBoard.addEventListener('click', difficultWinSequence)
}

function removeListener() {
  newGame.type === 'Classic' ? classicGameBoard.removeEventListener('click', classicWinSequence) : difficultGameBoard.removeEventListener('click', difficultWinSequence)
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

function showHumanDiffIcon() {
  if (event.target.closest('#turtleIcon')) {
    hideDiffIconShells(pizza, sewer, mic, ninjaStar)
  } else if (event.target.closest('#pizzaIcon')) {
    hideDiffIconShells(turtle, sewer, mic, ninjaStar);
  } else if (event.target.closest('#sewerIcon')) {
    hideDiffIconShells(turtle, pizza, mic, ninjaStar)
  } else if (event.target.closest('#micIcon')) {
    hideDiffIconShells(turtle, pizza, sewer, ninjaStar);
  } else {
    hideDiffIconShells(turtle, pizza, sewer, mic)
  }
}

function showCompIcon() {
  if (newGame.randomWeapon === 'rock' && newGame.human.weapon === 'rock') {
    unhideElement(compRock);
  } else if (newGame.randomWeapon === 'paper' && newGame.human.weapon === 'paper') {
    unhideElement(compPaper);
  } else if (newGame.randomWeapon === 'scissors' && newGame.human.weapon === 'scissors') {
    unhideElement(compScissors);
  } else if (newGame.randomWeapon === 'rock') {
    unhideElement(rockIcon)
  } else if (newGame.randomWeapon === 'paper') {
    unhideElement(paperIcon)
  } else {
    unhideElement(scissorsIcon)
  }
}

function showCompDiffIcon() {
  if (newGame.randomWeapon === 'Donatello') {
    unhideIconCompShell(compTurtle);
  } else if (newGame.randomWeapon === 'Pizza') {
    unhideIconCompShell(compPizza);
  } else if (newGame.randomWeapon === 'Sewer') {
    unhideIconCompShell(compSewer);
  } else if (newGame.randomWeapon === 'News Microphone') {
    unhideIconCompShell(compMic);
  } else {
    unhideIconCompShell(compNinjaStar)
  }
}

function changeToChooseGameText() {
  chooseWinText.innerText = 'Choose Your Game!'
}

function changeToClassicPickText() {
  chooseWinText.innerText = '⬇ Human Pick Your Weapon ⬇'
}

function changeToDiffPickText() {
  chooseWinText.innerText = '🥷🏽 Donatello, Pick Your Weapon 🥷🏽'
}

function changeToWinnerText() {
  if (newGame.gameWinner === 'DRAW') {
    chooseText.innerText = '🗑 Sorry, It Was A Draw! 🗑'
  } else if (newGame.gameWinner === 'Computer') {
    chooseText.innerText = '🤖 Machine Won This Round! 🤖'
  } else {
    chooseText.innerText = '🧠 Hooray, Much Human! 🧠'
  }
}

function changeToDiffWinnerText() {
  if (newGame.gameWinner === 'DRAW') {
    chooseText.innerText = '🥷🏽 Sorry, It Was A Draw! 👿'
  } else if (newGame.gameWinner === 'Computer') {
    chooseText.innerText = '👿 The Shredder Won This Round! 👿'
  } else {
    chooseText.innerText = '🥷  Donatello, You Did It! 🥷🏽 '
  }
}

// toggle and hide functions
function hideElement(element) {
  element.classList.toggle('hidden');
}

function unhideElement(element) {
  element.classList.toggle('hidden');
}

function unhideIconCompShell(icon) {
  icon.classList.toggle('hidden');
}

function hideDiffIconShells(icon1, icon2, icon3, icon4) {
  icon1.classList.toggle('hidden');
  icon2.classList.toggle('hidden');
  icon3.classList.toggle('hidden');
  icon4.classList.toggle('hidden');
}

function hideIconShells(icon1, icon2) {
  icon1.classList.toggle('hidden');
  icon2.classList.toggle('hidden');
}
