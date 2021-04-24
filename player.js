class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
  }

  evaluateHumanTurn() {
    var humanPick;
    if (event.target.id === 'rockIcon') {
      humanPick = 'rock'
    } else if (event.target.id === 'paperIcon') {
      humanPick = 'paper'
    } else {
      humanPick = 'scissors'
    }
    console.log('running humanTurn() now --->', humanPick)
  }

  adjustWins() {
    this.determineWinner() === 'Human' ? this.human.wins++ : this.computer.wins++
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
