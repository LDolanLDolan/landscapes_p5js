window.currentP5 = new p5((p) => {
  let paddle;
  let ball;
  let wallX;
  let bgColor;
  let showInstructions = true;
  let instructionsDuration = 180; // ~3 seconds

  p.setup = function () {
    p.createCanvas(800, 600);
    paddle = new Paddle();
    ball = new Ball();
    wallX = p.width;
    bgColor = p.color(0);
  };

  p.draw = function () {
    p.background(bgColor);

    if (showInstructions) {
      p.fill(255);
      p.textAlign(p.CENTER);
      p.textSize(18);
      p.text("Use ↑ and ↓ arrows to move the paddle", p.width / 2, p.height / 2 - 40);
      p.text("Don't let the ball get past you!", p.width / 2, p.height / 2 - 10);
      instructionsDuration--;
      if (instructionsDuration <= 0) {
        showInstructions = false;
      }
    }

    paddle.display();
    paddle.move();

    ball.display();
    ball.move();

    // Paddle collision
    if (ball.hits(paddle)) {
      ball.reverse();
      bgColor = p.color(p.random(255), p.random(255), p.random(255));
    }

    // Wall collision
    if (ball.x > wallX - ball.r) {
      ball.reverse();
    }

    // Missed paddle
    if (ball.x < 0) {
      p.noLoop();
      p.fill(255);
      p.textAlign(p.CENTER);
      p.textSize(32);
      p.text('Game Over', p.width / 2, p.height / 2);
    }
  };

  class Paddle {
    constructor() {
      this.w = 20;
      this.h = 100;
      this.x = 10;
      this.y = p.height / 2 - this.h / 2;
      this.yspeed = 7;
    }

    display() {
      p.fill(255);
      p.rect(this.x, this.y, this.w, this.h);
    }

    move() {
      if (p.keyIsDown(p.UP_ARROW)) {
        this.y -= this.yspeed;
      }
      if (p.keyIsDown(p.DOWN_ARROW)) {
        this.y += this.yspeed;
      }
      this.y = p.constrain(this.y, 0, p.height - this.h);
    }
  }

  class Ball {
    constructor() {
      this.r = 15;
      this.reset();
    }

    reset() {
      this.x = p.width / 2;
      this.y = p.height / 2;
      this.xspeed = 5;
      this.yspeed = 5;
    }

    display() {
      p.fill(255);
      p.ellipse(this.x, this.y, this.r * 2);
    }

    move() {
      this.x += this.xspeed;
      this.y += this.yspeed;

      if (this.y < this.r || this.y > p.height - this.r) {
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
}, 'sketch-holder');
