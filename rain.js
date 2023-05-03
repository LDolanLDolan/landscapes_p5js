function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
    let i = 1;
    while (i<10){
   
      fill(0, 0, 255, 100)
      ellipse(80*i, height/2, random(10), random(10));
      ellipse(80*i, height/2, random(10), random(10));
      ellipse(80*i, height/2+100, random(10), random(10));
    i = i+1;
  }
  fill(0, 0, 150, 100);
  rect(0, height/2, width, height/2)
}

//code for use in https://editor.p5js.org to make a random display of rain faill