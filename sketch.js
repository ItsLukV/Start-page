let todo;
let test;
let img;

// https://editor.p5js.org/icm/sketches/BkRHbimhm

function preload() {
  img = loadImage("src/google-logo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  todo = new Cwindow(100, 100, 200, 200);
  test = new Cwindow(300, 300, 272, 200);
}

function draw() {
  resizeCanvas(windowWidth, windowHeight);
  background(200);
  test.update(200, 200);
  test.move();
  test.over();
  test.showImg(img);

  todo.update(272, 200);
  todo.C_input(50, 50);
  todo.header("TO DO", "rgb(220,220,220)");
  todo.move();
  todo.over();
}

function mousePressed() {
  todo.pressed();
  test.pressed();
}

function mouseReleased() {
  todo.released();
  test.released();
}

function arrRemove(arr, x) {
  if (x === undefined) return;
  arr.splice(x, 1);
}
