class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.humanWins = 0;
    this.compWins = 0;
    if (this.name === 'Human') {
      this.weapon = 'rock' || 'paper' || 'scissors'
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

  saveWinsToStorage() {
    var humanWinsToStore = this.humanWins;
    var stringifiedWins = JSON.stringify(humanWinsToStore);
    localStorage.setItem(JSON.stringify('storedHumanWins'), stringifiedWins);
    var compWinsToStore = this.compWins;
    var stringifiedCompWins = JSON.stringify(compWinsToStore);
    localStorage.setItem(JSON.stringify('storedCompWins'), stringifiedCompWins);
    console.log(localStorage);
  }

  // var retrievedObject = localStorage.getItem('somethingComplicated');
  // retrievedObject (Notice this is still the stringified version of our object - we need it to be a real object again, not a string)
  // var parsedObject = JSON.parse(retrievedObject);
  // parsedObject (We are now back to our original object!)

  retrieveWinsFromStorage() {
    if (this.human.name === 'Human') {
      var retrievedHumanWins = localStorage.getItem('storedHumanWins');
      var humanWins = JSON.parse(retrievedHumanWins);
      humanWins = this.humanWins;
      return humanWins
    } else {
      var retrievedCompWins = localStorage.getItem('storedCompWins');
      var compWins = JSON.parse(retrievedCompWins);
      compWins = this.compWins;
      return compWins
    }
  }

};
