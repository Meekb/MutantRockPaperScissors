class Game {
  constructor() {
    this.human = new Player()
    this.computer = new Player();
    this.type = 'Classic' || 'Difficult';
    this.randomWeapon = '';
  }

  gameType() {
    if (event.target.id === 'classicBtn') {
      this.type = 'Classic'
    } else {
      this.type = 'Difficult'
    }
  }

  loadPlayerNames() {
    if (this.type === 'Classic') {
      this.human.name = 'Human';
      this.computer.name = 'Machine';
    } else {
      this.human.name = 'Donatello';
      this.computer.name = 'Shredder'
    }
  }

  loadTokens() {
    if (this.type === 'Classic') {
      this.human.token = '🧠'
      this.computer.token = '🤖'
    } else if (this.type === 'Difficult') {
      this.human.token = '🥷🏽'
      this.computer.token = '🤮'
    }
  }

  loadWins() {
    if (!localStorage) {
      this.human.wins = 0;
      this.computer.wins = 0;
    } else {
      this.human.retrieveWinsFromStorage();
      this.computer.retrieveWinsFromStorage();
    }
  }

  displayableHumanWin() {
    var hw = this.human.wins.toString();
    return hw;
  }

  displayableCompWin() {
    var cw = this.computer.wins.toString();
    return cw;
  }
  //     var humanWins = this.human.retrieveWinsFromStorage();
  //     var compWins = this.computer.retrieveWinsFromStorage();
  //     this.human.humanWins = humanWins;
  //     this.computer.compWins = compWins;
  //   }
  // }

  checkHumanWeapon() {
    this.human.takeTurn();
    console.log(this.human.weapon);
  }

  computerTurn() {
    var randomIndex = Math.floor(Math.random() * 2);
    if (randomIndex === 0) {
      this.randomWeapon = 'rock'
      this.computer.weapon = undefined;
    } else if (randomIndex === 1) {
      this.randomWeapon = 'paper';
      this.computer.weapon = undefined;
    } else {
      this.randomWeapon = 'scissors'
      this.computer.weapon = undefined;
    }
    console.log(this.randomWeapon);
  }

  determineClassicWinner() {
    if (this.human.weapon === this.randomWeapon) {
      this.gameWinner = 'DRAW'
      this.computer.drawScenarioWins();
      this.human.drawScenarioWins();
      this.human.saveWinsToStorage()
      this.computer.saveWinsToStorage();
    } else if (this.human.weapon === 'rock' && this.randomWeapon === 'paper') {
      this.gameWinner = 'Computer'
      this.computer.winIncrease()
      this.computer.winIncrease()
    } else if (this.human.weapon === 'rock' && this.randomWeapon === 'scissors') {
      this.gameWinner = 'Human'
      this.human.winIncrease();
      this.human.saveWinsToStorage()
    } else if (this.human.weapon === 'paper' && this.randomWeapon === 'scissors') {
      this.gameWinner = 'Computer'
      this.computer.winIncrease()
      this.computer.winIncrease()
    } else if (this.human.weapon === 'paper' && this.randomWeapon === 'rock') {
      this.gameWinner = 'Human'
      this.human.winIncrease();
      this.human.saveWinsToStorage()
    } else if (this.human.weapon === 'scissors' && this.randomWeapon === 'rock') {
      this.gameWinner = 'Computer'
      this.computer.winIncrease()
      this.computer.saveWinsToStorage()
    } else if (this.human.weapon === 'scissors' && this.randomWeapon === 'paper') {
      this.gameWinner = 'Human'
      this.human.winIncrease();
      this.human.saveWinsToStorage()
    }
  }

};
