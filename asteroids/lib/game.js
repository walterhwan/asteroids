console.log("Webpack is working");
const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");
const Asteroid = require('./asteroids.js');

function Game () {
  this.DIM_X = 1000;
  this.DIM_Y = 600;
  this.NUM_ASTEROIDS = 20;
  this.asteroids = [];

  for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.addAsteroids();
  }
}

Game.prototype.addAsteroids = function() {
  console.log(this.randomPosition());
  let asteroid = new Asteroid({ pos: [50, 30] });
  // let astroid = new Asteroid({ pos: this.randomPosition() });
  this.asteroids.push(asteroid);
};

Game.prototype.randomPosition = function () {
  let posX, posY;
  posX = Math.floor(Math.random() * this.DIM_X);
  posY = Math.floor(Math.random() * this.DIM_Y);

  return [posX, posY];
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.asteroids.forEach(el => {
    el.draw(ctx);
  });
};


const canvasEl = document.getElementsByTagName("canvas")[0];
const ctx = canvasEl.getContext("2d");

console.log("hi");
console.log(new Game().asteroids);
console.log(new Game().draw());

// module.export = Game;
