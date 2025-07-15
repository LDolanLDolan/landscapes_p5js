window.currentP5 = new p5((p) => {
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

  p.setup = function () {
    p.createCanvas(800, 600);
  };

  p.draw = function () {
    p.background(135, 206, 235); // Blue sky

    // Grass
    p.fill(34, 139, 34);
    p.rect(0, p.height - 100, p.width, 100);

    // Tree
    p.fill(139, 69, 19);
    p.rect(600, p.height - 200, 30, 100);
    p.fill(34, 139, 34);
    p.ellipse(615, p.height - 250, 100, 100);

    // Sun
    p.fill(255, 223, 0);
    p.ellipse(700, 100, 80, 80);

    // Birds
    p.fill(0);
    for (let i = 0; i < 4; i++) {
      drawBird(100 + i * 100, 150 + birdYOffsets[i]);
      birdYOffsets[i] += birdDirections[i] * 0.5;
      if (birdYOffsets[i] > 5 || birdYOffsets[i] < -5) {
        birdDirections[i] *= -1;
      }
    }

    // Clouds
    p.fill(255);
    for (let i = 0; i < clouds.length; i++) {
      let cloud = clouds[i];
      if (cloud) {
        p.ellipse(cloud.x, cloud.y, cloud.w, cloud.h);
        cloud.x += 1;
        if (cloud.x > p.width + cloud.w / 2) {
          cloud.x = -cloud.w / 2;
        }

        // Collision
        if (
          monsterX < cloud.x + cloud.w / 2 &&
          monsterX + 100 > cloud.x - cloud.w / 2 &&
          monsterY < cloud.y + cloud.h / 2 &&
          monsterY + 200 > cloud.y - cloud.h / 2
        ) {
          clouds[i] = null;
        }
      }
    }

    // Monster
    p.fill(monsterColor);
    p.rect(monsterX, monsterY + 50, 100, 100); // Body
    p.rect(monsterX, monsterY - 50, 100, 100); // Head
    p.rect(monsterX - 40, monsterY + 50, 40, 20); // Left arm
    p.rect(monsterX + 100, monsterY + 50, 40, 20); // Right arm
    p.rect(monsterX, monsterY + 150, 20, 40); // Left leg
    p.rect(monsterX + 80, monsterY + 150, 20, 40); // Right leg

    // Eyes and mouth
    p.fill(255);
    p.rect(monsterX + 20, monsterY - 20, 20, 20);
    p.rect(monsterX + 60, monsterY - 20, 20, 20);
    p.fill(0);
    p.rect(monsterX + 28, monsterY - 12, 4, 4);
    p.rect(monsterX + 68, monsterY - 12, 4, 4);
    p.fill(255, 0, 0);
    p.rect(monsterX + 20, monsterY + 30, 60, 20);
    p.fill(255);
    p.rect(monsterX + 30, monsterY + 30, 10, 10);
    p.rect(monsterX + 60, monsterY + 30, 10, 10);

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

    monsterY = p.constrain(monsterY - jumpHeight, 0, p.height - 190);

    // On-screen instructions
    p.fill(0);
    p.textSize(14);
    p.textAlign(p.LEFT);
    p.text("← → ↑ ↓ to move", 20, 30);
    p.text("Spacebar to jump", 20, 50);
    p.text("Click to change monster colour", 20, 70);
  };

  p.keyPressed = function () {
    if (p.keyCode === p.LEFT_ARROW) {
      monsterX -= 10;
    } else if (p.keyCode === p.RIGHT_ARROW) {
      monsterX += 10;
    } else if (p.keyCode === p.UP_ARROW) {
      monsterY -= 10;
    } else if (p.keyCode === p.DOWN_ARROW) {
      monsterY += 10;
    } else if (p.key === ' ') {
      jump = true;
    }
  };

  p.mousePressed = function () {
    monsterColor = [p.random(255), p.random(255), p.random(255)];
  };

  function drawBird(x, y) {
    p.beginShape();
    p.vertex(x, y);
    p.vertex(x + 10, y - 10);
    p.vertex(x + 20, y);
    p.endShape();
  }
}, 'sketch-holder');
