//
// Function.prototype.inherits = function(Parent) {
//   function Surrogate() {}
//   Surrogate.prototype = Parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };

function MovingObject (speed, mass) {
  this.speed = speed;
  this.mass = mass;
}

MovingObject.prototype.sayHello = function() {
  console.log('Hello!');
};

function Ship (speed, mass, color) {
  // console.log(speed, mass);
  MovingObject.call(this, speed, mass);
  this.color = color;
}

// Ship.inherits(MovingObject);
Ship.prototype = Object.create(MovingObject.prototype);
Ship.prototype.constructor = Ship;

Ship.prototype.fireEngine = function() {
  console.log(`We are going at ${this.speed} km/s, and our ship is painted ${this.color}`);
};

function Asteroid (speed, mass, name) {
  MovingObject.call(this, speed, mass);
  this.name = name;
}

// Asteroid.inherits(MovingObject);
Asteroid.prototype = Object.create(MovingObject.prototype);
Asteroid.prototype.constructor = Asteroid;

Asteroid.prototype.target = function() {
  console.log(`${this.name} is heading toward Earth at ${this.speed} km/s!`);
};


let moveingObject1 = new MovingObject(10, 100);
moveingObject1.sayHello();

let ship1 = new Ship(20, 200, "red");
ship1.fireEngine();
ship1.sayHello();

let asteroid1= new Asteroid(30, 300, "Ceres");
asteroid1.sayHello();
asteroid1.target();
















//
