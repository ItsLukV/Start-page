let div;
let hit;

// https://editor.p5js.org/icm/sketches/BkRHbimhm

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  div = new Cdiv(100, 100, 200, 200);
}

function draw() {
  resizeCanvas(windowWidth, windowHeight);
  background(200);
  div.update();
  div.C_input(50, 50);
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
    this.btn = createButton("Add");
    this.close = false;
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

  C_input(x, y) {
    this.inp.position(x + 5, y + 5);
    this.inp.style("height", `${20}px`);
    this.inp.style("width", `${this.w - 70}px`);
    this.btn.position(x + this.w - 50, y + 5);
    this.btn.style("height", `${25}px`);
    this.btn.style("width", `${40}px`);
  }

  header() {
    push();
    fill(220);
    if (this.rollover) {
      fill(120);
    }
    rect(this.x, this.y - 20, this.w, 20);
    if (this.rollover) {
      fill(255);
    } else {
      fill(0);
    }
    textSize(20);
    text("TO DO", this.x + 10, this.y - 5 / 2);
    if (
      mouseX > this.x + this.w - 20 &&
      mouseX < this.x + this.w - 5 &&
      mouseY > this.y - 20 &&
      mouseY < this.y
    ) {
      this.close = true;
      stroke(255, 0, 0);
    }
    strokeWeight(2);
    line(this.x + this.w - 20, this.y - 10, this.x + this.w - 5, this.y - 10);
    pop();
  }

  update() {
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
    this.header();
    rect(this.x, this.y, this.w, this.h);
  }
}
