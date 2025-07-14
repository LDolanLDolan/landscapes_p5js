
let paddle;
let ball;
let wallX;

function setup() {
  createCanvas(800, 600);
  paddle = new Paddle();
  ball = new Ball();
  wallX = width;
}

function draw() {
  background(0);
  paddle.display();
  paddle.move();

  ball.display();
  ball.move();

  // Check for collision with the paddle
  if (ball.hits(paddle)) {
    ball.reverse();
  }

  // Check for collision with the wall
  if (ball.x > wallX - ball.r) {
    ball.reverse();
  }

  // Check if the ball misses the paddle
  if (ball.x < 0) {
    noLoop();
    textSize(32);
    fill(255);
    text('Game Over', width / 2 - 100, height / 2);
  }
}

class Paddle {
  constructor() {
    this.w = 20;
    this.h = 100;
    this.x = 10;
    this.y = height / 2 - this.h / 2;
    this.yspeed = 10;
  }

  display() {
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }

  move() {
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.yspeed;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.y += this.yspeed;
    }

    // Keep the paddle within the canvas
    this.y = constrain(this.y, 0, height - this.h);
  }
}

class Ball {
  constructor() {
    this.r = 15;
    this.reset();
  }

  reset() {
    this.x = width / 2;
    this.y = height / 2;
    this.xspeed = 5;
    this.yspeed = 5;
  }

  display() {
    fill(255);
    ellipse(this.x, this.y, this.r * 2);
  }

  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;

    if (this.y < this.r || this.y > height - this.r) {
      this.yspeed *= -1;
    }
  }

  reverse() {
    this.xspeed *= -1;
  }

  hits(paddle) {
    return (
      this.y > paddle.y &&
      this.y < paddle.y + paddle.h &&
      this.x - this.r < paddle.x + paddle.w
    );
  }
}

