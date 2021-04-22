class Player {
  constructor(name, token, wins) {
    this.name = name;
    this.token = token;
    this.wins = wins;
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
