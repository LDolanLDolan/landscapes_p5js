let colour = 100;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function mousePressed(){
  colour = random(255);
}

function draw() {
  fill(colour);
  circle(mouseX, mouseY, 40)
}

//code for use in https://editor.p5js.org to make an interactive drawing pad