window.currentP5 = new p5((p) => {
  let colour = 100;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(220);
  };

  p.draw = function () {
    p.background(colour);
    // any animation code here
  };

  p.mousePressed = function () {
    colour = p.random(255);
  };

}, 'sketch-holder');
