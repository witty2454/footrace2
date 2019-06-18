class DiceSet {
  constructor() {
    this.sides = 6;
    this.quantity = 2;
    this.history = [];
    this.runningTotal = 0;
  }

  singleRoll() {
    return Math.floor(Math.random() * this.sides + 1);
  }

  setNumSides(numSides) {
    this.sides = numSides;
    this.reset();
  }

  setDiceSetSize(numDice) {
    this.quantity = numDice;
    this.reset();
  }

  reset() {
    this.history = [];
    this.runningTotal = 0;
  }

  numRolls() {
    return this.history.length;
  }

  getAverage() {
    return this.runningTotal / this.history.length;
  }

  roll() {
    var total, same, rollSet, i;
    same = true;
    rollSet = [];
    rollSet[0] = this.singleRoll();
    total = rollSet[0];
    for (i = 1; i < this.quantity; i++) {
      rollSet[i] = this.singleRoll();
      total += rollSet[i];
      if (rollSet[i] !== rollSet[i-1]) {
        same = false;
      }
    }
    this.history.push(total);
    this.runningTotal += total;
    return rollSet;
    

  }
}
