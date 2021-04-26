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
      console.log('NO STORAGE')
    } else {
      console.log(this.human.retrieveWinsFromStorage());
      this.human.retrieveWinsFromStorage()
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

  checkHumanWeapon() {
    if (this.type === 'Classic') {
      this.human.takeTurn();
    } else {
      this.human.takeDiffTurn();
    }
    console.log('Human Weapon', this.human.weapon);
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

  computerDiffTurn() {
    var randomIndex = Math.floor(Math.random() * 4);
    if (randomIndex === 0) {
      this.randomWeapon = 'Donatello'
      this.computer.weapon = 'Donatello';
    } else if (randomIndex === 1) {
      this.randomWeapon = 'Pizza';
      this.computer.weapon = 'Pizza';
    } else if (randomIndex === 2) {
      this.randomWeapon = 'Sewer'
      this.computer.weapon = 'Sewer';
    } else if (randomIndex === 3) {
      this.randomWeapon = 'News Microphone'
      this.computer.weapon === 'News Microphone'
    } else {
      this.randomWeapon = 'Ninja Star'
      this.computer.weapon = 'Ninja Star'
    }
    console.log('Shredder\'s Weapon', this.randomWeapon);
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

  determineDiffWinner() {
    if (this.human.weapon === this.randomWeapon) {
      this.gameWinner = 'Drats, Donnie! It\'s a draw!'
      this.computer.drawScenarioWins();
      this.human.drawScenarioWins();
      this.human.saveWinsToStorage()
      this.computer.saveWinsToStorage();
    } else if (this.human.weapon === 'Turtle' && (this.randomWeapon === 'Pizza' || this.randomWeapon === 'News Microphone')) {
      this.gameWinner = 'Human'
      this.human.winIncrease()
      this.human.winIncrease()
    } else if (this.human.weapon === 'Sewer' && (this.randomWeapon === 'Turtle' || this.randomWeapon === 'Ninja Star')) {
      this.gameWinner = 'Human'
      this.human.winIncrease();
      this.human.saveWinsToStorage()
    } else if (this.human.weapon === 'Pizza' && (this.randomWeapon === 'Sewer' || this.randomWeapon === 'News Microphone')) {
      this.gameWinner = 'Human'
      this.human.winIncrease()
      this.human.winIncrease()
    } else if (this.human.weapon === 'News Microphone' && (this.randomWeapon === 'Sewer' || this.randomWeapon === 'Ninja Star')) {
      this.gameWinner = 'Human'
      this.human.winIncrease();
      this.human.saveWinsToStorage()
    } else if (this.human.weapon === 'Ninja Star' && (this.randomWeapon === 'Pizza' || this.randomWeapon === 'Turtle')) {
      this.gameWinner = 'Human'
      this.human.winIncrease()
      this.human.saveWinsToStorage()
    } else {
      this.gameWinner = 'Computer'
      this.computer.winIncrease();
      this.computer.saveWinsToStorage()
    }
  }

};
