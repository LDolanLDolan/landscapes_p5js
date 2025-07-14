let OneImage;
let TwoImage;
let ThreeImage;
let FourImage;

function preload() {
  OneImage = loadImage('assets/1.jpeg');
  TwoImage = loadImage('assets/2.jpeg');
  ThreeImage = loadImage('assets/3.jpeg');
  FourImage = loadImage('assets/4.jpeg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(OneImage, 0, 0, width/2, height/2);
  image(TwoImage, width/2, 0, width/2, height/2);
  image(ThreeImage, 0, height/2, width/2, height/2);
  image(FourImage, width/2, height/2, width/2, height/2);
}
