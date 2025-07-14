function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(200);
  let i = 0;
  while (i<10){
     fill(0, 0, 255, 10)
      rect(80*i, height/2-20, random(20), random(20));
     fill(0, 0, 255, 100)
      rect(80*i, height/2-20, random(10), random(10));
    fill(0, 0, 255, 10)
      rect(80*i, height/2, random(20), random(20));
     fill(0, 0, 255, 100)
      rect(80*i, height/2, random(10), random(10));
    
    i = i+1;
  }
  fill(0, 0, 150, 100);
  rect(0, height/2, width, height/2)
  
}
  
