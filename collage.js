let OneImage;
let TwoImage;
let ThreeImage;
let FourImage;

function setup() {
  createCanvas(400, 400);
  OneImage = loadImage('assets/1.jpeg');
  TwoImage = loadImage('assets/2.jpeg');
  ThreeImage = loadImage('assets/3.jpeg');
  FourImage = loadImage('assets/4.jpeg');
}


function draw() {
  background(220);
  image(OneImage, 0, 0, width/2, height/2 )
  image(TwoImage, width/2, 0, width/2, height/2 )
  image(ThreeImage, 0, height/2, width/2, height/2)
  image(FourImage, width/2, height/2, width/2, height/2)
}

//code for use in https://editor.p5js.org to make a collage display of four images labelled 1.jpeg, 2.jpeg, 3,jpeg, 4.jpeg stored in assets folder
