window.currentP5 = new p5((p) => {
  let kernels = [];
  let showMessage = false;
  let messageAlpha = 0;
  let effectMode = 'normal'; // tracks current visual mode
  let backgroundPulse = false;
  let baseGray = 220;

  class PopKernel {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.r = p.random(20, 40);
      this.growth = p.random(1, 3);
      this.alpha = 255;
      this.alive = true;
    }

    update() {
      if (this.alive) {
        this.r += this.growth;
        if (
          this.x - this.r < 0 || this.x + this.r > p.width ||
          this.y - this.r < 0 || this.y + this.r > p.height
        ) {
          this.alive = false;
        }
      } else {
        this.alpha -= 10;
      }
    }

    show() {
      p.noFill();
      if (effectMode === 'color') {
        p.stroke(p.random(180, 255), p.random(180, 255), p.random(180, 255), this.alpha);
      } else {
        p.stroke(100, this.alpha);
      }
      p.ellipse(this.x, this.y, this.r * 2);
    }

    isDone() {
      return this.alpha <= 0;
    }
  }

  p.setup = function () {
    p.createCanvas(400, 400);
    p.background(baseGray);
    kernels.push(new PopKernel(p.width / 2, p.height / 2));
  };

  p.draw = function () {
    // Optional pulsing background
    if (backgroundPulse) {
      baseGray = 220 + p.sin(p.frameCount * 0.05) * 10;
    } else {
      baseGray = 220;
    }
    p.background(baseGray);

    // Add a new kernel now and then
    if (p.frameCount % 30 === 0) {
      kernels.push(new PopKernel(p.random(p.width), p.random(p.height)));
    }

    for (let i = kernels.length - 1; i >= 0; i--) {
      let k = kernels[i];
      k.update();
      k.show();
      if (k.isDone()) {
        kernels.splice(i, 1);
        kernels.push(new PopKernel(p.width / 2, p.height / 2));
      }
    }

    // Show floating message gently
    if (p.frameCount > 180) {
      showMessage = true;
    }

    if (showMessage) {
      messageAlpha = p.min(messageAlpha + 2, 180);
      let floatY = 50 + p.sin(p.frameCount * 0.02) * 5;

      p.textAlign(p.CENTER);
      p.textSize(14);
      p.noStroke();
      p.fill(80, messageAlpha);
      p.text("Try clicking the mouse...", p.width / 2, floatY);
    }
  };

  p.mousePressed = function () {
    const r = p.random();

    if (r < 0.25) {
      // 🌪 Reset universe
      kernels = [new PopKernel(p.width / 2, p.height / 2)];
      effectMode = 'normal';
      backgroundPulse = false;
    } else if (r < 0.5) {
      // 🌈 Soft color mode
      effectMode = 'color';
      backgroundPulse = false;
    } else if (r < 0.75) {
      // 🎛 Change speed
      for (let k of kernels) {
        k.growth = p.random(0.5, 5);
      }
      backgroundPulse = false;
    } else {
      // ☁ Activate gentle background pulse
      backgroundPulse = true;
      effectMode = 'normal';
    }
  };
}, 'sketch-holder');
