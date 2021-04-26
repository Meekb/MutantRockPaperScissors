// DOM VARIABLES
  // containers
var chooseScreen = document.getElementById('chooseContainer');
var difficultGameBoard = document.getElementById('difficultBoard');
var classicGameBoard = document.getElementById('classicBoard');
var diffTopRow = document.getElementById('diffTopRowIcons');
var diffBottomRow = document.getElementById('diffBottomRowIcons');
var humanWins = document.getElementById('humanWinCounter');
var compWins = document.getElementById('compWinCounter');
var asides = document.querySelectorAll('aside')
var main = document.querySelector('main');

  //buttons
var classicBtn = document.getElementById('classicBtn');
var difficultBtn = document.getElementById('difficultBtn');
var changeTypeBtn = document.getElementById('winScreenBtn');

  // innerText areas
var chooseWinText = document.getElementById('chooseText');

  // icons
var allIcons = document.querySelectorAll('img');
// var classicIcons = document.querySelectorAll('.classic-icons');
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
var compTurtle = document.getElementById('turtleIconComp');
var compPizza = document.getElementById('pizzaIconComp');
var compSewer = document.getElementById('sewerIconComp');
var compMic = document.getElementById('micIconComp');
var compNinjaStar = document.getElementById('ninjaStarIconComp');
var bottomRowIcons = document.getElementById('bottomRowIcons');

// GLOBAL VARIABLES
var newGame;

// EVENT LISTENERS
classicBtn.addEventListener('click', startClassicGame);
difficultBtn.addEventListener('click', startDifficultGame);
changeTypeBtn.addEventListener('click', backToBeginning);

// EVENT HANDLERS
//master game functions
function startClassicGame() {
  createGame();
  resetIcons();
  newGame.gameType();
  newGame.loadPlayerNames();
  newGame.loadTokens()
  newGame.loadWins();
  addListener();
  changeToGameScreen();
  changeToClassicPickText();
  console.log(newGame);
}

function startDifficultGame() {
  createGame();
  resetIcons()
  newGame.gameType();
  newGame.loadPlayerNames();
  newGame.loadTokens();
  newGame.loadWins();
  addListener();
  applyDiffLayout();
  changeToGameScreen();
  changeToDiffPickText();
  console.log(newGame);
}

function classicWinSequence() {
  newGame.computerTurn();
  newGame.checkHumanWeapon();
  newGame.determineClassicWinner();
  disableListener();
  changeToWinnerText();
  showHumanIcon();
  showCompIcon();
  unhideElement(changeTypeBtn);
  displayWins();
  resetClassicGameBoard();
  console.log(newGame);
}

function resetClassicGameBoard() {
  setTimeout(function () {
    changeToClassicPickText();
    resetIcons();
    addListener();
  }, 3000);
}


function difficultWinSequence() {
  newGame.computerDiffTurn();
  newGame.checkHumanWeapon();
  newGame.determineDiffWinner();
  disableListener();
  changeToDiffWinnerText();
  showHumanDiffIcon();
  showCompDiffIcon();
  unhideElement(changeTypeBtn);
  resetDiffGameBoard()
}

function resetDiffGameBoard() {
  setTimeout(function () {
    changeToDiffPickText();
    resetIcons()
    addListener();
  }, 3000);
}

function backToBeginning() {
  if (newGame.type !== 'Classic') {
    applyClassicLayout();
    // rehideCompDiffIcon()
    hideElement(changeTypeBtn);
    hideElement(classicGameBoard);
    unhideElement(chooseScreen);
    changeToChooseGameText()
  } else {
    hideElement(changeTypeBtn);
    hideElement(classicGameBoard);
    unhideElement(chooseScreen);
    changeToChooseGameText();
  }
}
function resetDiffGameBoard() {
  setTimeout(function () {
    addListener();
    changeToDiffPickText();
    resetIcons()
  }, 3000);
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
  humanWinCounter.innerText = newGame.displayableHumanWin();
  compWinCounter.innerText = newGame.displayableCompWin();
}

