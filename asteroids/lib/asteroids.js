// console.log("Webpack is working!");
const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");
// const Game = require('./game.js');

window.MovingObject = MovingObject;

function Asteroid(){
  let args = Array.from(arguments)[0];
  let option = {};
  [option.pos, option.vel, option.radius, option.color] = [args.pos, Util.randomVec(5), '10', 'brown'];
  MovingObject.call(this, option);
}

Util.inherits(Asteroid, MovingObject);
const canvasEl = document.getElementsByTagName("canvas")[0];
const ctx = canvasEl.getContext("2d");

let asteroid1 = new Asteroid({ pos: [50, 30] });
console.log(asteroid1);
asteroid1.draw(ctx);


module.export = Asteroid;
