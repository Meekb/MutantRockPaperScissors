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
    if (localStorage === null) {
      this.human.humanWins = 0;
      this.computer.compWins = 0;
    } else {
      var humanWins = this.human.retrieveWinsFromStorage();
      var compWins = this.computer.retrieveWinsFromStorage();
      this.human.humanWins = humanWins;
      this.computer.compWins = compWins;
    }
  }

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
    var message;
    if (this.human.weapon === this.randomWeapon) {
      message = 'NOBODY WON...'
      this.gameWinner = 'DRAW'
    } else if (this.human.weapon === 'rock' && this.randomWeapon === 'paper') {
      message = 'computer WINS!'
      this.gameWinner = 'Computer'
    } else if (this.human.weapon === 'rock' && this.randomWeapon === 'scissors') {
      message = 'human WINS!'
      this.gameWinner = 'Human'
    } else if (this.human.weapon === 'paper' && this.randomWeapon === 'scissors') {
      message = 'computer WINS!'
      this.gameWinner = 'Computer'
    } else if (this.human.weapon === 'paper' && this.randomWeapon === 'rock') {
      message = 'human WINS!'
      this.gameWinner = 'Human'
    } else if (this.human.weapon === 'scissors' && this.randomWeapon === 'rock') {
      message = 'computer WINS!'
      this.gameWinner = 'Computer'
    } else if (this.human.weapon === 'scissors' && this.randomWeapon === 'paper') {
      message = 'human WINS!'
      this.gameWinner = 'Human'
    }
  }

  winCount () {
    if (this.gameWinner === 'Computer') {
      this.computer.compWins++
      this.computer.saveWinsToStorage()
    } else if (this.gameWinner === 'Human') {
      this.human.humanWins++
      this.human.saveWinsToStorage();
    }
  }


};
