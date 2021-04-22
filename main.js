// DOM VARIABLES
var classicBtn = document.getElementById('classicBtn');
// GLOBAL VARIABLES
var newGame;
var playerStats = [];

// EVENT LISTENERS
classicBtn.addEventListener('click', startClassicGame)

// EVENT HANDLERS

//master game functions
function startClassicGame() {}



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
