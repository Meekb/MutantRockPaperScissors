class Game {
  constructor() {
    this.human = new Player();
    this.computer = new Player();
    this.type = 'Classic' || 'Difficult';
  }

  gameType() {
    if (event.target.id === 'classicBtn') {
      newGame.type = 'Classic'
    } else {
      newGame.type = 'Difficult'
    }
  }

  loadPlayerNames() {
    if (newGame.type === 'Classic') {
      newGame.human.name = 'Human';
      newGame.computer.name = 'Machine';
    } else {
      newGame.human.name = 'Donatello';
      newGame.computer.name = 'Shredder'
    }
  }

  loadTokens() {
    if (newGame.type === 'Classic') {
      newGame.human.token = '🧠'
      newGame.computer.token = '🤖'
    } else if (newGame.type === 'Difficult') {
      console.log('nope')
      newGame.human.token = '🥷🏽'
      newGame.computer.token = '🤮'
    }
  }

  loadWins() {
    if (localStorage === null) {
      newGame.human.wins = 0;
      newGame.computer.wins = 0;
      console.log('no storage!');
    }
  }

  computerChoice() {
    var computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 1) {
      var computerIcon = 'rock'
    } else if (computerChoice === 2) {
      computerIcon = 'paper'
    } else {
      computerIcon = 'scissors'
    }
    console.log(computerIcon)
  }

  determineWinner() {
    var winner;
    if (humanChoice() === newGame.computerChoice()) {
      winner = 'DRAW'
      console.log('It\'s a draw!!!');
      return winner
    } else if (humanChoice() === 'rock' && newGame.computerChoice() === 'paper') {
      winner = 'Computer'
      console.log('Computer WINS!!!');
      return winner
    } else if (humanChoice() === 'rock' && newGame.computerChoice() === 'scissors') {
      winner = 'Human'
      console.log('Human WINS!!!');
      return winner
    } else if (humanChoice() === 'paper' && newGame.computerChoice() === 'scissors') {
      winner = 'Computer'
      console.log('Computer WINS!!!');
      return winner
    } else if (humanChoice() === 'paper' && newGame.computerChoice() === 'rock') {
      winner = 'Human'
      console.log('Human WINS!!!');
      return winner
    } else if (humanChoice() === 'scissors' && newGame.computerChoice() === 'rock') {
      winner = 'Computer'
      console.log('Conmputer WINS!!!');
      return winner
    } else if (humanChoice() === 'scissors' && newGame.computerChoice() === 'paper') {
      winner = 'Human'
      console.log('Human WINS!!!');
      return winner
    }
  }

  adjustWins() {
    determineWinner() === 'Human' ? newGame.human.wins++ : this.computer.wins++
  }

};
