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
      console.log('nope')
      this.human.token = '🥷🏽'
      this.computer.token = '🤮'
    }
  }

  loadWins() {
    if (localStorage === null) {
      this.human.wins = 0;
      this.computer.wins = 0;
      console.log('no storage!');
    }
  }

  // computerChoice() {
  //   var computerChoice = Math.floor(Math.random() * 3);
  //   if (computerChoice === 1) {
  //     var computerIcon = 'rock'
  //   } else if (computerChoice === 2) {
  //     computerIcon = 'paper'
  //   } else {
  //     computerIcon = 'scissors'
  //   }
  //   console.log(computerIcon)
  // }

  determineWinner() {
    var winner;
    if (this.human.takeTurn() === this.computer.computerChoice()) {
      winner = 'DRAW'
      console.log('It\'s a draw!!!');
      return winner
    } else if (this.human.takeTurn() === 'rock' && this.computer.computerChoice() === 'paper') {
      winner = 'Computer'
      console.log('Computer WINS!!!');
      return winner
    } else if (this.human.takeTurn() === 'rock' && this.computer.computerChoice() === 'scissors') {
      winner = 'Human'
      console.log('Human WINS!!!');
      return winner
    } else if (this.human.takeTurn() === 'paper' && this.computer.computerChoice() === 'scissors') {
      winner = 'Computer'
      console.log('Computer WINS!!!');
      return winner
    } else if (this.human.takeTurn() === 'paper' && this.computer.computerChoice() === 'rock') {
      winner = 'Human'
      console.log('Human WINS!!!');
      return winner
    } else if (this.human.takeTurn() === 'scissors' && this.computer.computerChoice() === 'rock') {
      winner = 'Computer'
      console.log('Conmputer WINS!!!');
      return winner
    } else if (this.human.takeTurn() === 'scissors' && this.computer.computerChoice() === 'paper') {
      winner = 'Human'
      console.log('Human WINS!!!');
      return winner
    }
  }

  adjustWins() {
    // this.determineWinner() === 'DRAW' ? 
    this.determineWinner() === 'Human' ? this.human.wins++ : this.computer.wins++
  }

};
