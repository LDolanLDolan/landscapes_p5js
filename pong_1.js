let paddle;
let ball;
let wallX;
let bgColor;
let showInstructions = true;
let instructionsDuration = 180; // frames (~3 seconds)

function setup() {
  createCanvas(800, 600);
  paddle = new Paddle();
  ball = new Ball();
  wallX = width;
  bgColor = color(0);
}

function draw() {
  background(bgColor);

  if (showInstructions) {
    fill(255);
    textAlign(CENTER);
    textSize(18);
    text("Use ↑ and ↓ arrows to move the paddle", width / 2, height / 2 - 40);
    text("Don't let the ball get past you!", width / 2, height / 2 - 10);
    instructionsDuration--;
    if (instructionsDuration <= 0) {
      showInstructions = false;
    }
  }

  paddle.display();
  paddle.move();

  ball.display();
  ball.move();

  // Check for collision with the paddle
  if (ball.hits(paddle)) {
    ball.reverse();
    bgColor = color(random(255), random(255), random(255)); // change background color
  }

  // Check for collision with the wall
  if (ball.x > wallX - ball.r) {
    ball.reverse();
  }

  // Check if the ball misses the paddle
  if (ball.x < 0) {
    noLoop();
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text('Game Over', width / 2, height / 2);
  }
}

class Paddle {
  constructor() {
    this.w = 20;
    this.h = 100;
    this.x = 10;
    this.y = height / 2 - this.h / 2;
    this.yspeed = 7;
  }

  display() {
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }

  move() {
    // Add key detection outside draw()
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.yspeed;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.yspeed;
    }

    // Keep the paddle inside the canvas
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
      this.x - this.r < paddle.x + paddle.w &&
      this.x > paddle.x
    );
  }
}
