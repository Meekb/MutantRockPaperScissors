class Game {
  constructor() {
    this.human = new Player()
    this.computer = new Player();
    this.type = 'Classic' || 'Difficult';
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
    // goal: refactor, if localStorage !== null, load the wins
    // if (localStorage === null) {
    //   this.human.wins = 0;
    //   this.computer.wins = 0;
    //   console.log('no storage!');
    // }
  }

  checkHumanWeapon() {
    this.human.takeTurn();
    console.log(this.human.weapon);
  }

  computerTurn() {
    var weapon = Math.floor(Math.random() * 3);
    var pick;
    if (weapon === 0) {
      pick = 'rock'
    } else if (weapon === 1) {
      pick = 'paper';
    } else {
      pick = 'scissors'
    }
    return pick;
  }

  determineWinner() {
    if (this.human.humanWeapon === this.computerTurn()) {
      console.log('NOBODY WON...')
    } else if (this.human.humanWeapon === 'rock' && this.computerTurn() === 'paper') {
      this.computer.incrementCompWins();
    } else if (this.human.humanWeapon === 'rock' && this.computerTurn() === 'scissors') {
      this.human.incrementHumanWins();
    } else if (this.human.humanWeapon === 'paper' && this.computerTurn() === 'scissors') {
      this.computer.incrementCompWins();
    } else if (this.human.humanWeapon === 'paper' && this.computerTurn() === 'rock') {
      this.human.incrementHumanWins();
    } else if (this.human.humanWeapon === 'scissors' && this.computerTurn() === 'rock') {
      this.computer.incrementCompWins();
    } else if (this.human.humanWeapon === 'scissors' && this.computerTurn() === 'paper') {
      this.human.incrementHumanWins();
    }
  }


};
