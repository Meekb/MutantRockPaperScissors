class Game {
  constructor() {
    this.human = new Player()
    this.computer = new Player();
    this.type = 'Classic' || 'Difficult';
    this.randomWeapon = '';
  }

  gameType() {
    event.target.id === 'classicBtn' ? this.type = 'Classic' : this.type = 'Difficult';
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
    if (event.target.id === 'classicBtn') {
      this.human.token = '🧠'
      this.computer.token = '🤖'
    } else if (this.type === 'Difficult') {
      this.human.token = '🥷🏽'
      this.computer.token = '👿'
    }
  }

  checkHumanWeapon() {
    this.type === 'Classic' ? this.human.takeTurn() : this.human.takeDiffTurn()
  }

  computerTurn() {
    var randomIndex = Math.floor(Math.random() * 2);
    if (randomIndex === 0) {
      this.randomWeapon = 'rock'
    } else if (randomIndex === 1) {
      this.randomWeapon = 'paper';
    } else {
      this.randomWeapon = 'scissors'
    }
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
  }

  determineClassicWinner() {
    if (this.human.weapon === this.randomWeapon) {
      this.gameWinner = 'DRAW'
    } else if (this.human.weapon === 'rock' && this.randomWeapon === 'scissors') {
      this.gameWinner = 'Human'
      this.human.winIncrease();
    } else if (this.human.weapon === 'paper' && this.randomWeapon === 'rock') {
      this.gameWinner = 'Human'
      this.human.winIncrease();
    } else if (this.human.weapon === 'scissors' && this.randomWeapon === 'paper') {
      this.gameWinner = 'Human'
      this.human.winIncrease();
    } else {
      this.gameWinner = 'Computer'
      this.computer.winIncrease();
    }
  }

  determineDiffWinner() {
    if (this.human.weapon === this.randomWeapon) {
      this.gameWinner = 'DRAW'
      console.log(this.gameWinner)
    } else if (this.human.weapon === 'Turtle' && (this.randomWeapon === 'Pizza' || this.randomWeapon === 'News Microphone')) {
      this.gameWinner = 'Human'
      this.human.winIncrease();
    } else if (this.human.weapon === 'Sewer' && (this.randomWeapon === 'Turtle' || this.randomWeapon === 'Ninja Star')) {
      this.gameWinner = 'Human'
      this.human.winIncrease();
    } else if (this.human.weapon === 'Pizza' && (this.randomWeapon === 'Sewer' || this.randomWeapon === 'News Microphone')) {
      this.gameWinner = 'Human'
      this.human.winIncrease();
    } else if (this.human.weapon === 'News Microphone' && (this.randomWeapon === 'Sewer' || this.randomWeapon === 'Ninja Star')) {
      this.gameWinner = 'Human'
      this.human.winIncrease();
    } else if (this.human.weapon === 'Ninja Star' && (this.randomWeapon === 'Pizza' || this.randomWeapon === 'Turtle')) {
      this.gameWinner = 'Human'
      this.human.winIncrease();
    } else {
      this.gameWinner = 'Computer'
      this.computer.winIncrease();
    }
  }

  loadWins() {
    this.human.retrieveWinsFromStorage()
    this.computer.retrieveWinsFromStorage();
  }

};
