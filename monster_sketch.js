let monsterX = 150;
let monsterY = 350;
let monsterColor = [0, 255, 0];
let jump = false;
let jumpHeight = 0;



let clouds = [
  { x: 0, y: 100, w: 80, h: 50 },
  { x: 150, y: 150, w: 100, h: 60 },
  { x: 300, y: 80, w: 90, h: 55 }
];

let birdYOffsets = [0, 0, 0, 0];
let birdDirections = [1, -1, 1, -1];

function setup() {
  createCanvas(800, 600);
   saveGif('mySketch', 5);
}

function draw() {
  background(135, 206, 235); // Blue sky

  // Draw grass
  fill(34, 139, 34); // Different shade of green
  rect(0, height - 100, width, 100);

  // Draw tree
  fill(139, 69, 19); // Brown color for the trunk
  rect(600, height - 200, 30, 100); // Tree trunk
  fill(34, 139, 34); // Green color for leaves
  ellipse(615, height - 250, 100, 100); // Tree leaves

  // Draw sun
  fill(255, 223, 0);
  ellipse(700, 100, 80, 80);

  // Draw birds
  fill(0);
  for (let i = 0; i < 4; i++) {
    drawBird(100 + i * 100, 150 + birdYOffsets[i]);
    birdYOffsets[i] += birdDirections[i] * 0.5;
    if (birdYOffsets[i] > 5 || birdYOffsets[i] < -5) {
      birdDirections[i] *= -1;
    }
  }

  // Draw clouds
  fill(255);
  for (let i = 0; i < clouds.length; i++) {
    let cloud = clouds[i];
    if (cloud) {
      ellipse(cloud.x, cloud.y, cloud.w, cloud.h);
      cloud.x += 1;
      if (cloud.x > width + cloud.w / 2) {
        cloud.x = -cloud.w / 2;
      }
      // Check for collision with the monster
      if (monsterX < cloud.x + cloud.w / 2 &&
          monsterX + 100 > cloud.x - cloud.w / 2 &&
          monsterY < cloud.y + cloud.h / 2 &&
          monsterY + 200 > cloud.y - cloud.h / 2) {
        clouds[i] = null; // Remove cloud on collision
      }
    }
  }

  // Draw monster
  fill(monsterColor);
  
  // Body
  rect(monsterX, monsterY + 50, 100, 100);
  
  // Head
  rect(monsterX, monsterY - 50, 100, 100);
  
  // Arms
  rect(monsterX - 40, monsterY + 50, 40, 20);
  rect(monsterX + 100, monsterY + 50, 40, 20);
  
  // Legs
  rect(monsterX, monsterY + 150, 20, 40);
  rect(monsterX + 80, monsterY + 150, 20, 40);
  
  // Eyes
  fill(255);
  rect(monsterX + 20, monsterY - 20, 20, 20);
  rect(monsterX + 60, monsterY - 20, 20, 20);
  
  fill(0);
  rect(monsterX + 28, monsterY - 12, 4, 4);
  rect(monsterX + 68, monsterY - 12, 4, 4);
  
  // Mouth
  fill(255, 0, 0);
  rect(monsterX + 20, monsterY + 30, 60, 20);
  
  // Teeth
  fill(255);
  rect(monsterX + 30, monsterY + 30, 10, 10);
  rect(monsterX + 60, monsterY + 30, 10, 10);
  
  // Handle jumping
  if (jump) {
    jumpHeight += 5;
    if (jumpHeight > 100) {
      jump = false;
    }
  } else {
    if (jumpHeight > 0) {
      jumpHeight -= 5;
    }
  }
  monsterY = constrain(monsterY - jumpHeight, 0, height - 190);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    monsterX -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    monsterX += 10;
  } else if (keyCode === UP_ARROW) {
    monsterY -= 10;
  } else if (keyCode === DOWN_ARROW) {
    monsterY += 10;
  } else if (key === ' ') {
    jump = true;
  }
}

function mousePressed() {
  monsterColor = [random(255), random(255), random(255)];
}

function drawBird(x, y) {
  beginShape();
  vertex(x, y);
  vertex(x + 10, y - 10);
  vertex(x + 20, y);
  endShape();
}


     
