let startx = 100;
let starty = 100;
let lines = [];

class FreshLine {
  constructor(startx, starty) {
    this.a = 50; // Hard-coded width of the square
    this.b = 10; // Hard-coded height of the square
    this.startx = startx;
    this.starty = starty;
  }

  draw() {
    fill(random(255));
    ellipse(this.startx, this.starty, this.a, this.b);
    rotate(1000)
  }
}

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let newRect = new FreshLine(startx + i * 20, starty + j * 20);
      lines.push(newRect);
    }
  }
}

function draw() {
  background(220);
  for (let line of lines) {
    line.draw();
  }
}
