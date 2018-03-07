class Game {
  constructor() {
    this.counter = 0;
  }
  increment() {
    this.counter += 1;
  }
}

// this exports the module when used with require
module.exports = Game;
