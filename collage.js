window.currentP5 = new p5((p) => {
  let OneImage;
  let TwoImage;
  let ThreeImage;
  let FourImage;

  p.preload = function () {
    OneImage = p.loadImage('assets/1.jpeg');
    TwoImage = p.loadImage('assets/2.jpeg');
    ThreeImage = p.loadImage('assets/3.jpeg');
    FourImage = p.loadImage('assets/4.jpeg');
  };

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = function () {
    p.background(220);
    p.image(OneImage, 0, 0, p.width / 2, p.height / 2);
    p.image(TwoImage, p.width / 2, 0, p.width / 2, p.height / 2);
    p.image(ThreeImage, 0, p.height / 2, p.width / 2, p.height / 2);
    p.image(FourImage, p.width / 2, p.height / 2, p.width / 2, p.height / 2);
  };
}, 'sketch-holder');
