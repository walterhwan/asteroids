/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function MovingObject() {
  let args = Array.from(arguments)[0];
  [this.pos, this.vel, this.radius, this.color] = [args.pos, args.vel, args.radius, args.color];
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

MovingObject.prototype.move = function() {
  let xPos = this.pos[0] + this.vel[0];
  let yPos = this.pos[1] + this.vel[1];
  this.pos = [xPos, yPos];
};

const canvasEl = document.getElementsByTagName("canvas")[0];
const ctx = canvasEl.getContext("2d");

const mo = new MovingObject(
  { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
);

mo.draw(ctx);
module.exports = MovingObject;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

const Util = {
  inherits(childClass, parentClass) {
    childClass.prototype = Object.create(parentClass.prototype);
    childClass.prototype.constructor = childClass;
  },

  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};

module.exports = Util;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

console.log("Webpack is working");
const MovingObject = __webpack_require__(0);
const Util = __webpack_require__(1);
const Asteroid = __webpack_require__(3);

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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {// console.log("Webpack is working!");
const MovingObject = __webpack_require__(0);
const Util = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);