function resetIcons() {
  if (newGame.type === 'Classic') {
    for (var i = 0; i < allIcons.length; i++) {
      if (allIcons[i].classList.contains('comp') && !allIcons[i].classList.contains('hidden')){
        hideElement(allIcons[i])
      } else if (allIcons[i].classList.contains('ctri') && allIcons[i].classList.contains('hidden')) {
        unhideElement(allIcons[i]);
      }
    }
  } else {
    for (var i = 0; i < allIcons.length; i++) {
      if (allIcons[i].classList.contains('dcomp') && !allIcons[i].classList.contains('hidden')) {
        hideElement(allIcons[i])
      } else if (allIcons[i].classList.contains('dtri') && allIcons[i].classList.contains('hidden')) {
        unhideElement(allIcons[i]);
      }
    }
  }
}

function addListener() {
  if (newGame.type === 'Classic') {
    classicGameBoard.addEventListener('click', classicWinSequence);
  } else {
    difficultGameBoard.addEventListener('click', difficultWinSequence);
  }
}


function disableListener() {
  if (newGame.type === 'Classic') {
    classicGameBoard.removeEventListener('click', classicWinSequence);
  } else {
    difficultGameBoard.addEventListener('click', difficultWinSequence);
  }
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
  if (event.target.closest.id === 'turtleIcon') {
    hideDiffIconShells(pizza, sewer, mic, ninjaStar)
  } else if (event.target.closest.id === 'pizzaIcon') {
    hideDiffIconShells(turtle, sewer, mic, ninjaStar);
  } else if (event.target.closest.id === 'sewerIcon') {
    hideDiffIconShells(turtle, pizza, mic, ninjaStar)
  } else if (event.target.closest.id === 'micIcon') {
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
  if (newGame.randomWeapon === 'Turtle') {
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

function rehideCompIcon() {
  if (newGame.randomWeapon === 'rock') {
    hideElement(compRock);
  } else if (newGame.randomWeapon === 'paper') {
    hideElement(compPaper);
  } else {
    hideElement(compScissors);
  }
}

function rehideCompDiffIcon() {
  if (newGame.randomWeapon === 'Turtle') {
    hideElement(compTurtle);
  } else if (newGame.randomWeapon === 'Pizza') {
    hideElement(compPizza);
  } else if (newGame.randomWeapon === 'Sewer') {
    hideElement(compSewer);
  } else if (newGame.randomWeapon === 'News Microphone') {
    hideElement(compMic);
  } else {
    hideElement(compNinjaStar)
  }
}

function changeToChooseGameText() {
  chooseWinText.innerText = 'Choose Your Game!'
}

function changeToClassicPickText() {
  chooseWinText.innerText = '👇 Human Pick Your Weapon 👇'
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
    chooseText.innerText = '🔥  Hooray, Much Human! 🔥'
  }
}

function changeToDiffWinnerText() {
  if (newGame.gameWinner === 'DRAW') {
    chooseText.innerText = '🤮 Sorry, It Was A Draw! 🤮'
  } else if (newGame.gameWinner === 'Computer') {
    chooseText.innerText = '👺 The Shredder Won This Round! 👺'
  } else {
    chooseText.innerText = '🥷🏽  Donatello, You Did It! 🥷🏽 '
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

function unhideIconCompShell(icon) {
  icon.classList.toggle('hidden');
}

function hideDiffIconShells(icon1, icon2, icon3, icon4) {
  icon1.classList.toggle('hidden');
  icon2.classList.toggle('hidden');
  icon3.classList.toggle('hidden');
  icon4.classList.toggle('hidden');
}

function rehideCompShell(icon) {
  icon.classList.toggle('hidden');
}

function hideIconShells(icon1, icon2) {
  icon1.classList.toggle('hidden');
  icon2.classList.toggle('hidden');
}
