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
