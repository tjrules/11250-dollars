// this imports a module
const gameObj = require('./modules');
// this imports json AND must be running JSON.parse()
const data = require('./data.json');


// instantiates a new instance of the Game class
const game = new gameObj;
game.increment()
console.log(game)
console.log(data)

