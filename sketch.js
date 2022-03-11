let todo;
let google;
let tid;
let windows = [];
let c; //ændre cursor

// https://editor.p5js.org/icm/sketches/BkRHbimhm

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  windows[0] = new Todo(100, 100, 200, 200);
  windows[1] = new Gwindow(300, 300, 320, 230);
  windows[2] = new Time(700, 100, 200, 200);

  windows[0].load(JSON.parse(localStorage.todo));
  windows[1].load(JSON.parse(localStorage.google));
  windows[2].load(JSON.parse(localStorage.tid));
}

function draw() {
  resizeCanvas(windowWidth, windowHeight);
  background(200);
  windows[0].update();
  windows[0].CInput();
  windows[0].header("TO DO", "rgb(220,220,220)");
  windows[0].move();
  windows[0].over();

  windows[1].update();
  windows[1].move();
  windows[1].logo("Google");
  windows[1].over();
  windows[1].header("GOOGLE");
  windows[1].cInput();

  windows[2].update();
  windows[2].move();
  windows[2].over();
  windows[2].header("TID");

  if (c) {
    cursor("nwse-resize");
    c = false;
  } else {
    cursor("default");
  }
}

window.onbeforeunload = function () {
  localStorage.todo = JSON.stringify(windows[0].save());
  localStorage.google = JSON.stringify(windows[1].save());
  localStorage.tid = JSON.stringify(windows[2].save());
};

function mousePressed() {
  windows[0].pressed();
  windows[1].pressed();
  windows[2].pressed();
}

function mouseReleased() {
  windows[0].released();
  windows[1].released();
  windows[2].released();
}

function arrRemove(arr, x) {
  if (x === undefined) return;
  arr.splice(x, 1);
}
