let div;
let hit;

// https://editor.p5js.org/icm/sketches/BkRHbimhm

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  div = new Cdiv(100, 100, 200, 200);
  frameRate(120);
}

function draw() {
  resizeCanvas(windowWidth, windowHeight);
  background(220);
  background(220);
  div.update();
  div.C_input();
  div.over();
}

function mousePressed() {
  div.pressed();
}

function mouseReleased() {
  div.released();
}

class Cdiv {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.offsetX = 0;
    this.offsetY = 0;
    this.inp = createInput("");
  }

  over() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y - 20 &&
      mouseY < this.y
    ) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  pressed() {
    // Did I click on the rectangle?
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y - 20 &&
      mouseY < this.y
    ) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }

  C_input() {
    this.inp.position(this.x + 5, this.y + 5);
    this.inp.style("height", `${20}px`);
    this.inp.style("width", `${this.w - 20}px`);
  }
  update() {
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
    push();
    if (this.rollover) {
      fill(120);
    }
    rect(this.x, this.y - 20, this.w, 20);
    pop();
    rect(this.x, this.y, this.w, this.h);
  }
}
