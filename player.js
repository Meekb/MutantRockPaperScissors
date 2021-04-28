class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    if (this.name === 'Human') {
      this.weapon = 'rock' || 'paper' || 'scissors'
    } else {
      this.weapon = 'TBD'
    }
  }

  takeTurn(iconId) {
    this.weapon = iconId;
    if (iconId === 'rock') {
      this.weapon = 'rock'
    } else if (iconId === 'paper') {
      this.weapon = 'paper'
    } else {
      this.weapon = 'scissors'
    }
  }

  takeDiffTurn(iconId) {
    this.weapon = iconId
    if (iconId === '#turtleIcon') {
      this.weapon = 'Donatello'
    } else if (iconId === '#pizzaIcon') {
      this.weapon = 'Pizza'
    } else if (iconId === '#sewerIcon') {
      this.weapon = 'Sewer'
    } else if (iconId === '#micIcon') {
      this.weapon = 'News Microphone'
    } else {
      this.weapon = 'Ninja Star'
    }
  }

  winIncrease() {
    this.wins++
    this.saveWinsToStorage()
  }

  saveWinsToStorage() {
    localStorage.setItem(this.name, this.wins)
  }

  retrieveWinsFromStorage() {
    this.wins = localStorage.getItem(this.name);
    return this.wins;
  }

};
