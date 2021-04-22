// DOM VARIABLES

// GLOBAL VARIABLES
var newGame;
var playerStats = [];

// EVENT LISTENERS


// EVENT HANDLERS

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
