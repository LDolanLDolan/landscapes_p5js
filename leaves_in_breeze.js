window.currentP5 = new p5((p) => {
  let startx = 100;
  let starty = 100;
  let lines = [];

  class FreshLine {
    constructor(startx, starty) {
      this.a = 50;
      this.b = 10;
      this.startx = startx;
      this.starty = starty;
    }

    draw() {
      p.push(); // Isolate transformations
      p.translate(this.startx, this.starty);
      p.rotate(1000); // Your original value
      p.fill(p.random(255));
      p.ellipse(0, 0, this.a, this.b);
      p.pop();
    }
  }

  p.setup = function () {
    p.createCanvas(400, 400);
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let newRect = new FreshLine(startx + i * 20, starty + j * 20);
        lines.push(newRect);
      }
    }
  };

  p.draw = function () {
    p.background(220);
    for (let line of lines) {
      line.draw();
    }
  };
}, 'sketch-holder');
