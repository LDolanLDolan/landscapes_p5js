function setup() {
  createCanvas(400, 400);
  background(200);

  // Body
  fill(0, 255, 0);
  rect(150, 150, 100, 100);

  // Head
  rect(150, 50, 100, 100);

  // Arms
  rect(110, 150, 40, 20);
  rect(250, 150, 40, 20);

  // Legs
  rect(150, 250, 20, 40);
  rect(230, 250, 20, 40);

  // Eyes
  fill(255);
  rect(170, 80, 20, 20);
  rect(210, 80, 20, 20);

  fill(0);
  rect(178, 88, 4, 4);
  rect(218, 88, 4, 4);

  // Mouth
  fill(255, 0, 0);
  rect(170, 130, 60, 20);

  // Teeth
  fill(255);
  rect(180, 130, 10, 10);
  rect(210, 130, 10, 10);
}
