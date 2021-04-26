class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    if (this.name === 'Human') {
      this.weapon = 'rock' || 'paper' || 'scissors'
    } else {
      this.weapon = 'Machine\'s random weapon'
    }
  }

  takeTurn() {
    if (event.target.id === 'rockIcon') {
      this.weapon = 'rock'
    } else if (event.target.id === 'paperIcon') {
      this.weapon = 'paper'
    } else {
      this.weapon = 'scissors'
    }
    console.log(this.weapon)
  }

  takeDiffTurn() {
    if (event.target.closest('#turtleIcon')) {
      this.weapon = 'Donatello'
    } else if (event.target.closest('#pizzaIcon')) {
      this.weapon = 'Pizza'
    } else if (event.target.closest('#sewerIcon')) {
      this.weapon = 'Sewer'
    } else if (event.target.closest('#micIcon')) {
      this.weapon = 'News Microphone'
    } else {
      this.weapon = 'Ninja Star'
    }
    console.log(this.weapon)
  }

  winIncrease() {
    this.wins++
    this.saveWinsToStorage()
  }

  saveWinsToStorage() {
    localStorage.setItem(this.name, this.wins)
  }

  retrieveWinsFromStorage() {
    this.wins = +localStorage.getItem(this.name) || 0;
  }

};
