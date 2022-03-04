let div;
let hit;

// https://editor.p5js.org/icm/sketches/BkRHbimhm

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  div = new Cwindow(100, 100, 200, 200);
}

function draw() {
  resizeCanvas(windowWidth, windowHeight);
  background(200);
  div.update();
  div.C_input(50, 50);
  div.move();
  div.over();
}

function mousePressed() {
  div.pressed();
}

function mouseReleased() {
  div.released();
}
