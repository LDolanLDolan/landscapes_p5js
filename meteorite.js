

function setup() {
  createCanvas(400, 400);
v1 = createVector(40, 20);
  v2 = createVector(25, 50);   
}

function draw() {
  background(220);


  ellipse(v1.x, v1.y, 12, 12);
  ellipse(v2.x, v2.y, 12, 12);
  v2.add(v1);
  ellipse(v2.x, v2.y, 24, 24);
}  
  

