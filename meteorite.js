window.currentP5 = new p5((p) => {
  let blobs = [];
  let direction = 1;
  let promptShown = false;

  const colors = [
    p.color(255, 0, 0),     // Red
    p.color(255, 165, 0),   // Orange
    p.color(255, 255, 0),   // Yellow
    p.color(0, 255, 0),     // Green
    p.color(0, 0, 255),     // Blue
    p.color(75, 0, 130),    // Indigo
    p.color(148, 0, 211)    // Violet
  ];

  class MeteorBlob {
    constructor(x, col) {
      this.pos = p.createVector(x, p.random(-100, -20));
      this.vel = p.createVector(p.random(-0.3, 0.3), p.random(1, 2));
      this.size = p.random(8, 14);
      this.col = col;
    }

    update() {
      this.pos.add(p5.Vector.mult(this.vel, direction));

      // Reset when off screen
      if (this.pos.y > p.height + 20 || this.pos.y < -20) {
        this.pos.y = direction > 0 ? -20 : p.height + 20;
        this.pos.x = p.random(p.width);
      }
    }

    show() {
      p.noStroke();
      p.fill(this.col);
      p.ellipse(this.pos.x, this.pos.y, this.size);
    }
  }

  p.setup = function () {
    p.createCanvas(400, 400);
    p.colorMode(p.RGB);
    p.background(255);

    // Create 7 vertical meteor blobs (rainbow)
    for (let i = 0; i < colors.length; i++) {
      let x = (i + 1) * (p.width / 8);
      blobs.push(new MeteorBlob(x, colors[i]));
    }
  };

  p.draw = function () {
    // Transparent background for trailing effect
    p.background(255, 20);

    for (let blob of blobs) {
      blob.update();
      blob.show();
    }

    // After 10 seconds, show prompt
    if (p.frameCount > 600) {
      promptShown = true;
    }

    if (promptShown) {
      let yFloat = 30 + p.sin(p.frameCount * 0.02) * 5;
      p.fill(50, 80);
      p.noStroke();
      p.textSize(12);
      p.textAlign(p.CENTER);
      p.text("Click to reverse the flow", p.width / 2, yFloat);
    }
  };

  p.mousePressed = function () {
    direction *= -1;
  };
}, 'sketch-holder');
