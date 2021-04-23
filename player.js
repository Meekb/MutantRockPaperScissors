class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
  }

  humanTurn() {
    if (event.target.id === 'rockIcon') {
      return 'rock'
    } else if (event.target.id === 'paperIcon') {
      return 'paper'
    } else {
      return 'scissors'
    }
  }

  computerTurn() {
    var computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 1) {
      var computerIcon = 'rock'
    } else if (computerChoice === 2) {
      computerIcon = 'paper'
    } else {
      computerIcon = 'scissors'
    }
    return computerIcon
  }

  saveWinsToStorage() {
    var humanWinsToStore =
    localStorage.setItem(JSON.stringify('storedHumanWins', newGame.human.wins));
    localStorage.setItem(JSON.stringify('storedCompWins', newGame.computer.wins));
  }

  retrieveWinsFromStorage() {
    var retrieveHumanWins =
    localStorage.getItem('storedHumanWins', newGame.human.wins);
    var retrieveCompWins =
    localStorage.getItem('storedCompWins', newGame.computer.wins);
  }

};
