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
      // console.log('nope')
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

  computerTurn() {
    var computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
    // return computerChoice
  }

  determineWinner() {
    var winner;
    var compPick = this.computerTurn()
    var humanPick = this.human.evaluateHumanTurn();
    if (humanPick === compPick) {
      winner = 'DRAW'
    } else if (humanPick === 'rock' && compPick === 1) {
      winner = 'Computer'
    } else if (humanPick === 'rock' && compPick === 2) {
      winner = 'Human'
    } else if (humanPick === 'paper' && compPick === 2) {
      winner = 'Computer'
    } else if (humanPick === 'paper' && compPick === 0) {
      winner = 'Human'
    } else if (humanPick === 'scissors' && compPick === 0) {
      winner = 'Computer'
    } else if (humanPick === 'scissors' && compPick === 1) {
      winner = 'Human'
    }
    console.log(winner);
    return
  }


};
