class Game {
  constructor() {
    this.human = new Player('Human')
    this.computer = new Player('Machine');
    this.type = 'Classic' || 'Difficult';
    this.randomWeapon = '';
  }

  gameType(button) {
    button === classicBtn ? this.type = 'Classic' : this.type = 'Difficult';
  }

  loadTokens() {
    if (this.type === 'Classic') {
      this.human.token = '🧠'
      this.computer.token = '🤖'
    } else {
      this.human.token = '🥷🏽'
      this.computer.token = '👿'
    }
  }

  loadWins() {
    this.human.wins = this.human.retrieveWinsFromStorage()
    this.computer.wins = this.computer.retrieveWinsFromStorage();
  }

  computerTurn() {
    var randomIndex = Math.floor(Math.random() * 3);
    if (randomIndex === 1) {
      this.randomWeapon = 'rock'
    } else if (randomIndex === 2) {
      this.randomWeapon = 'paper';
    } else {
      this.randomWeapon = 'scissors'
    }
  }

  computerDiffTurn() {
    var randomIndex = Math.floor(Math.random() * 5);
    if (randomIndex === 1) {
      this.randomWeapon = 'Donatello'
      this.computer.weapon = 'Donatello';
    } else if (randomIndex === 2) {
      this.randomWeapon = 'Pizza';
      this.computer.weapon = 'Pizza';
    } else if (randomIndex === 3) {
      this.randomWeapon = 'Sewer'
      this.computer.weapon = 'Sewer';
    } else if (randomIndex === 4) {
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

};
