class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.weapon = 'rock' || 'paper' || 'scissors';
    this.wins = 0;
  }

  takeTurn() {
    if (event.target.id === 'rockIcon') {
      this.weapon = 'rock'
    } else if (event.target.id === 'paperIcon') {
      this.weapon = 'paper'
    } else {
      this.weapon = 'scissors'
    }
  }

  incrementHumanWins() {
    this.human.wins++
  }

  incrementCompWins() {
    this.computer.wins++
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
