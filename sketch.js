let todo;
let google;
let c;

// https://editor.p5js.org/icm/sketches/BkRHbimhm

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  todo = new Todo(100, 100, 200, 200);
  google = new Gwindow(300, 300, 320, 230);
}

function draw() {
  resizeCanvas(windowWidth, windowHeight);
  background(200);
  google.update();
  google.move();
  google.logo("Google");
  google.over();
  google.header("GOOGLE");
  google.cInput();

  todo.update();
  todo.CInput();
  todo.header("TO DO", "rgb(220,220,220)");
  todo.move();
  todo.over();

  if (c) {
    cursor("nwse-resize");
    c = false;
  } else {
    cursor("default");
  }
}

function mousePressed() {
  todo.pressed();
  google.pressed();
}

function mouseReleased() {
  todo.released();
  google.released();
}

function arrRemove(arr, x) {
  if (x === undefined) return;
  arr.splice(x, 1);
}
