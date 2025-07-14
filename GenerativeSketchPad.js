let colour = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function mousePressed() {
  colour = random(255);
}

function draw() {
  fill(colour);
  circle(mouseX, mouseY, 40);
}
