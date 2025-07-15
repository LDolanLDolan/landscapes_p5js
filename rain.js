window.currentP5 = new p5((p) => {
  p.setup = function () {
    p.createCanvas(400, 400);
  };

  p.draw = function () {
    p.background(220);

    let i = 1;
    while (i < 10) {
      p.fill(0, 0, 255, 100);
      p.ellipse(80 * i, p.height / 2, p.random(10), p.random(10));
      p.ellipse(80 * i, p.height / 2, p.random(10), p.random(10));
      p.ellipse(80 * i, p.height / 2 + 100, p.random(10), p.random(10));
      i = i + 1;
    }

    p.fill(0, 0, 150, 100);
    p.rect(0, p.height / 2, p.width, p.height / 2);
  };
}, 'sketch-holder');
