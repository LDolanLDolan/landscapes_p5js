window.currentP5 = new p5((p) => {
  p.setup = function () {
    p.createCanvas(400, 400);
    p.background(200);

    // Body
    p.fill(0, 255, 0);
    p.rect(150, 150, 100, 100);

    // Head
    p.rect(150, 50, 100, 100);

    // Arms
    p.rect(110, 150, 40, 20);
    p.rect(250, 150, 40, 20);

    // Legs
    p.rect(150, 250, 20, 40);
    p.rect(230, 250, 20, 40);

    // Eyes
    p.fill(255);
    p.rect(170, 80, 20, 20);
    p.rect(210, 80, 20, 20);

    p.fill(0);
    p.rect(178, 88, 4, 4);
    p.rect(218, 88, 4, 4);

    // Mouth
    p.fill(255, 0, 0);
    p.rect(170, 130, 60, 20);

    // Teeth
    p.fill(255);
    p.rect(180, 130, 10, 10);
    p.rect(210, 130, 10, 10);
  };
}, 'sketch-holder');
