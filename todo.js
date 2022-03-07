class Cwindow {
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
    this.points = [];
  }

  showImg(img) {
    this.img = img;
    push();
    imageMode(CENTER);
    image(this.img, this.x + this.w / 2, this.y + this.h / 2);
    pop();
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
    for (let i = 0; i < this.points.length; i++) {
      this.points[i].over();
    }
  }

  pressed() {
    let e;
    for (let i = 0; i < this.points.length; i++) {
      if (this.points[i].pressed() !== undefined) {
        e = this.points[i].pressed();
      }
    }
    arrRemove(this.points, e);

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
    if (
      mouseX > this.x + this.w - 20 &&
      mouseX < this.x + this.w - 5 &&
      mouseY > this.y + this.h - 20 &&
      mouseY < this.y + this.h
    ) {
      this.sizeing = true;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
    this.sizeing = false;
  }

  C_input(x, y) {
    this.inp.style("height", `${20}px`);
    this.inp.style("width", `${this.w - 70}px`);
    this.inp.position(this.x + 5, this.y + 5 + 20 * this.points.length);
    this.btn.position(
      this.x + this.w - 50,
      this.y + 5 + 20 * this.points.length
    );
    this.btn.style("height", `${25}px`);
    this.btn.style("width", `${40}px`);
    this.btn.mousePressed(() => {
      this.points.push(
        new note(
          this.points.length,
          this.x,
          this.y,
          this.w,
          this.h,
          this.inp.value()
        )
      );
    });
  }

  header(txt, colr) {
    push();
    if (colr === undefined) {
      fill(220);
    } else {
      fill(colr);
    }
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
    text(txt, this.x + 10, this.y - 5 / 2);
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

  move() {
    if (
      mouseX > this.x + this.w - 20 &&
      mouseX < this.x + this.w - 5 &&
      mouseY > this.y + this.h - 20 &&
      mouseY < this.y + this.h
    ) {
      cursor("nwse-resize");
    } else {
      cursor("default");
    }
    push();
    line(
      this.x + this.w - 12,
      this.y + this.h - 5,
      this.x + this.w - 5,
      this.y + this.h - 12
    );
    line(
      this.x + this.w - 8,
      this.y + this.h - 5,
      this.x + this.w - 5,
      this.y + this.h - 8
    );
    pop();
  }

  update(mw, mh) {
    if (mw === undefined) {
      this.w = 200;
    }
    if (mh === undefined) {
      this.h = 200;
    }
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
    if (this.sizeing) {
      this.w = mouseX - this.x;
      this.h = mouseY - this.y;
      if (this.w <= mw) {
        this.w = mw;
      }
      if (this.h <= mh) {
        this.h = mh;
      }
    }
    rect(this.x, this.y, this.w, this.h);
    this.header();
    for (let i = 0; i < this.points.length; i++) {
      this.points[i].update(this.x, this.y, this.w, this.h, i);
      this.points[i].createText("");
    }
  }
}

class note {
  constructor(id, x, y, w, h, inp) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.inp = inp;
    this.createText();
  }

  update(x, y, w, h, id) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.id = id;
    this.removebtn();
    this.createText();
  }

  createText() {
    if (
      mouseX > this.x + this.w - 5 &&
      mouseX < this.x + this.w - 20 * this.id &&
      mouseY > this.x + this.w - 20 &&
      mouseY < this.y + 20 + 20 * this.id
    ) {
      console.log("test");
    }
    textSize(20);
    text(
      "◾  " + this.inp,
      this.x + 5,
      this.y + 5 + 20 * this.id,
      this.w - 5,
      20
    );
  }

  removebtn() {
    push();
    if (this.rollover) {
      stroke(255, 0, 0);
    } else {
      stroke(0);
    }
    line(
      this.x + this.w - 20,
      this.y + 5 + 20 * this.id,
      this.x + this.w - 5,
      this.y + 20 + 20 * this.id
    );
    line(
      this.x + this.w - 5,
      this.y + 5 + 20 * this.id,
      this.x + this.w - 20,
      this.y + 20 + 20 * this.id
    );
    pop();
  }

  pressed() {
    // Did I click on the rectangle?
    if (
      mouseX > this.x + this.w - 20 &&
      mouseX < this.x + this.w - 5 &&
      mouseY > this.y + 5 + 20 * this.id &&
      mouseY < this.y + 20 + 20 * this.id
    ) {
      return this.id;
    }
  }

  over() {
    if (
      mouseX > this.x + this.w - 20 &&
      mouseX < this.x + this.w - 5 &&
      mouseY > this.y + 5 + 20 * this.id &&
      mouseY < this.y + 20 + 20 * this.id
    ) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }
}
