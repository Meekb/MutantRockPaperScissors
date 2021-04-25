class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    if (this.name === 'Human') {
      this.weapon = 'rock' || 'paper' || 'scissors'
    } else {
      this.weapon = 'Machine\'s random weapon'
    }
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

  winIncrease() {
    this.wins++
  }

  drawScenarioWins() {
    this.wins += 0;
  }

  saveWinsToStorage() {
    if (this.name === 'Human') {
      var humanWinsToStore = this.wins;
      var stringifiedWins = JSON.stringify(humanWinsToStore);
      localStorage.setItem(JSON.stringify('storedHumanWins'), stringifiedWins);
    } else {
      var compWinsToStore = this.wins;
      var stringifiedCompWins = JSON.stringify(compWinsToStore);
      localStorage.setItem(JSON.stringify('storedCompWins'), stringifiedCompWins);
      console.log(localStorage);
    }
  }

  retrieveWinsFromStorage() {
    if (this.name === 'Human') {
      var retrievedHumanWins = localStorage.getItem('storedHumanWins');
      var humanWins = JSON.parse(retrievedHumanWins);
      humanWins = this.wins;
      return humanWins
    } else {
      var retrievedCompWins = localStorage.getItem('storedCompWins');
      var compWins = JSON.parse(retrievedCompWins);
      compWins = this.wins;
      return compWins
    }
  }

};
