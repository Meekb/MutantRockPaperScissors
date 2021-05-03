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
changeTypeBtn.addEventListener('click', goBackToMainMenu);
classicBtn.addEventListener('click', start);
difficultBtn.addEventListener('click', start);

// EVENT HANDLERS
//master game functions

function start() {
  startGame(event);
}

function startGame(event) {
  if (event.target.id === 'classicBtn') {
    resetIcons();
    newGame.gameType(classicBtn);
    newGame.loadTokens()
    newGame.loadWins();
    displayWins();
    addListener();
    changeToGameScreen();
    changeToClassicPickText();
  } else {
    resetIcons();
    newGame.gameType();
    newGame.loadTokens();
    newGame.loadWins();
    displayWins();
    addListener();
    applyDiffLayout();
    changeToGameScreen();
    changeToDiffPickText();
  }
}

function runWinSequence(type) {
  type = newGame.type;
  if (newGame.type === 'Classic') {
    removeListener();
    newGame.computerTurn();
    takePlayerTurn();
    newGame.determineClassicWinner();
    newGame.loadWins();
    displayWins();
    changeToWinnerText();
    showHumanIcon();
    showCompIcon();
    resetGameBoard();
  } else {
    removeListener();
    newGame.computerDiffTurn();
    takePlayerDiffTurn();
    newGame.determineDiffWinner();
    newGame.loadWins()
    changeToDiffWinnerText();
    displayWins();
    showHumanDiffIcon();
    showCompDiffIcon();
    resetGameBoard()
  }
}

function resetGameBoard(type) {
  if (newGame.type === 'Classic') {
    setTimeout(function () {
      changeToClassicPickText();
      resetIcons();
      addListener();
    }, 1200);
    if (changeTypeBtn.classList.contains('hidden')) {
      unhideElement(changeTypeBtn);
    }
  } else {
    setTimeout(function () {
      changeToDiffPickText();
      resetIcons()
      addListener();
    }, 1200);
    if (changeTypeBtn.classList.contains('hidden')) {
      unhideElement(changeTypeBtn);
    }
  }
}

function goBackToMainMenu() {
  switch (newGame.type) {

    case 'Difficult':
    applyClassicLayout();
    hideElement(changeTypeBtn);
    hideElement(difficultGameBoard);
    unhideElement(chooseScreen);
    createGame();
    changeToChooseGameText()
    break;

    case 'Classic':
    hideElement(changeTypeBtn);
    hideElement(classicGameBoard);
    unhideElement(chooseScreen);
    createGame()
    changeToChooseGameText();
  }
}

// function goBackToMainMenu() {
//   if (newGame.type === 'Difficult') {
    // applyClassicLayout();
    // hideElement(changeTypeBtn);
    // hideElement(difficultGameBoard);
    // unhideElement(chooseScreen);
    // createGame();
    // changeToChooseGameText()
//   } else {
    // hideElement(changeTypeBtn);
    // hideElement(classicGameBoard);
    // unhideElement(chooseScreen);
    // createGame()
    // changeToChooseGameText();
//   }
// }

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

function takePlayerTurn(iconId) {
  if (event.target.id === 'rockIcon') {
    newGame.human.takeTurn('rock')
  } else if (event.target.id === 'paperIcon') {
    newGame.human.takeTurn('paper')
  } else {
    newGame.human.takeTurn('scissors')
  }
}

function takePlayerDiffTurn(iconId) {
  if (event.target.closest('#turtleIcon')) {
    newGame.human.takeDiffTurn('#turtleIcon')
  } else if (event.target.closest('#pizzaIcon')) {
    newGame.human.takeDiffTurn('#pizzaIcon')
  } else if (event.target.closest('#sewerIcon')) {
    newGame.human.takeDiffTurn('#sewerIcon')
  } else if (event.target.closest('#micIcon')) {
    newGame.human.takeDiffTurn('#micIcon')
  } else {
    newGame.human.takeDiffTurn('#ninjaStarIcon')
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

function resetIcons() {
  allIcons.forEach(icon => {
    if (icon.classList.contains('comp') && !icon.classList.contains('hidden')) {
    hideElement(icon);
  } else if (icon.classList.contains('ctri') && icon.classList.contains('hidden')) {
    unhideElement(icon);
  } else if (icon.classList.contains('dcomp') && !icon.classList.contains('hidden')) {
    hideElement(icon);
  } else if (icon.classList.contains('dtri') && icon.classList.contains('hidden')) {
    unhideElement(icon);
  }
 });
}

function addListener() {
  newGame.type === 'Classic' ? classicGameBoard.addEventListener('click', runWinSequence) : difficultGameBoard.addEventListener('click', runWinSequence)
}

function removeListener() {
  newGame.type === 'Classic' ? classicGameBoard.removeEventListener('click', runWinSequence) : difficultGameBoard.removeEventListener('click', runWinSequence)
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
  chooseWinText.innerText = 'Human, Choose Your Game!'
}

function changeToClassicPickText() {
  chooseWinText.innerText = '⬇ Human, Pick Weapon ⬇'
}

function changeToDiffPickText() {
  chooseWinText.innerText = '🥷🏽 Donatello, Pick Your Weapon 🥷🏽'
}

function changeToWinnerText() {
  if (newGame.gameWinner === 'DRAW') {
    chooseText.innerText = '🗑 Sorry, It Was A Draw! 🗑'
  } else if (newGame.gameWinner === 'Computer') {
    chooseText.innerText = '🤖 Machine WOW! Much Win! 🤖'
  } else {
    chooseText.innerText = '🧠 Hooray! Much Human! Most WOW! 🧠'
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
