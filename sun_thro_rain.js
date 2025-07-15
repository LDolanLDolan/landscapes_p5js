function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  background(255);
  noLoop(); // Draw only once
}

function draw() {
  translate(width / 2, height / 2);

  let numShapes = 10;
  let numLayers = 6;

  for (let j = 0; j < numLayers; j++) {
    let radius = map(j, 0, numLayers, 50, 300);
    let size = map(j, 0, numLayers, 10, 50);

    let colors = [
      color(255, 0, 0),
      color(0, 255, 0),
      color(0, 0, 255),
      color(255, 255, 0),
      color(0, 255, 255),
      color(255, 0, 255)
    ];

    for (let i = 0; i < 360; i += 360 / numShapes) {
      push();
      rotate(i + j * 10); // Add layer offset
      fill(colors[j % colors.length]);
      noStroke();
      ellipse(radius, 0, size, size);
      pop();
    }
  }

  // Optional: add center
  fill(0);
  ellipse(0, 0, 5, 5);
}
